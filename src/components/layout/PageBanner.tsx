import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PageBannerProps {
    title: string;
    subtitle?: string;
    description?: string;
    badge?: string;
    align?: 'left' | 'center';
    extraContent?: React.ReactNode;
}

const PageBanner = ({
    title,
    subtitle,
    description,
    badge,
    align = 'center',
    extraContent
}: PageBannerProps) => {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>

                    {/* Badge */}
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 ${align === 'center' ? 'mx-auto' : ''}`}
                        >
                            {badge}
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
                    >
                        {title}
                    </motion.h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl text-primary font-semibold mb-6"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {/* Description */}
                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                        >
                            {description}
                        </motion.p>
                    )}

                    {/* Extra Content */}
                    {extraContent && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8"
                        >
                            {extraContent}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageBanner;
