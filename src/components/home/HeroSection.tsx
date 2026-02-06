"use client"

import Image from 'next/image'
import Link from 'next/link'
import { PLACEHOLDERS } from '@/lib/constants'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center pt-20 overflow-hidden bg-slate-900">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={PLACEHOLDERS.HERO_HOME}
                    alt="Modern home with premium roofing by ASJ Roofing"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8"
                    >
                        {/* Trusted Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-blue-100 text-sm font-medium"
                        >
                            <ShieldCheck className="w-4 h-4 text-accent" />
                            <span>Trusted Roofing Experts in Somerset</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                            Smart Roofing for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">
                                Modern Homes.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                            Our expert roofing services are designed to protect your home with quality and precision.
                            From new installations to emergency repairs.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto text-base px-8 h-14 rounded-full bg-primary hover:bg-primary/90">
                                    Get Started Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/projects" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 h-14 rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm">
                                    View Our Work
                                </Button>
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="relative w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-800">
                                        <Image
                                            src={PLACEHOLDERS.WORKER_GENERIC}
                                            alt="Happy Customer"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-accent">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span className="text-sm text-slate-400">Based on 240+ verified reviews</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Card / Interactive Element (Optional right side visual) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hidden lg:block relative h-full w-full"
                    >
                        {/* Tooltip Overlay */}
                        <div className="absolute top-[30%] right-[20%] transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            {/* Pulse Effect */}
                            <div className="relative flex items-center justify-center w-6 h-6 mb-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </div>

                            {/* Dashed Line */}
                            <div className="h-16 w-0 border-l-2 border-dashed border-white/50 mb-2"></div>

                            {/* Label */}
                            <div className="bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-xl">
                                <p className="text-white text-sm font-medium whitespace-nowrap">Boral Steel Roofing</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
