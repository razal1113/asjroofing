"use client"

import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { motion } from 'framer-motion'
import { services } from '@/lib/service-data'

export default function ServicesSection() {
    return (
        <section className="py-20 md:py-32 bg-slate-50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        Comprehensive Roofing Services
                    </h2>
                    <p className="text-lg text-slate-600">
                        From minor repairs to complete installations, we deliver excellence in every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Header */}
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm">
                                    <service.icon className="w-5 h-5 text-primary" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                                    {service.shortDescription}
                                </p>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
