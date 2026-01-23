import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { workContent } from '@/lib/content';
import SEO from '@/components/SEO';
import { seoMetadata } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';

import PageBanner from '@/components/layout/PageBanner';

const Work = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? workContent.projects
        : workContent.projects.filter(project => project.category === activeCategory);

    return (
        <>
            <SEO
                title={seoMetadata.work.title}
                description={seoMetadata.work.description}
                keywords={seoMetadata.work.keywords}
            />
            <Header />

            <PageBanner
                title={workContent.hero.title}
                subtitle={workContent.hero.subtitle}
                description={workContent.hero.description}
                badge="Our Portfolio"
            />

            <main className="pb-20 min-h-screen">
                {/* Hero Section Removed */}

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

                {/* Filter & Projects Grid */}
                <div className="container-custom mb-20">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {workContent.categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-16">
                        {filteredProjects.map((project, idx) => (
                            <div
                                key={project.id}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Project Image/GIF */}
                                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-xl border border-border/50 group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null;
                                                target.src = 'https://placehold.co/600x400?text=Project+Preview';
                                            }}
                                        />
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
