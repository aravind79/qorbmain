import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { homePageContent } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CostComparisonSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { sectionTitle, description, traditional, qorb, painPointCallout } = homePageContent.costComparison;

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            {/* Minimal Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900 leading-tight">
                        {sectionTitle}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {description}
                    </p>
                </motion.div>

                {/* Premium Table Comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto mb-12 pt-12"
                >
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                            <div className="p-6 flex items-center">
                                <span className="font-bold text-gray-700 uppercase text-xs tracking-wider">Features</span>
                            </div>
                            <div className="p-6 flex flex-col items-center justify-center border-l border-gray-200">
                                <div className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-2">
                                    Traditional
                                </div>
                                <h3 className="font-bold text-gray-900 text-base">
                                    {traditional.label}
                                </h3>
                            </div>
                            <div className="p-6 flex flex-col items-center justify-center border-l border-gray-200 bg-gradient-to-br from-primary/5 to-blue-500/5 relative">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                        ⭐ Best Choice
                                    </span>
                                </div>
                                <div className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-2">
                                    QORB
                                </div>
                                <h3 className="font-bold text-gray-900 text-base">
                                    {qorb.label}
                                </h3>
                            </div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-gray-100">
                            {traditional.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, delay: 0.3 + (idx * 0.05) }}
                                    className="grid grid-cols-3 hover:bg-gray-50/50 transition-colors"
                                >
                                    {/* Label */}
                                    <div className="p-6 flex items-center">
                                        <span className="font-bold text-gray-900 uppercase text-sm tracking-wide">
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Traditional Value */}
                                    <div className="p-6 flex items-center justify-center border-l border-gray-100 bg-red-50/30">
                                        <span className="text-red-700 font-semibold text-center">
                                            {item.value}
                                        </span>
                                    </div>

                                    {/* QORB Value */}
                                    <div className="p-6 flex items-center justify-center border-l border-gray-100 bg-green-50/30">
                                        <span className="text-green-700 font-semibold text-center">
                                            {qorb.items[idx].value}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <div className="bg-gradient-to-r from-blue-50 via-primary/5 to-purple-50 rounded-2xl p-8 border border-primary/10">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-2xl">💡</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-2">
                                    {painPointCallout.title}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    {painPointCallout.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center"
                >
                    <Link to="/pricing">
                        <Button size="xl" className="group shadow-xl hover:shadow-2xl transition-all">
                            View Team Packages & Pricing
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CostComparisonSection;
