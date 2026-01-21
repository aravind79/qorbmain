import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | QORB</title>
                <meta name="description" content="Get in touch with QORB for your next project. We are ready to help you build the future." />
            </Helmet>
            <Header />
            <main className="pt-32 pb-20 container-custom min-h-screen">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                    Have a project in mind? Let's talk about how we can help you achieve your goals.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        {/* Contact Info */}
                        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                        <p className="mb-2">Email: hello@qorb.tech</p>
                        <p className="mb-2">Phone: +91 79070 21813</p>
                        <p>Address: The Atomic, Technopark, Trivandrum</p>
                    </div>
                    <div>
                        {/* Contact Form Placeholder */}
                        <div className="p-8 border rounded-2xl bg-gray-50">
                            <p className="text-center text-gray-500">Contact Form Component Here</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
