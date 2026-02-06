import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { PLACEHOLDERS } from '@/lib/constants'
import Image from 'next/image'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand & Intro */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <div className="relative h-12 w-48">
                                <Image
                                    src={PLACEHOLDERS.LOGO_WHITE}
                                    alt="ASJ Roofing Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                            Providing expert roofing solutions with precision and care. Based in Frome, our team delivers reliable, high-quality workmanship across Bath, Shepton Mallet, Trowbridge, Warminster, and Wells. From Glastonbury to Melksham, Devizes, and Chippenham, we are your local choice for professional roofing services throughout the South West.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.facebook.com/share/1DHwNNEytb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Our Work</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services/new-roofs" className="hover:text-primary transition-colors">New Roofs</Link></li>
                            <li><Link href="/services/roof-repairs" className="hover:text-primary transition-colors">Roof Repairs</Link></li>
                            <li><Link href="/services/flat-roofs" className="hover:text-primary transition-colors">Flat Roofing</Link></li>
                            <li><Link href="/services/loft-conversions" className="hover:text-primary transition-colors">Loft Conversions</Link></li>
                            <li><Link href="/services/emergency-repairs" className="hover:text-primary transition-colors">Emergency Repairs</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mr-3" />
                                <span>Frome, United Kingdom,<br />BA11 5AS</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-primary shrink-0 mr-3" />
                                <a href="tel:+447974100989" className="hover:text-primary transition-colors">+44 7974 100989</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-primary shrink-0 mr-3" />
                                <a href="mailto:info@asj-roofing.co.uk" className="hover:text-primary transition-colors">info@asj-roofing.co.uk</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {currentYear} ASJ Roofing. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}
