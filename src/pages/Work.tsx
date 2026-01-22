import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { workContent } from '@/lib/content';
import SEO from '@/components/SEO';
import { seoMetadata } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';

const Work = () => {
    return (
        <>
            <SEO
                title={seoMetadata.work.title}
                description={seoMetadata.work.description}
                keywords={seoMetadata.work.keywords}
            />
            <Header />
            <main className="pt-32 pb-20 min-h-screen">
                {/* Hero Section */}
                <div className="container-custom mb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                            {workContent.hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                            {workContent.hero.subtitle}
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {workContent.hero.description}
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-slate-50 py-16 mb-20">
                    <div className="container-custom">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
                            {workContent.stats.title}
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {workContent.stats.metrics.map((metric, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                        {metric.number}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="container-custom mb-20">
                    <div className="space-y-16">
                        {workContent.projects.map((project, idx) => (
                            <div
                                key={project.id}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Project Image */}
                                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center shadow-lg">
                                        <span className="text-6xl opacity-20">📊</span>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                                        {project.category}
                                    </div>
                                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                                        {project.title}
                                    </h2>
                                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">{project.client}</span>
                                    </div>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Challenge & Solution */}
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h3 className="font-bold mb-2">Challenge</h3>
                                            <p className="text-sm text-muted-foreground">{project.challenge}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-2">Solution</h3>
                                            <p className="text-sm text-muted-foreground">{project.solution}</p>
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div className="bg-slate-50 rounded-xl p-6 mb-6">
                                        <h3 className="font-bold mb-4">Results</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {project.results.map((result, rIdx) => (
                                                <div key={rIdx} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                                    <span className="text-sm">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Testimonial */}
                                    {project.testimonial && (
                                        <div className="border-l-4 border-primary pl-4 py-2">
                                            <p className="text-sm italic text-muted-foreground mb-2">
                                                "{project.testimonial.quote}"
                                            </p>
                                            <p className="text-sm font-semibold">
                                                {project.testimonial.author}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {project.testimonial.position}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="bg-primary text-white py-16 mb-20">
                    <div className="container-custom">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
                            What Our Clients Say
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {workContent.testimonials.map((testimonial, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                    <p className="text-lg mb-6 leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <p className="font-bold">{testimonial.author}</p>
                                        <p className="text-sm opacity-80">{testimonial.position}</p>
                                        <p className="text-xs opacity-60 mt-1">{testimonial.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="container-custom">
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 text-center">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            {workContent.cta.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {workContent.cta.description}
                        </p>
                        <Button size="lg" className="rounded-full px-8">
                            {workContent.cta.buttonText}
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Work;
