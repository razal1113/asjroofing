import { PLACEHOLDERS } from './constants';
import { Home, Hammer, Building, TriangleAlert, Shield, CheckCircle, Clock, BadgeCheck } from 'lucide-react';

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
        shortDescription: 'Complete roofing solutions for new builds and replacements using premium materials.',
        fullDescription: 'At ASJ Roofing, we specialize in high-quality new roof installations for both residential and commercial properties. Whether you are building your dream home or need to replace an aging roof, our expert team ensures a durable, weather-tight, and aesthetically pleasing finish. We work with a wide range of materials including slate, clay tiles, and concrete tiles to match your property’s style and local architecture.',
        features: [
            'Complete consultation and planning',
            'High-quality slate and tile options',
            'Full insulation upgrades included',
            '20-year structural guarantee',
            'Building regulations compliant'
        ],
        image: PLACEHOLDERS.SERVICE_NEW_ROOF,
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
        shortDescription: 'Fast and reliable repairs for leaks, tile damage, and storm wear.',
        fullDescription: 'Don’t let a small leak turn into a major problem. Our reactive roof repair service is designed to address issues quickly and effectively. From slipped tiles and cracked slates to damaged flashing and chimney repairs, we diagnose the root cause and provide a lasting fix. We understand the urgency of roof repairs and prioritize keeping your property dry and secure.',
        features: [
            'Leak detection and diagnosis',
            'Slipped or broken tile replacement',
            'Chimney repointing and repairs',
            'Lead flashing restoration',
            'Gutter cleaning and realignment'
        ],
        image: PLACEHOLDERS.SERVICE_REPAIR,
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
        shortDescription: 'Modern flat roof systems including GRP fiberglass and felt roofing.',
        fullDescription: 'We provide advanced flat roofing solutions suitable for garages, extensions, and commercial buildings. Moving away from traditional methods that are prone to cracking, we specialize in GRP (Glass Reinforced Plastic) Fiberglass and high-performance felt systems. These modern materials offer superior durability, waterproofing, and a sleek finish that lasts for decades.',
        features: [
            'GRP Fiberglass roofing specialists',
            'High-performance torch-on felt',
            'EPDM rubber roofing options',
            'Seamless waterproof finish',
            'Ideal for balconies and terraces'
        ],
        image: PLACEHOLDERS.SERVICE_FLAT_ROOF,
        icon: Building,
        benefits: [
            { title: 'Durability', description: 'Modern flat roof systems are incredibly tough and resistant to foot traffic.' },
            { title: 'Low Maintenance', description: 'Once installed, our flat roofs require very little upkeep.' },
            { title: 'Versatility', description: 'Suitable for a wide range of applications from dormers to large commercial roofs.' }
        ]
    },
    {
        id: 'emergency-repairs',
        slug: 'emergency-repairs',
        title: 'Emergency Services',
        shortDescription: '24/7 emergency call-out for critical roofing issues.',
        fullDescription: 'Storm damage and sudden leaks can happen at any time. Our emergency roofing service provides peace of mind when you need it most. We offer rapid response call-outs to secure your property, prevent water ingress, and carry out temporary or permanent repairs. We are equipped to handle storm damage, fallen trees, and severe structural compromises safely.',
        features: [
            '24/7 Rapid response team',
            'Temporary storm damage securing',
            'Insurance work undertaken',
            'Safety assessment and reporting',
            'Immediate waterproofing'
        ],
        image: PLACEHOLDERS.SERVICE_EMERGENCY,
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
