"use client"

import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Phone, ArrowRight } from 'lucide-react'

export default function CTASection() {
    return (
        <section className="py-20 relative overflow-hidden bg-primary text-white">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <div className="w-64 h-64 border-8 border-white rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute bottom-0 left-0 p-12 opacity-10">
                <div className="w-96 h-96 border-8 border-white rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <Container className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
                    Ready for a Roof Transformation?
                </h2>
                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Get a free, no-obligation quote today. Whether it's a small repair or a complete re-roof, our team is ready to help.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="tel:+447974100989">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-white text-primary hover:bg-slate-100 shadow-xl">
                            <Phone className="mr-2 h-5 w-5" />
                            Call 07974 100989
                        </Button>
                    </a>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base border-white/40 text-white hover:bg-white/10 hover:border-white">
                            Request Online Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    )
}
