import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { aboutContent } from '@/lib/content';
import SEO from '@/components/SEO';
import { seoMetadata } from '@/lib/content';
import { CheckCircle2, Globe, Users, Target, Heart, Zap } from 'lucide-react';

const About = () => {
    const iconMap: { [key: string]: any } = {
        'Innovation First': Zap,
        'Client Success': Target,
        'Transparency': CheckCircle2,
        'Quality Obsessed': Heart,
        'Global Mindset': Globe
    };

    return (
        <>
            <SEO
                title={seoMetadata.about.title}
                description={seoMetadata.about.description}
                keywords={seoMetadata.about.keywords}
            />
            <Header />
            <main className="pt-32 pb-20 min-h-screen">
                {/* Hero Section */}
                <div className="container-custom mb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                            {aboutContent.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                            {aboutContent.hero.subtitle}
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {aboutContent.hero.description}
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-slate-50 py-16 mb-20">
                    <div className="container-custom">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {aboutContent.stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Story Section */}
                <div className="container-custom mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                {aboutContent.story.title}
                            </h2>
                            <div className="prose prose-lg text-muted-foreground">
                                {aboutContent.story.content.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="mb-4 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                                <Users className="w-32 h-32 text-primary opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-primary text-white py-16 mb-20">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                                {aboutContent.mission.title}
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed opacity-90">
                                {aboutContent.mission.content}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="container-custom mb-20">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aboutContent.values.map((value, idx) => {
                            const Icon = iconMap[value.title] || CheckCircle2;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Global Presence Section */}
                <div className="bg-slate-50 py-16 mb-20">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                {aboutContent.globalPresence.title}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                {aboutContent.globalPresence.description}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {aboutContent.globalPresence.locations.map((location, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Globe className="w-8 h-8 text-primary" />
                                        <h3 className="text-2xl font-bold">{location.region}</h3>
                                    </div>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {location.description}
                                    </p>
                                    <div className="space-y-2">
                                        {location.highlights.map((highlight, hIdx) => (
                                            <div key={hIdx} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="container-custom mb-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                            {aboutContent.team.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {aboutContent.team.description}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {aboutContent.team.expertise.map((role, idx) => (
                                <div
                                    key={idx}
                                    className="bg-slate-50 rounded-xl p-4 text-sm font-medium text-center"
                                >
                                    {role}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Section */}
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            {aboutContent.whyChoose.title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aboutContent.whyChoose.reasons.map((reason, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                            >
                                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default About;
