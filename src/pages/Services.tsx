import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Code, Cpu, Globe, Rocket, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const servicesData = [
    {
        id: 'ai-solutions',
        title: 'AI Solutions & Automation',
        description: 'Leverage the power of Artificial Intelligence to automate complex workflows, analyze data, and create personalized experiences.',
        icon: Cpu,
        color: 'bg-blue-500',
        features: ['Custom LLM Integration', 'Automation Chatbots', 'Predictive Analytics', 'Process Automation']
    },
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'High-performance, scalable web applications built with modern frameworks to drive your business growth.',
        icon: Globe,
        color: 'bg-indigo-500',
        features: ['React & Next.js Apps', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development']
    },
    {
        id: 'mobile-apps',
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
        icon: Smartphone,
        color: 'bg-green-500',
        features: ['iOS & Android', 'React Native / Flutter', 'App Store Optimization', 'Mobile UI/UX']
    },
    {
        id: 'mvp-development',
        title: 'Rapid MVP Development',
        description: 'Launch your startup idea in weeks, not months. We build scalable MVPs to test your market fast.',
        icon: Rocket,
        color: 'bg-orange-500',
        features: ['Rapid Prototyping', 'Scalable Architecture', 'User Testing', 'Cloud Deployment']
    },
    {
        id: 'cyber-security',
        title: 'Cyber Security Services',
        description: 'Protect your digital assets with enterprise-grade security auditing, testing, and implementation.',
        icon: Shield,
        color: 'bg-red-500',
        features: ['Penetration Testing', 'Security Audits', 'Compliance', 'Secure Coding']
    },
    {
        id: 'saas-development',
        title: 'SaaS Product Development',
        description: 'End-to-end development of Software as a Service platforms, from multi-tenancy to subscription billing.',
        icon: Code,
        color: 'bg-purple-500',
        features: ['Multi-tenant Architecture', 'Subscription Systems', 'API Development', 'Cloud Infrastructure']
    }
];

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services | QORB</title>
                <meta name="description" content="Comprehensive technical services including AI, Web Development, and Mobile Apps." />
            </Helmet>
            <Header />
            <main className="pt-32 pb-20 min-h-screen">
                <div className="container-custom">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl text-muted-foreground">
                            We deliver cutting-edge digital solutions tailored to your unique business needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service) => (
                            <div key={service.id} className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <service.icon className={`w-7 h-7 ${service.color.replace('bg-', 'text-')}`} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="mb-8 space-y-2">
                                    {service.features.slice(0, 3).map(feature => (
                                        <li key={feature} className="flex items-center text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={`/services/${service.id}`}>
                                    <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Services;
