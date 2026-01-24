import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/lib/supabase';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Code, Cpu, Globe, Rocket, Shield, Smartphone, Layout, Database, Cloud, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageBanner from '@/components/layout/PageBanner';
import { servicesContent } from '@/lib/content';

const ICON_MAP: Record<string, any> = {
    Cpu, Globe, Rocket, Shield, Code, Smartphone, Layout, Database, Cloud, Video
};

const SERVICE_META: Record<string, { icon: string, color: string }> = {
    'ai-solutions': { icon: 'Cpu', color: 'bg-blue-500' },
    'web-development': { icon: 'Layout', color: 'bg-purple-500' },
    'mobile-apps': { icon: 'Smartphone', color: 'bg-orange-500' },
    'mvp-development': { icon: 'Rocket', color: 'bg-pink-500' },
    'cyber-security': { icon: 'Shield', color: 'bg-green-500' },
    'saas-development': { icon: 'Cloud', color: 'bg-indigo-500' },
    'media-production': { icon: 'Video', color: 'bg-blue-600' },
};

const Services = () => {
    const [services, setServices] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        setIsLoading(true);
        const { data, error } = await supabase
            .from('services')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
            setServices(data);
        } else {
            console.log('Using static services data (DB empty or error)');
            const staticServices = servicesContent.services.map(s => ({
                ...s,
                // Map ID/Slug to specific Icon and Color to match Home Page section
                icon: SERVICE_META[s.id]?.icon || 'Code',
                color: SERVICE_META[s.id]?.color || 'bg-gray-500',
                description: s.shortDescription // Map shortDescription to description
            }));
            setServices(staticServices);
        }
        setIsLoading(false);
    };

    const getIcon = (iconName: string) => {
        const Icon = ICON_MAP[iconName] || Code;
        return Icon;
    };

    return (
        <>
            <Helmet>
                <title>Our Services | QORB</title>
                <meta name="description" content="Comprehensive technology services including AI Solutions, Web Development, Mobile Apps, MVP Development, Cybersecurity, and SaaS. Serving India, USA & UAE." />
            </Helmet>
            <Header />

            <PageBanner
                title="Our Services"
                description="We deliver cutting-edge digital solutions tailored to your unique business needs across India, USA, and UAE."
                extraContent={
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>100+ Projects Delivered</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span>Global Presence</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <span>24/7 Support</span>
                        </div>
                    </div>
                }
            />

            <main className="pb-20 min-h-screen">
                <div className="container-custom">
                    {isLoading ? (
                        <div className="py-20 text-center">Loading services...</div>
                    ) : services.length === 0 ? (
                        <div className="py-20 text-center text-muted-foreground">
                            <p>No services found.</p>
                            <p className="text-sm mt-2">Go to Admin Dashboard to add services.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service) => {
                                const IconComponent = getIcon(service.icon);
                                // Fallback for ID if using Supabase standard id
                                const linkId = service.slug || service.id;

                                return (
                                    <div key={service.id} className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                                        <div className={`w-14 h-14 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            <IconComponent className={`w-7 h-7 ${service.color.replace('bg-', 'text-')}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                                            {service.description}
                                        </p>
                                        <ul className="mb-8 space-y-2">
                                            {(service.features || []).slice(0, 3).map((feature: string) => (
                                                <li key={feature} className="flex items-center text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to={`/services/${linkId}`}>
                                            <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors">
                                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Services;
