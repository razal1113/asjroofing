"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils/cn'

interface PlaceholderImageProps {
    src: string
    alt: string
    width: number
    height: number
    priority?: boolean
    className?: string
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
    sizes?: string
}

export default function PlaceholderImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    objectFit = 'cover',
    sizes
}: PlaceholderImageProps) {
    const [imgSrc, setImgSrc] = useState(src)
    const [hasError, setHasError] = useState(false)
    const [isDev, setIsDev] = useState(false)

    useEffect(() => {
        setIsDev(process.env.NODE_ENV === 'development')
        setImgSrc(src)
    }, [src])

    // Fallback to a solid color or specific error image if image fails
    // We'll use a data URL for a simple gray box as absolute fallback
    const fallbackSrc = `data:image/svg+xml;base64,${Buffer.from(
        `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#cbd5e1"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#64748b">Image Not Found</text>
    </svg>`
    ).toString('base64')}`

    return (
        <div className={cn("relative overflow-hidden bg-muted", className)}>
            <Image
                src={hasError ? fallbackSrc : imgSrc}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                sizes={sizes}
                style={{ objectFit }}
                className="w-full h-full"
                onError={() => {
                    if (!hasError) {
                        setHasError(true)
                        console.warn(`Failed to load image: ${src}`)
                    }
                }}
            />

            {/* Developer Note Overlay (only in development) */}
            {isDev && !hasError && (
                <div className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded opacity-75 z-10 pointer-events-none uppercase tracking-wider">
                    Placeholder
                </div>
            )}
        </div>
    )
}
