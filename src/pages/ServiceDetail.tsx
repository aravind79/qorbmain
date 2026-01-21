import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { servicesData } from './Services'; // Import data from listing page
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.id === slug);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{service.title} | QORB Services</title>
                <meta name="description" content={service.description} />
            </Helmet>
            <Header />
            <main className="pt-32 min-h-screen">
                <div className="container-custom">

                    {/* Back Link */}
                    <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>

                    {/* Hero */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-20">
                        <div className="lg:w-1/2">
                            <div className={`w-16 h-16 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                                <service.icon className={`w-8 h-8 ${service.color.replace('bg-', 'text-')}`} />
                            </div>
                            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <Button size="lg" className="rounded-full px-8">
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="aspect-square rounded-3xl bg-gray-100 relative overflow-hidden shadow-2xl">
                                <div className={`absolute inset-0 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center`}>
                                    <service.icon className={`w-32 h-32 ${service.color.replace('bg-', 'text-')} opacity-20`} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-6">What We Offer</h2>
                            <p className="text-gray-600 mb-6">
                                We provide comprehensive solutions tailored to your industry. Our team of experts works closely with you to identify challenges and implement effective strategies.
                            </p>
                        </div>
                        <div>
                            <div className="grid gap-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <CTASection />
            </main>
            <Footer />
        </>
    );
};

export default ServiceDetail;
