
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { PLACEHOLDERS } from '../src/lib/constants'

// We need to resolve the path relative to process.cwd()
const PUBLIC_DIR = path.join(process.cwd(), 'public')

async function generatePlaceholders() {
    console.log('Starting placeholder generation...')

    // Extract all paths from PLACEHOLDERS object
    const placeholderPaths = Object.values(PLACEHOLDERS)

    // Basic colors for different types
    const colors: Record<string, string> = {
        'logo': '#1e5ba8',
        'hero': '#0f172a',
        'service': '#3b82f6',
        'project': '#0d9488',
        'location': '#64748b',
        'roof': '#a16207',
        'team': '#4f46e5',
        'avatar': '#9333ea',
        'default': '#94a3b8'
    }

    for (const relativePath of placeholderPaths) {
        if (!relativePath || typeof relativePath !== 'string') continue

        const fullPath = path.join(PUBLIC_DIR, relativePath)
        const dir = path.dirname(fullPath)

        // Create directory if it doesn't exist
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }

        // Skip if file exists
        if (fs.existsSync(fullPath)) {
            console.log(`Skipping existing: ${relativePath}`)
            continue
        }

        // Determine color based on filename
        const filename = path.basename(relativePath).toLowerCase()
        let color = colors.default

        for (const [key, val] of Object.entries(colors)) {
            if (filename.includes(key)) {
                color = val
                break
            }
        }

        // Determine dimensions (default 800x600, hero 1920x1080, logo 400x200)
        let width = 800
        let height = 600

        if (filename.includes('hero')) {
            width = 1920
            height = 1080
        } else if (filename.includes('logo')) {
            width = 400
            height = 200
        }

        try {
            // Create SVG overlay text
            const svgText = `
        <svg width="${width}" height="${height}">
          <style>
            .title { fill: white; font-family: sans-serif; font-size: ${Math.floor(width / 20)}px; font-weight: bold; }
          </style>
          <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" class="title">
            ${path.basename(filename, path.extname(filename))}
          </text>
        </svg>
      `

            const buffer = Buffer.from(svgText)

            let chain = sharp({
                create: {
                    width,
                    height,
                    channels: 3,
                    background: color
                }
            })
                .composite([{
                    input: buffer,
                    gravity: 'center'
                }])

            if (filename.endsWith('.png')) {
                await chain.png().toFile(fullPath)
            } else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
                await chain.jpeg().toFile(fullPath)
            } else if (filename.endsWith('.svg')) {
                // For svg we just write the simple svg, ignore sharp for now or use valid svg content
                // sharp cannot write typical vector svg from raster, so we just write a text file for svg
                const simpleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}"><rect width="100%" height="100%" fill="${color}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="sans-serif" font-size="24">${filename}</text></svg>`
                fs.writeFileSync(fullPath, simpleSvg)
                console.log(`Generated SVG: ${relativePath}`)
                continue
            }

            console.log(`Generated: ${relativePath}`)

        } catch (error) {
            console.error(`Error generating ${relativePath}:`, error)
        }
    }

    console.log('Placeholder generation complete!')
}

generatePlaceholders()
