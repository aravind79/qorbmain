import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageBanner from '@/components/layout/PageBanner';
import { homePageContent } from '@/lib/content';
import { Check, X, ArrowRight, Users, AlertCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
    const packagesRef = useRef(null);
    const comparisonRef = useRef(null);
    const painPointsRef = useRef(null);
    const faqRef = useRef(null);

    const packagesInView = useInView(packagesRef, { once: true, margin: "-100px" });
    const comparisonInView = useInView(comparisonRef, { once: true, margin: "-100px" });
    const painPointsInView = useInView(painPointsRef, { once: true, margin: "-100px" });
    const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

    const { pricingPackages } = homePageContent;

    return (
        <>
            <Helmet>
                <title>Pricing & Team Packages | QORB - In-House Tech & Marketing Teams</title>
                <meta
                    name="description"
                    content="Flexible team packages for startups and businesses in India, USA, and UAE. Get a dedicated in-house tech and marketing team without the hiring costs. Essentials and Full Team options available."
                />
                <meta
                    name="keywords"
                    content="team pricing, dedicated team cost, offshore development team, in-house marketing team, tech team India, development team USA, IT team UAE"
                />
            </Helmet>

            <Header />

            <PageBanner
                title={pricingPackages.pageTitle}
                description={pricingPackages.pageDescription}
            />

            <main className="bg-gray-50/50">
                {/* Pricing Packages Section */}
                <section ref={packagesRef} className="py-20">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {pricingPackages.packages.map((pkg, index) => (
                                <motion.div
                                    key={pkg.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={packagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 ${pkg.id === 'full-team' ? 'border-primary relative' : 'border-gray-200'
                                        }`}
                                >
                                    {/* Popular Badge */}
                                    {pkg.id === 'full-team' && (
                                        <div className="absolute top-6 right-6 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                                            Most Popular
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className={`p-8 ${pkg.id === 'full-team' ? 'bg-gradient-to-br from-primary/10 to-blue-500/10' : 'bg-gray-50'}`}>
                                        <h3 className="text-2xl font-bold mb-2 font-display">{pkg.name}</h3>
                                        <p className="text-primary font-semibold mb-4">{pkg.tagline}</p>
                                        <p className="text-muted-foreground mb-6">{pkg.bestFor}</p>

                                        {/* Team Size */}
                                        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 inline-flex">
                                            <Users className="w-5 h-5 text-primary" />
                                            <span className="font-bold text-gray-900">{pkg.teamSize}</span>
                                        </div>
                                    </div>

                                    {/* Team Members */}
                                    <div className="p-8">
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                                            Your Dedicated Team
                                        </h4>
                                        <ul className="space-y-3 mb-8">
                                            {pkg.team.map((member, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <span className="font-semibold text-gray-900">{member.role}</span>
                                                        {member.description && (
                                                            <span className="text-muted-foreground"> - {member.description}</span>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* What's Included */}
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                                            What's Included
                                        </h4>
                                        <ul className="space-y-2 mb-8">
                                            {pkg.included.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Perfect For */}
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                                            Perfect For
                                        </h4>
                                        <ul className="space-y-2 mb-8">
                                            {pkg.perfectFor.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <Link to="/contact">
                                            <Button
                                                className={`w-full ${pkg.id === 'full-team' ? '' : 'variant-outline'}`}
                                                size="lg"
                                            >
                                                {pkg.id === 'essentials' ? 'Request Pricing' : 'Get Custom Quote'}
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table Section */}
                <section ref={comparisonRef} className="py-20 bg-white">
                    <div className="container-custom">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
                        >
                            Package Comparison
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="max-w-5xl mx-auto overflow-x-auto"
                        >
                            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold text-gray-900">Feature</th>
                                        <th className="px-6 py-4 text-center font-bold text-gray-900">Essentials Team</th>
                                        <th className="px-6 py-4 text-center font-bold text-primary bg-primary/5">Full Team</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pricingPackages.comparisonHighlights.map((item, idx) => (
                                        <tr key={idx} className="border-t border-gray-100">
                                            <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                                            <td className="px-6 py-4 text-center text-gray-700">
                                                {typeof item.essentials === 'boolean' ? (
                                                    item.essentials ? (
                                                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                                                    ) : (
                                                        <X className="w-5 h-5 text-red-400 mx-auto" />
                                                    )
                                                ) : (
                                                    item.essentials
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center text-gray-900 font-medium bg-primary/5">
                                                {typeof item.fullTeam === 'boolean' ? (
                                                    item.fullTeam ? (
                                                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                                                    ) : (
                                                        <X className="w-5 h-5 text-red-400 mx-auto" />
                                                    )
                                                ) : (
                                                    item.fullTeam
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </section>

                {/* Pain Points Section */}
                <section ref={painPointsRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={painPointsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
                                {pricingPackages.painPoints.headline}
                            </h2>
                            <p className="text-lg text-muted-foreground text-center mb-12">
                                Here's what building your own team really costs
                            </p>

                            {/* Salary Breakdown */}
                            <div className="bg-red-50/50 border-2 border-red-200 rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-bold mb-6 text-gray-900">💰 Salary Breakdown (Per Month):</h3>
                                <div className="space-y-3 mb-6">
                                    {pricingPackages.painPoints.salaryBreakdown.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center pb-3 border-b border-red-200 last:border-0">
                                            <span className="text-gray-900 font-medium">{item.role}</span>
                                            <span className="text-red-700 font-bold">{item.range}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-red-100 rounded-xl p-4 border border-red-300">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-gray-900">Total Monthly Salaries Alone:</span>
                                        <span className="text-xl font-bold text-red-700">{pricingPackages.painPoints.totalSalaries}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hidden Costs */}
                            <div className="bg-orange-50/50 border-2 border-orange-200 rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-bold mb-6 text-gray-900">But Wait, There's More Hidden Costs:</h3>
                                <ul className="space-y-3">
                                    {pricingPackages.painPoints.hiddenCosts.map((cost, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-orange-600 font-bold">➕</span>
                                            <div>
                                                <span className="font-semibold text-gray-900">{cost.item}:</span>{' '}
                                                <span className="text-orange-700">{cost.cost}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 bg-orange-100 rounded-xl p-4 border border-orange-300">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">❌</span>
                                        <div>
                                            <p className="font-bold text-gray-900">Grand Total:</p>
                                            <p className="text-xl font-bold text-orange-700">{pricingPackages.painPoints.grandTotal}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Headaches */}
                            <div className="bg-gray-100 rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-bold mb-6 text-gray-900">😫 The Headaches:</h3>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {pricingPackages.painPoints.headaches.map((headache, idx) => (
                                        <li key={idx} className="flex items-start gap-2 bg-white rounded-lg p-3">
                                            <AlertCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{headache}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* QORB Benefits */}
                            <div className="bg-green-50/50 border-2 border-green-200 rounded-2xl p-8">
                                <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                                    <span className="text-2xl">✅</span>
                                    QORB In-House Partner:
                                </h3>
                                <ul className="space-y-3">
                                    {pricingPackages.painPoints.qorbBenefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-900 font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 text-center">
                                    <Link to="/contact">
                                        <Button size="xl" className="group">
                                            See How Much You Can Save - Contact Us
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section ref={faqRef} className="py-20 bg-white">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="text-center mb-12">
                                <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Got questions? We've got answers.
                                </p>
                            </div>

                            <Accordion type="single" collapsible className="space-y-4">
                                {pricingPackages.faq.map((item, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        value={`item-${idx}`}
                                        className="bg-gray-50 rounded-xl border border-gray-200 px-6"
                                    >
                                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                            {/* Final CTA */}
                            <div className="mt-12 text-center bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Schedule a free consultation to discuss your specific needs
                                </p>
                                <Link to="/contact">
                                    <Button size="xl" variant="default">
                                        Book Free Consultation
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Pricing;
