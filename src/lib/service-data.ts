import { Home, Hammer, Building, TriangleAlert, Shield, CheckCircle, Clock, BadgeCheck, Maximize } from 'lucide-react';

export interface Service {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    image: string;
    icon: any;
    benefits: {
        title: string;
        description: string;
    }[];
}

export const services: Service[] = [
    {
        id: 'new-roofs',
        slug: 'new-roofs',
        title: 'New Roof Installations',
        shortDescription: 'Complete roofing solutions for new builds and replacements across Frome, Bath, and Somerset using premium materials.',
        fullDescription: 'At ASJ Roofing, we specialize in high-quality new roof installations for both residential and commercial properties throughout Somerset and Wiltshire. Whether you are building your dream home or need to replace an aging roof in Bath, our expert team ensures a durable, weather-tight, and aesthetically pleasing finish. We work with a wide range of materials including slate, clay tiles, and concrete tiles to match your property’s style and local South West architecture.',
        features: [
            'Complete consultation and planning',
            'High-quality slate and tile options',
            'Full insulation upgrades included',
            '20-year structural guarantee',
            'Building regulations compliant'
        ],
        image: '/images/new-roof-installations.png',
        icon: Home,
        benefits: [
            { title: 'Property Value', description: 'A new roof significantly increases the market value and curb appeal of your property.' },
            { title: 'Energy Efficiency', description: 'Modern insulation standards help reduce your heating bills and carbon footprint.' },
            { title: 'Peace of Mind', description: 'With our comprehensive guarantees, you can relax knowing your home is protected.' }
        ]
    },
    {
        id: 'roof-repairs',
        slug: 'roof-repairs',
        title: 'Roof Repairs',
        shortDescription: 'Fast and reliable roof repairs for leaks, tile damage, and storm wear across Somerset and Wiltshire.',
        fullDescription: 'Don’t let a small leak turn into a major problem. Our reactive roof repair service is designed to address issues quickly and effectively for homeowners in Frome, Shepton Mallet, and surrounding areas. From slipped tiles and cracked slates to damaged flashing and chimney repairs, we diagnose the root cause and provide a lasting fix. We understand the urgency of roof repairs and prioritize keeping your Somerset property dry and secure.',
        features: [
            'Leak detection and diagnosis',
            'Slipped or broken tile replacement',
            'Chimney repointing and repairs',
            'Lead flashing restoration',
            'Gutter cleaning and realignment'
        ],
        image: '/images/roof-repairs.jpg',
        icon: Hammer,
        benefits: [
            { title: 'Prevent Further Damage', description: 'Fixing minor issues now saves you from expensive structural repairs later.' },
            { title: 'Quick Turnaround', description: 'Our team is available to address urgent repair needs efficiently.' },
            { title: 'Cost-Effective', description: 'Targeted repairs extend the lifespan of your existing roof.' }
        ]
    },
    {
        id: 'flat-roofs',
        slug: 'flat-roofs',
        title: 'Flat Roofing',
        shortDescription: 'Modern flat roof systems including GRP fiberglass and EPDM rubber roofing for Somerset homes.',
        fullDescription: 'We provide advanced flat roofing solutions suitable for garages, extensions, and commercial buildings in Trowbridge, Warminster, and Bath. Moving away from traditional methods that are prone to cracking, we specialize in GRP (Glass Reinforced Plastic) Fiberglass and high-performance flat roof systems. These modern materials offer superior durability, waterproofing, and a sleek finish that lasts for decades in the unpredictable UK weather.',
        features: [
            'GRP Fiberglass roofing specialists',
            'High-performance torch-on felt',
            'EPDM rubber roofing options',
            'Seamless waterproof finish',
            'Ideal for balconies and terraces'
        ],
        image: '/images/roof-maintenance.jpg',
        icon: Building,
        benefits: [
            { title: 'Durability', description: 'Modern flat roof systems are incredibly tough and resistant to foot traffic.' },
            { title: 'Low Maintenance', description: 'Once installed, our flat roofs require very little upkeep.' },
            { title: 'Versatility', description: 'Suitable for a wide range of applications from dormers to large commercial roofs.' }
        ]
    },
    {
        id: 'loft-conversions',
        slug: 'loft-conversions',
        title: 'Loft Conversions',
        shortDescription: 'Transform your attic space with expert structural roofing work in Bath, Frome, and Somerset. We handle everything from dormers to roof lights.',
        fullDescription: 'Unlock the potential of your home with a professional loft conversion. Our team specializes in the structural roofing aspects of attic transformations across Wiltshire and Somerset, ensuring your new space is safe, weatherproof, and beautifully integrated with your existing roofline. Whether you need a simple Velux installation in Trowbridge or a complex dormer construction in Bath, we deliver architectural precision and high-quality finishes that add significant value to your property.',
        features: [
            'Dormer window construction',
            'Velux and skylight installation',
            'Structural roof reinforcement',
            'Insulation and ventilation upgrades',
            'Seamless roof integration'
        ],
        image: '/images/services/loft-conversion.jpg',
        icon: Maximize,
        benefits: [
            { title: 'Extra Space', description: 'Create a new bedroom, office, or living area without moving house.' },
            { title: 'Property Value', description: 'Loft conversions are one of the most effective ways to increase your home’s value.' },
            { title: 'Natural Light', description: 'Strategically placed roof lights can flood your new space with daylight.' }
        ]
    },
    {
        id: 'emergency-repairs',
        slug: 'emergency-repairs',
        title: 'Emergency Services',
        shortDescription: '24/7 emergency roofer call-out for critical roofing issues in Frome, Glastonbury, Wells, and nearby areas.',
        fullDescription: 'Storm damage and sudden leaks can happen at any time. Our emergency roofing service provides peace of mind when you need an emergency roofer fast. We offer rapid response 24/7 call-outs across the South West to secure your property, prevent water ingress, and carry out temporary or permanent repairs. We are equipped to handle storm damage, fallen trees, and severe structural compromises safely and efficiently.',
        features: [
            '24/7 Rapid response team',
            'Temporary storm damage securing',
            'Insurance work undertaken',
            'Safety assessment and reporting',
            'Immediate waterproofing'
        ],
        image: '/images/emergency-services.jpg',
        icon: TriangleAlert,
        benefits: [
            { title: 'Immediate Protection', description: 'We stop water ingress immediately to protect your home’s interior.' },
            { title: 'Safety First', description: 'We ensure the roof is stable and safe before leaving the site.' },
            { title: 'Insurance Support', description: 'We provide detailed reports and photos to support your insurance claims.' }
        ]
    }
];

export function getServiceBySlug(slug: string) {
    return services.find(service => service.slug === slug);
}
