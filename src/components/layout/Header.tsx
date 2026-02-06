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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "top-3" : "top-0 py-4 md:py-6"
            )}
        >
            {/* Inner container: centered + rounded when scrolled */}
            <div
                className={cn(
                    "transition-all duration-300",
                    isScrolled
                        ? "mx-auto max-w-5xl bg-white/90 backdrop-blur-md shadow-lg py-2.5 rounded-2xl px-6 lg:px-10"
                        : "bg-transparent"
                )}
                style={isScrolled ? { marginLeft: 'max(1rem, calc(50% - 36rem))' , marginRight: 'max(1rem, calc(50% - 36rem))' } : undefined}
            >
                {isScrolled ? (
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#home" className="relative z-50 shrink-0">
                            <div className="relative h-10 w-36 md:h-11 md:w-40">
                                <Image
                                    src={PLACEHOLDERS.LOGO}
                                    alt="ASJ Roofing"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-7">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative group">
                                    <Link
                                        href={item.href}
                                        className="text-sm lg:text-base font-semibold transition-colors hover:text-primary text-slate-800 flex items-center whitespace-nowrap"
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
                        <div className="flex items-center shrink-0">
                            <Link
                                href="/contact"
                                className="hidden md:inline-flex items-center gap-2 bg-black text-white text-sm font-medium pl-5 pr-1.5 py-1.5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Get Started
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2F6DF6]">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </span>
                            </Link>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden relative z-50 p-2 text-slate-800"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </nav>
                ) : (
                    <Container>
                        <nav className="flex items-center justify-between">
                            {/* Logo */}
                            <a href="#home" className="relative z-50 shrink-0">
                                <div className="relative h-10 w-40 md:h-12 md:w-48">
                                    <Image
                                        src={PLACEHOLDERS.LOGO}
                                        alt="ASJ Roofing"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </div>
                            </a>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center gap-7 lg:gap-8">
                                {navigation.map((item) => (
                                    <div key={item.name} className="relative group">
                                        <Link
                                            href={item.href}
                                            className="text-base font-semibold transition-colors hover:text-primary text-slate-900 flex items-center whitespace-nowrap"
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
                            <div className="flex items-center shrink-0">
                                <Link
                                    href="/contact"
                                    className="hidden md:inline-flex items-center gap-2.5 bg-black text-white text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    Get Started
                                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2F6DF6]">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </span>
                                </Link>

                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="md:hidden relative z-50 p-2 text-slate-800"
                                    aria-label="Toggle Menu"
                                >
                                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </nav>
                    </Container>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out pt-24 px-6",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col space-y-6">
                    {navigation.map((item) => (
                        <div key={item.name} className="space-y-3">
                            <Link
                                href={item.href}
                                className="text-xl font-semibold text-slate-900 block"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                            {item.children && (
                                <div className="pl-4 space-y-3 border-l-2 border-slate-100">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            className="block text-slate-600"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <hr className="border-slate-100" />
                    <a href="tel:+447974100989" className="flex items-center text-primary font-bold text-lg">
                        <Phone className="h-5 w-5 mr-3" />
                        07974 100989
                    </a>
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center justify-center gap-3 bg-black text-white text-lg font-medium pl-7 pr-2 py-2 rounded-full transition-all duration-200"
                    >
                        Get Started
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2F6DF6]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
