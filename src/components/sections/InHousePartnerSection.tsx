import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, DollarSign, Check } from 'lucide-react';
import { homePageContent } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InHousePartnerSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { sectionTitle, headline, description, benefits } = homePageContent.inHousePartner;

    const iconMap = {
        0: Zap,
        1: Users,
        2: DollarSign
    };

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-3 block">
                        {sectionTitle}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900 leading-tight">
                        {headline}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {benefits.map((benefit, index) => {
                        const Icon = iconMap[index as keyof typeof iconMap] || Check;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 text-gray-900">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {benefit.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2">
                                    {benefit.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/pricing">
                        <Button size="xl" className="group">
                            Explore Team Options
                            <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline" size="xl">
                            Get Custom Quote
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default InHousePartnerSection;
