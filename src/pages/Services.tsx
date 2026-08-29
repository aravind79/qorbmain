import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Code, Cpu, Globe, Rocket, Shield, Smartphone, Layout, Database, Cloud, Video, BarChart, Users, Check, Sparkles } from 'lucide-react';
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
                <title>Our Services | QORB - In-House Teams & Individual Services</title>
                <meta name="description" content="Dedicated in-house tech & marketing teams or individual services. AI Solutions, Web Development, Mobile Apps, MVP, Digital Marketing, SaaS. India, USA, UAE." />
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
                    {/* Featured In-House Partner Section */}
                    <section className="relative -mt-8">
                        <div className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-xl relative overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 relative z-10">
                                <Sparkles className="w-4 h-4" />
                                Featured Service
                            </div>

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="mb-8 max-w-3xl">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
                                        {servicesPageContent.featuredService.title}
                                    </h2>
                                    <p className="text-xl mb-3 text-gray-700 font-medium">
                                        {servicesPageContent.featuredService.subtitle}
                                    </p>
                                    <p className="text-lg text-muted-foreground mb-4">
                                        {servicesPageContent.featuredService.description}
                                    </p>
                                    <p className="text-sm font-semibold text-primary bg-white/80 inline-block px-4 py-2 rounded-lg">
                                        {servicesPageContent.featuredService.highlight}
                                    </p>
                                </div>

                                {/* Team Packages */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {servicesPageContent.featuredService.packages.map((pkg) => (
                                        <div
                                            key={pkg.id}
                                            className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${pkg.featured ? 'border-primary relative' : 'border-gray-200'
                                                } hover:shadow-xl transition-all duration-300`}
                                        >
                                            {pkg.featured && (
                                                <div className="absolute -top-3 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                                                    Most Popular
                                                </div>
                                            )}

                                            <div className="mb-4">
                                                <h3 className="text-2xl font-bold mb-1 font-display">{pkg.name}</h3>
                                                <p className="text-sm text-primary font-semibold mb-3">{pkg.tagline}</p>
                                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 inline-flex">
                                                    <Users className="w-4 h-4 text-primary" />
                                                    <span className="font-bold text-sm text-gray-900">{pkg.teamSize}</span>
                                                </div>
                                            </div>

                                            {/* Team Members */}
                                            <div className="mb-4">
                                                <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Your Team:</p>
                                                <ul className="space-y-2">
                                                    {pkg.teamMembers.map((member, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                            <span className="text-gray-700">{member}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Highlights */}
                                            <div className="mb-6 pb-6 border-b border-gray-100">
                                                <ul className="space-y-1.5">
                                                    {pkg.highlights.map((highlight, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                                                            <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                                            <span>{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* CTA */}
                                            <Link to={pkg.ctaLink}>
                                                <Button
                                                    className={`w-full ${pkg.featured ? '' : 'variant-outline'}`}
                                                    size="lg"
                                                >
                                                    {pkg.ctaText}
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom CTA */}
                                <div className="text-center">
                                    <Link to={servicesPageContent.featuredService.bottomCta.link}>
                                        <Button size="xl" variant="default" className="shadow-lg">
                                            {servicesPageContent.featuredService.bottomCta.text}
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="mt-16 mb-8 text-center">
                            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
                                <span className="text-sm font-semibold text-gray-600">Or choose individual services below</span>
                                <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                            </div>
                        </div>
                    </section>

                    {/* Existing Service Sections */}
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
