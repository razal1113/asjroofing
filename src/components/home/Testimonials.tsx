"use client"

import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { PLACEHOLDERS } from '@/lib/constants'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        author: "Lorna Paradise",
        role: "Homeowner, Bath",
        content: "Recommended by Lorna Paradise - one happy customer.",
        avatar: PLACEHOLDERS.AVATAR_DEFAULT,
        rating: 5,
        source: "Facebook"
    },
    {
        author: "James Wilson",
        role: "Property Owner, Frome",
        content: "Excellent service from start to finish. The team was professional, tidy, and the new roof looks fantastic.",
        avatar: PLACEHOLDERS.AVATAR_DEFAULT,
        rating: 5,
        source: "Google"
    },
    {
        author: "Sarah Jenkins",
        role: "Homeowner, Shepton Mallet",
        content: "Had a bad leak during the storms. ASJ Roofing came out quickly and fixed it properly. Highly recommended.",
        avatar: PLACEHOLDERS.AVATAR_DEFAULT,
        rating: 5,
        source: "Google"
    }
]

export default function Testimonials() {
    return (
        <section className="py-20 bg-slate-50">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
                    <p className="text-slate-600">
                        We take pride in our work and value the feedback from our satisfied customers across Somerset.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

                            <div className="flex space-x-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="text-slate-700 italic mb-6 flex-grow leading-relaxed">
                                "{item.content}"
                            </p>

                            <div className="flex items-center mt-auto pt-6 border-t border-slate-100">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-200 mr-4">
                                    <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                                    <span className="text-xs text-slate-500">{item.role}</span>
                                </div>
                                <div className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-1 rounded">
                                    {item.source === "Facebook" && (
                                        <Image src="/images/facebook-logo.png" alt="Facebook" width={16} height={16} className="rounded-full" />
                                    )}
                                    {item.source}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
