import { MetadataRoute } from 'next'
import { services } from '@/lib/service-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://asj-roofing.co.uk'

    // Base pages
    const routes = ['', '/about', '/services', '/projects', '/contact'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic service pages
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Add more dynamic routes here if you have locations or project slugs
    // For now, these are the core indexable pages.

    return [...routes, ...serviceRoutes]
}
