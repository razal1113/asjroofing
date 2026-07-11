import { Container } from "@/components/ui/container";

export const metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for ASJ Roofing. Learn how we handle and protect your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-50 min-h-screen">
            <Container className="max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
                
                <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
                    <p>Last updated: {new Date().toLocaleDateString('en-GB')}</p>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
                    <p>
                        ASJ Roofing ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. 
                        This privacy policy will inform you as to how we look after your personal data when you visit our website 
                        and tell you about your privacy rights.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. The Data We Collect About You</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Personal Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                        used or accessed in an unauthorised way, altered or disclosed.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Contact Us</h2>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                    <ul className="list-none space-y-2">
                        <li>Email: contact@asj-roofing.co.uk</li>
                        <li>Phone: +44 7974 100989</li>
                        <li>Address: Frome, United Kingdom, BA11 5AS</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
