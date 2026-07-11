"use client"

import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const galleryImages = Array.from({ length: 20 }, (_, i) => `/images/gallery/gallery-img-${i + 1}.webp`);

const seoAltTexts = [
    "Complete roof replacement with modern slate tiles in Frome",
    "Professional flat roof installation for a residential extension",
    "High-quality loft conversion with Velux windows",
    "Expert roof repair and maintenance services in Somerset",
    "Dormer loft conversion adding valuable space to a home",
    "Traditional clay tile roof restoration in Bath",
    "EPDM rubber flat roofing system installed on a garage",
    "Hip to gable loft conversion with modern finishings",
    "Emergency roof leak repair and weatherproofing",
    "Custom leadwork and chimney flashing restoration",
    "New pitched roof construction for a home extension",
    "Fascia, soffit, and guttering replacement services",
    "Energy-efficient roof insulation installation",
    "Mansard loft conversion with beautiful interior finishing",
    "Commercial flat roofing project completed on time",
    "Residential roof tiling and slating experts",
    "Skylight installation during a loft conversion project",
    "Storm damage roof repair and tile replacement",
    "Complete structural roof timber replacement",
    "Premium quality roofing materials used on a local property"
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 md:py-32 bg-slate-50">
            <Container>
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm block">Our Work</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                            Project Gallery
                        </h2>
                        <p className="text-lg text-slate-600">
                            Take a closer look at our recently completed roofing and loft conversion projects across the region.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {galleryImages.map((src, index) => (
                        <ScrollReveal key={index} delay={0.05 * (index % 4)}>
                            <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300">
                                <Image
                                    src={src}
                                    alt={seoAltTexts[index] || `Roofing project ${index + 1}`}
                                    title={seoAltTexts[index] || `Roofing project ${index + 1}`}
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    )
}
