"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { PLACEHOLDERS } from '@/lib/constants'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services', href: '/services',
        children: [
            { name: 'New Roofs', href: '/services/new-roofs' },
            { name: 'Roof Repairs', href: '/services/roof-repairs' },
            { name: 'Flat Roofing', href: '/services/flat-roofs' },
            { name: 'Loft Conversions', href: '/services/loft-conversions' },
        ]
    },
    { name: 'Locations', href: '/locations' }, // Or we can list top locations
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
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
                    isScrolled
                        ? "top-3 mx-4 md:mx-8 bg-white/90 backdrop-blur-md shadow-lg py-2 rounded-2xl"
                        : "top-0 bg-transparent py-4 md:py-6"
                )}
            >
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50">
                        <div className="relative h-10 w-40 md:h-12 md:w-48">
                            <Image
                                src={PLACEHOLDERS.LOGO}
                                alt="ASJ Roofing"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-base font-semibold transition-colors hover:text-primary flex items-center",
                                        isScrolled ? "text-slate-800" : "text-slate-900"
                                    )}
                                >
                                    {item.name}
                                    {item.children && <ChevronDown className="ml-1 h-3 w-3" />}
                                </Link>

                                {/* Dropdown */}
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
                    <div className="flex items-center space-x-4">

                        <Link
                            href="/contact"
                            className={cn(
                                "hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                                "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl h-12 rounded-lg px-8 text-base"
                            )}
                        >
                            Get a Quote
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative z-50 p-2 text-slate-800"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </nav>

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
                            className={cn(
                                "w-full flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                "bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg"
                            )}
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}
