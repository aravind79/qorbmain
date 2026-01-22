import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { servicesContent } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';
import SEO from '@/components/SEO';
import { useState } from 'react';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesContent.services.find(s => s.id === slug);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    // Get current location for geo-specific content
    const geoKey = 'india'; // Default, could be dynamic based on user location
    const geoSpecificContent = service.geoSpecific[geoKey as keyof typeof service.geoSpecific];

    // Service schema for SEO
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.fullDescription,
        provider: {
            '@type': 'Organization',
            name: 'QORB'
        },
        areaServed: ['IN', 'US', 'AE'],
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock'
        }
    };

    return (
        <>
            <SEO
                title={`${service.title} | QORB Services`}
                description={service.fullDescription}
                keywords={service.features.join(', ')}
                structuredData={serviceSchema}
            />
            <Header />
            <main className="pt-32 min-h-screen">
                <div className="container-custom">

                    {/* Back Link */}
                    <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>

                    {/* Hero */}
                    <div className="mb-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                {service.fullDescription}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" className="rounded-full px-8">
                                    Get a Quote
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full px-8">
                                    View Case Studies
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Geo-Specific Banner */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-20 text-center">
                        <p className="text-blue-900 leading-relaxed">
                            <strong>Serving {geoKey === 'india' ? 'India' : geoKey === 'usa' ? 'USA' : 'UAE'}:</strong> {geoSpecificContent}
                        </p>
                    </div>

                    {/* Our Approach */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                {service.approach.title}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                {service.approach.description}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.approach.steps.map((step, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="bg-slate-50 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16 py-16 mb-20">
                        <div className="container-custom">
                            <div className="text-center mb-12">
                                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                    Key Benefits
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Why choose our {service.title.toLowerCase()}?
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {service.benefits.map((benefit, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                                            {benefit.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technologies & Tools */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Technologies & Tools
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                We use the latest and most reliable technologies
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {service.technologies.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow font-medium"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Use Cases
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Real-world applications of our {service.title.toLowerCase()}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {service.useCases.map((useCase, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-gray-100">
                                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {useCase.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Process */}
                    <div className="bg-primary text-white rounded-3xl p-8 md:p-12 mb-20">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
                                {service.process.title}
                            </h2>
                            <div className="space-y-4">
                                {service.process.steps.map((step, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-sm font-bold">{idx + 1}</span>
                                        </div>
                                        <p className="text-lg opacity-90 leading-relaxed">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Got questions? We've got answers.
                            </p>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {service.faq.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-semibold pr-4">{item.question}</span>
                                        {openFaqIndex === idx ? (
                                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                        )}
                                    </button>
                                    {openFaqIndex === idx && (
                                        <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Related Services */}
                    <div className="mb-20">
                        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
                            Related Services
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {servicesContent.services
                                .filter(s => s.id !== service.id)
                                .slice(0, 3)
                                .map((relatedService) => (
                                    <Link
                                        key={relatedService.id}
                                        to={`/services/${relatedService.id}`}
                                        className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                                    >
                                        <h3 className="font-bold mb-2">{relatedService.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {relatedService.shortDescription.substring(0, 100)}...
                                        </p>
                                        <span className="text-primary text-sm font-medium">
                                            Learn More →
                                        </span>
                                    </Link>
                                ))}
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
