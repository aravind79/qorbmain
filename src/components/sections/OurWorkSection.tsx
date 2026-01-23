import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Homepage Work Section showcasing top projects

import { workContent } from '@/lib/content';

// Get top 4 projects for homepage
const projects = workContent.projects.slice(0, 4).map(project => ({
    id: project.id,
    title: project.title,
    category: project.category,
    description: project.description,
    image: project.image,
    tags: project.technologies.slice(0, 3), // Show first 3 technologies as tags
    link: '/work'
}));

const OurWorkSection = () => {
    return (
        <section className="py-24 bg-white" id="work">
            <div className="container-custom">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Our Work
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Our Innovative And Creative Work Helps Businesses Stand Out.
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <Button variant="outline" className="rounded-full px-6">
                            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Projects Grid - Masonry-like layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`group flex flex-col ${index % 2 === 1 ? 'md:translate-y-16' : ''}`}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/3] mb-6 shadow-sm border border-gray-100/50">
                                <div className="absolute inset-0 bg-gray-200/50 animate-pulse" /> {/* Placeholder loading state */}
                                {/* Overlay with View Project button */}
                                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex justify-end">
                                    <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </span>
                                </div>

                                {/* Actual Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="flex flex-wrap gap-2 mb-3"
                                >
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 border border-gray-200 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View More Button */}
                <div className="mt-16 md:hidden text-center">
                    <Button variant="outline" className="rounded-full px-8 w-full">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default OurWorkSection;
