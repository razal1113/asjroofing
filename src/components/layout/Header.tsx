"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { PLACEHOLDERS } from '@/lib/constants'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const navigation = [
    { name: 'Home', href: '#home' },
    {
        name: 'Services', href: '#services',
        children: [
            { name: 'New Roofs', href: '#services' },
            { name: 'Roof Repairs', href: '#services' },
            { name: 'Flat Roofing', href: '#services' },
            { name: 'Loft Conversions', href: '#services' },
        ]
    },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isScrollingUp, setIsScrollingUp] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Basic scrolled state
            setIsScrolled(currentScrollY > 20)

            // Directional scroll state (only if we've scrolled a bit)
            if (currentScrollY > 100) {
                if (currentScrollY < lastScrollY) {
                    setIsScrollingUp(true)
                } else {
                    setIsScrollingUp(false)
                }
            } else {
                setIsScrollingUp(false)
            }

            setLastScrollY(currentScrollY)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    // State for the scroll-up design
    const isShowingFloatingHeader = isScrolled && isScrollingUp

    return (
        <header
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "top-2 md:top-4" : "top-0 py-4 md:py-6"
            )}
        >
            {/* Inner container */}
            <div
                className={cn(
                    "transition-all duration-500 ease-in-out",
                    isShowingFloatingHeader
                        ? "mx-auto max-w-5xl bg-black shadow-2xl py-3 rounded-b-3xl px-6 lg:px-10"
                        : isScrolled
                            ? "mx-auto max-w-5xl bg-white/90 backdrop-blur-md shadow-lg py-2.5 rounded-2xl px-6 lg:px-10"
                            : "bg-transparent w-full"
                )}
                style={isScrolled ? { marginLeft: 'max(1rem, calc(50% - 32rem))', marginRight: 'max(1rem, calc(50% - 32rem))' } : undefined}
            >
                <nav className="flex items-center justify-between">
                    {/* Mobile Logo Left / Desktop Logo Left */}
                    <a href="#home" className="relative z-50 shrink-0">
                        <div className={cn(
                            "relative transition-all duration-500",
                            isScrolled ? "h-9 w-32 md:h-10 md:w-36" : "h-11 w-40 md:h-14 md:w-56"
                        )}>
                            <Image
                                src="/logo-new.png"
                                alt="ASJ Roofing"
                                fill
                                className={cn(
                                    "object-contain object-left transition-all duration-500",
                                    isShowingFloatingHeader && "filter invert brightness-0 invert-[1]"
                                )}
                                priority
                            />
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-sm lg:text-base font-bold transition-all duration-300 hover:text-primary flex items-center whitespace-nowrap",
                                        isShowingFloatingHeader ? "text-white" : "text-slate-800"
                                    )}
                                >
                                    {item.name}
                                    {item.children && <ChevronDown className="ml-1 h-3 w-3" />}
                                </Link>

                                {item.children && (
                                    <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4 shrink-0">
                        <a
                            href="tel:+447974100989"
                            className={cn(
                                "hidden md:inline-flex items-center gap-2 text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full transition-all duration-300",
                                isShowingFloatingHeader
                                    ? "bg-white text-black hover:bg-slate-100"
                                    : "bg-black text-white hover:shadow-lg hover:-translate-y-0.5"
                            )}
                        >
                            Call Now
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2F6DF6]">
                                <Phone className="w-4 h-4 text-white" />
                            </span>
                        </a>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "relative z-50 p-2 transition-colors duration-500",
                                isShowingFloatingHeader ? "text-white" : "text-slate-800"
                            )}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-white/98 backdrop-blur-lg z-40 md:hidden transition-all duration-500 ease-in-out pt-28 px-8",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                )}
            >
                <div className="flex flex-col space-y-8">
                    {navigation.map((item, idx) => (
                        <div
                            key={item.name}
                            className="space-y-4"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            <Link
                                href={item.href}
                                className="text-2xl font-bold text-slate-900 block tracking-tight"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                            {item.children && (
                                <div className="pl-5 space-y-4 border-l-2 border-slate-100">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            className="block text-slate-500 text-lg font-medium"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="pt-8 space-y-4">
                        <a
                            href="tel:+447974100989"
                            className="w-full flex items-center justify-between bg-black text-white text-xl font-bold pl-8 pr-2 h-16 rounded-full transition-all shadow-xl active:scale-95"
                        >
                            Get in touch
                            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2F6DF6]">
                                <Phone className="w-5 h-5 text-white" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
