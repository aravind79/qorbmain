import { motion } from 'framer-motion';

// Professional mockup logos with custom SVG paths
const logos = [
    { name: 'Myflav', url: '/logos/myflav.jpg' },
    { name: 'Origo', url: '/logos/origo_new.png' },
    { name: 'MJ', url: '/logos/mj_logo.png' },
    { name: 'JewelsMuse', url: '/logos/jewelsmuse_new.png' },
    { name: 'Zaasho', url: '/logos/zaasho_new.png' },
    { name: 'Footprints', url: '/logos/footprints.jpg' },
    // Duplicate to ensure enough scrolling content
    { name: 'Myflav', url: '/logos/myflav.jpg' },
    { name: 'Origo', url: '/logos/origo_new.png' },
    { name: 'MJ', url: '/logos/mj_logo.png' },
    { name: 'JewelsMuse', url: '/logos/jewelsmuse_new.png' },
    { name: 'Zaasho', url: '/logos/zaasho_new.png' },
    { name: 'Footprints', url: '/logos/footprints.jpg' },
];

const ClientsMarquee = () => {
    return (
        <section className="py-12 bg-white border-y border-border/50 overflow-hidden">
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
                            className="mx-12 md:mx-20 flex items-center justify-center grayscale-0 opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-16 md:h-20 w-auto object-contain mix-blend-multiply max-w-[180px]"
                            />
                        </div>
                    ))}
                    {/* Second Loop for seamless scroll */}
                    {logos.map((logo, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="mx-12 md:mx-20 flex items-center justify-center grayscale-0 opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-16 md:h-20 w-auto object-contain mix-blend-multiply max-w-[180px]"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradients for fading edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent" />
            </div>
        </section>
    );
};

export default ClientsMarquee;
