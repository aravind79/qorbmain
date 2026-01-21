import { motion } from 'framer-motion';

const logos = [
    { name: 'TechFlow', color: '#3B82F6' },
    { name: 'InnovateX', color: '#10B981' },
    { name: 'Hummingbird', color: '#F59E0B' },
    { name: 'Dazzle', color: '#EC4899' },
    { name: 'CloudScale', color: '#6366F1' },
    { name: 'Nexus', color: '#8B5CF6' },
    { name: 'Vertex', color: '#EF4444' },
    { name: 'Echo', color: '#14B8A6' },
];

const ClientsMarquee = () => {
    return (
        <section className="py-12 bg-background border-y border-border/50 overflow-hidden">
            <div className="container-custom mb-8 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Trusted by Innovative Companies
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap">
                    {/* First Loop */}
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="mx-8 md:mx-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-8 h-8 rounded-lg"
                                    style={{ backgroundColor: logo.color }}
                                />
                                <span className="text-xl md:text-2xl font-display font-bold text-foreground">
                                    {logo.name}
                                </span>
                            </div>
                        </div>
                    ))}
                    {/* Second Loop for seamless scroll */}
                    {logos.map((logo, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="mx-8 md:mx-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-8 h-8 rounded-lg"
                                    style={{ backgroundColor: logo.color }}
                                />
                                <span className="text-xl md:text-2xl font-display font-bold text-foreground">
                                    {logo.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradients for fading edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent" />
            </div>
        </section>
    );
};

export default ClientsMarquee;
