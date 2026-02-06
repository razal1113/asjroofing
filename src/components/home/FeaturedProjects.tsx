"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { PLACEHOLDERS } from '@/lib/constants'
import { ArrowRight, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const projects = [
    {
        id: 1,
        title: "Rosslyne Road Renovation",
        location: "Bath",
        category: "Full Reroof",
        image: PLACEHOLDERS.PROJECT_ROSSLYNE_AFTER_1,
        size: "large" // Span 2 cols
    },
    {
        id: 2,
        title: "Flat Roof Replacement",
        location: "Frome",
        category: "Flat Roof",
        image: PLACEHOLDERS.PROJECT_GENERIC_1,
        size: "small"
    },
    {
        id: 3,
        title: "Heritage Tile Repair",
        location: "Bradford on Avon",
        category: "Repair",
        image: PLACEHOLDERS.PROJECT_GENERIC_2,
        size: "small"
    }
]

export default function FeaturedProjects() {
    return (
        <section className="py-20 md:py-32 bg-slate-900 text-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Recent Projects</h2>
                        <p className="text-slate-400 text-lg">
                            Take a look at some of our latest roofing work across Somerset and Wiltshire.
                        </p>
                    </div>
                    <Link href="/projects">
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={cn(
                                "group relative rounded-2xl overflow-hidden bg-slate-800",
                                project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                            )}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                <div className="flex items-center text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <MapPin className="w-4 h-4 mr-1 text-primary" />
                                    {project.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
