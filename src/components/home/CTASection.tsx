"use client"

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-primary text-white">
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
                            <button className="w-full sm:w-auto inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                                Get in touch with us
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2F6DF6]">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </span>
                            </button>
                        </a>
                    <a href="mailto:info@asj-roofing.co.uk">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base border-white/40 text-white hover:bg-white/10 hover:border-white">
                            Request Online Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </a>
                </div>
            </Container>
        </section>
    )
}
