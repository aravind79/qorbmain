import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  ShoppingCart, 
  HeartPulse, 
  Building2, 
  GraduationCap, 
  Banknote,
  Hotel,
  ArrowRight
} from 'lucide-react';

const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: ShoppingCart,
      name: 'E-Commerce & Retail',
      description: 'AI-powered recommendations, customer support, and inventory management',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: HeartPulse,
      name: 'Healthcare & Wellness',
      description: 'Patient engagement, appointment scheduling, and health chatbots',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Building2,
      name: 'Real Estate',
      description: 'Property inquiries, virtual tours, and lead qualification',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      name: 'Education & EdTech',
      description: 'Student support, course recommendations, and learning assistants',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Banknote,
      name: 'Finance & FinTech',
      description: 'Transaction support, fraud detection, and financial advisors',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Hotel,
      name: 'Hospitality & Tourism',
      description: 'Booking assistance, concierge services, and guest experiences',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="solutions" ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored technology solutions that address the unique challenges of your industry
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 flex items-start gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mt-3 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View Solutions
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
