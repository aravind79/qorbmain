import { homePageContent } from '@/lib/content';
import { CheckCircle2, Users, Rocket, Zap, Target } from 'lucide-react';

const InHouseAdvantageSection = () => {
    const { headline, description, pillars } = homePageContent.inHouseAdvantage;

    const ICONS = [Target, Users, Rocket]; // Mapping icons to pillars in order

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-3 block">Why Choose QORB</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900 leading-tight">
                        {headline}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => {
                        const Icon = ICONS[index] || CheckCircle2;
                        return (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{pillar.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InHouseAdvantageSection;
