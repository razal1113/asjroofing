"use client"

import { Container } from '@/components/ui/container'
import { CheckCircle, Shield, Clock, Users, Trophy, ThumbsUp } from 'lucide-react'
import Image from 'next/image'

const features = [
    {
        title: "Licensed & Insured",
        description: "Fully covered with public liability insurance for your peace of mind.",
        icon: Shield
    },
    {
        title: "Experienced Team",
        description: "Over 20 years of combined experience in all aspects of roofing.",
        icon: Users
    },
    {
        title: "Quality Materials",
        description: "We only use premium materials from trusted suppliers for lasting results.",
        icon: Trophy
    },
    {
        title: "On Time & Budget",
        description: "Reliable scheduling and transparent pricing with no hidden costs.",
        icon: Clock
    },
    {
        title: "Workmanship Guarantee",
        description: "All new roof installations come with a comprehensive guarantee.",
        icon: CheckCircle
    },
    {
        title: "Customer Satisfaction",
        description: "Proud of our reputation in Frome with 5-star reviews across the board.",
        icon: ThumbsUp
    }
]

const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "100%" },
]

export default function WhyChooseUs() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side - Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                Why Homeowners Trust <br className="hidden md:block" />
                                <span className="text-primary">ASJ Roofing</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We understand that a roof is one of the most significant investments you'll make for your home.
                                That's why we bring professional expertise, honest advice, and quality workmanship to every job, big or small.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                                        <p className="text-sm text-slate-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats Row */}
                        <div className="pt-8 border-t border-slate-100 grid grid-cols-3 gap-8">
                            {stats.map(stat => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Visual/Image Card */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[4/5] lg:aspect-square">
                            {/* We can use a pattern or just a really nice gradient card if no image */}
                            <Image
                                src="/images/google-review-bg.png"
                                alt="Google Reviews background"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-between">
                                <Shield className="w-20 h-20 text-white/20" />

                                <blockquote className="space-y-6">
                                    <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                                        "The quality of materials and attention to detail were impressive. Very professional team."
                                    </p>
                                    <footer className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                                            MP
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">Mark P.</div>
                                            <div className="text-blue-200 text-sm">Review from Google</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl" />
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl" />
                    </div>

                </div>
            </Container>
        </section>
    )
}
