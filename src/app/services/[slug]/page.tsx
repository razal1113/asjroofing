import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceBySlug, services } from '@/lib/service-data';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all services
export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<import('next').Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) return {};

    return {
        title: service.title,
        description: service.shortDescription,
        alternates: {
            canonical: `https://asj-roofing.co.uk/services/${slug}`,
        },
        openGraph: {
            title: `${service.title} | ASJ Roofing`,
            description: service.shortDescription,
            url: `https://asj-roofing.co.uk/services/${slug}`,
            siteName: 'ASJ Roofing',
            type: 'website',
            locale: 'en_GB',
            images: [
                {
                    url: service.image, // Next.js will use metadataBase if this is relative, but we can also use absolute if preferred.
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${service.title} | ASJ Roofing`,
            description: service.shortDescription,
            images: [service.image],
        },
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/60" />
                <Container className="relative z-10 text-center text-white space-y-6">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground backdrop-blur-sm text-sm font-medium">
                        Professional Roofing Services
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                        {service.shortDescription}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <a
                            href="mailto:info@asj-roofing.co.uk"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary hover:bg-blue-700 text-white min-w-[160px]"
                        >
                            Get a Free Quote
                        </a>
                        <a
                            href="tel:+447974100989"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 border border-input bg-white/10 border-white/20 text-white hover:bg-white/20 min-w-[160px]"
                        >
                            <Phone className="mr-2 h-4 w-4" /> Call Now
                        </a>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-20 md:py-32">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Content Column */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Overview</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {service.fullDescription}
                                </p>
                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                                                <span className="text-slate-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose This Service?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                            <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                                            <p className="text-sm text-slate-600">{benefit.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Service Menu */}
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Our Services</h3>
                                <nav className="space-y-2">
                                    {services.map((s) => (
                                        <Link
                                            key={s.slug}
                                            href={`/services/${s.slug}`}
                                            className={`flex items-center justify-between p-3 rounded-lg transition-all ${s.slug === slug
                                                ? 'bg-primary text-white shadow-md'
                                                : 'hover:bg-white hover:shadow-sm text-slate-600'
                                                }`}
                                        >
                                            <span className="font-medium">{s.title}</span>
                                            {s.slug === slug && <ArrowRight className="w-4 h-4" />}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Contact Widget */}
                            <div className="bg-slate-900 p-8 rounded-2xl text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4">Need Expert Advice?</h3>
                                    <p className="text-slate-300 mb-6 text-sm">
                                        Speak to our friendly team today to discuss your roofing requirements.
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="tel:+447974100989"
                                            className="w-full inline-flex items-center justify-center rounded-md bg-white text-slate-900 hover:bg-slate-100 h-10 px-4 py-2 font-medium transition-colors"
                                        >
                                            +44 7974 100989
                                        </a>
                                    </div>
                                </div>
                                {/* Decorative circle */}
                                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA Section Reused or Custom */}
            <section className="bg-primary/5 py-16">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                        <div className="space-y-4 max-w-xl">
                            <h2 className="text-3xl font-bold text-slate-900">Ready to start your project?</h2>
                            <p className="text-slate-600">
                                Get in touch for a free, no-obligation quote. We'll survey your roof and provide a detailed plan of action.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button size="lg" className="bg-primary hover:bg-blue-700">
                                Book a Survey
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
