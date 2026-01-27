import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Code, Cpu, Globe, Rocket, Shield, Smartphone, Layout, Database, Cloud, Video, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageBanner from '@/components/layout/PageBanner';
import { servicesContent, servicesPageContent } from '@/lib/content';

const ICON_MAP: Record<string, any> = {
    Cpu, Globe, Rocket, Shield, Code, Smartphone, Layout, Database, Cloud, Video, BarChart
};

const SERVICE_META: Record<string, { icon: string, color: string }> = {
    'ai-solutions': { icon: 'Cpu', color: 'bg-blue-500' },
    'web-development': { icon: 'Layout', color: 'bg-purple-500' },
    'mobile-apps': { icon: 'Smartphone', color: 'bg-orange-500' },
    'mvp-development': { icon: 'Rocket', color: 'bg-pink-500' },
    'digital-marketing-seo': { icon: 'BarChart', color: 'bg-green-500' },
    'saas-development': { icon: 'Cloud', color: 'bg-indigo-500' },
    'media-production': { icon: 'Video', color: 'bg-blue-600' },
};

const Services = () => {
    const getIcon = (iconName: string) => {
        return ICON_MAP[iconName] || Code;
    };

    return (
        <>
            <Helmet>
                <title>Our Services | QORB</title>
                <meta name="description" content="Comprehensive technology services including AI Solutions, Web Development, Mobile Apps, MVP Development, Digital Marketing, SEO/GEO, and SaaS." />
            </Helmet>
            <Header />

            <PageBanner
                title={servicesPageContent.hero.headline}
                description={servicesPageContent.hero.subheadline}
                extraContent={
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Product & Engineering</span>
                        <span className="bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Growth & Intelligence</span>
                        <span className="bg-purple-500/10 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">Brand & Experience</span>
                    </div>
                }
            />

            <main className="pb-20 min-h-screen bg-gray-50/50">
                <div className="container-custom space-y-24">
                    {servicesPageContent.sections.map((section) => (
                        <div key={section.id} className="scroll-mt-24" id={section.id}>
                            <div className="mb-12 md:max-w-3xl">
                                <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">{section.title}</span>
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{section.positioning}</h2>
                                <p className="text-xl text-muted-foreground leading-relaxed">{section.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.serviceIds.map((serviceId) => {
                                    // Find service data from the main content repository
                                    const service = servicesContent.services.find(s => s.id === serviceId);
                                    if (!service) return null;

                                    // Get Metadata
                                    const meta = SERVICE_META[serviceId] || { icon: 'Code', color: 'bg-gray-500' };
                                    const IconComponent = getIcon(meta.icon);
                                    // Fallback for slug if missing, using id. Cast to custom type to avoid TS error
                                    const linkId = (service as { id: string; slug?: string }).slug || service.id;

                                    return (
                                        <div key={service.id} className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
                                            <div className={`w-14 h-14 rounded-2xl ${meta.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                                <IconComponent className={`w-7 h-7 ${meta.color.replace('bg-', 'text-')}`} />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3 font-display">{service.title}</h3>
                                            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                                                {service.fullDescription.substring(0, 120)}...
                                            </p>

                                            <div className="border-t border-gray-100 pt-6 mt-auto">
                                                <p className="font-semibold text-sm text-gray-900 mb-3">{service.shortDescription}</p>
                                                <Link to={`/services/${linkId}`}>
                                                    <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors">
                                                        Explore Solution <ArrowRight className="w-4 h-4 ml-2" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Services;
