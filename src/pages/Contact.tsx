import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ContactForm } from '@/components/ui/contact-form';

import PageBanner from '@/components/layout/PageBanner';
import { MapPin, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | QORB</title>
                <meta name="description" content="Get in touch with QORB for your next project. We are ready to help you build the future." />
            </Helmet>
            <Header />

            <PageBanner
                title="Get in Touch"
                description="Have a project in mind? Let's talk about how we can help you achieve your goals."
                badge="Contact Us"
            />

            <main className="pb-20 container-custom min-h-screen">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        {/* Contact Info */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-4 text-lg">
                                <p><span className="font-semibold">Email:</span> hello@qorb.tech</p>
                                <p><span className="font-semibold">Phone:</span> +91 79070 21813</p>
                                <p><span className="font-semibold">Address:</span> The Atomic, Technopark, Trivandrum</p>
                            </div>
                        </div>

                        {/* Support & Feedback */}
                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 transition-colors hover:bg-blue-100/50">
                                <h4 className="font-bold text-base mb-3 text-gray-900">Customer Support</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Our support team is available around the clock to address any technical concerns or project queries you may have.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-colors hover:bg-slate-100">
                                <h4 className="font-bold text-base mb-3 text-gray-900">Feedback & Suggestions</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    We value your feedback and are continuously working to improve QORB. Your input is crucial in shaping our future.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
