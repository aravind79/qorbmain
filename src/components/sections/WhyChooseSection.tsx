import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Zap, BadgeDollarSign, Globe2 } from 'lucide-react';

const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'Every solution powered by cutting-edge AI technology for intelligent automation and superior results.',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      iconColor: 'text-blue-600',
      delay: 0.1
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Launch in weeks, not months. Our agile methodology and no-code expertise ensures fast time to market.',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      iconColor: 'text-pink-600',
      delay: 0.2
    },
    {
      icon: BadgeDollarSign,
      title: 'Tailored Solutions',
      description: 'Customized packages designed to fit your specific business needs and budget requirements.',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      iconColor: 'text-emerald-600',
      delay: 0.3
    },
    {
      icon: Globe2,
      title: 'Global Expertise',
      description: 'Serving businesses across India, UAE, and USA with localized support and international standards.',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      iconColor: 'text-orange-600',
      delay: 0.4
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Businesses Choose <span className="text-primary">QORB</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern solutions backed by proven results
          </p>
        </motion.div>

        {/* Features Grid - Adapted for 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="relative h-full"
            >
              {/* Card Container */}
              <div
                className={`
                  ${feature.bg} 
                  border-2 border-dashed ${feature.border} 
                  rounded-t-[60px] lg:rounded-t-[80px] rounded-b-2xl 
                  p-6 pt-24 pb-8
                  h-full flex flex-col items-center text-center
                  transition-transform hover:-translate-y-2 duration-300
                  relative
                `}
              >
                {/* Illustration/Icon Placeholder (Absolute Top) */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-border/50">
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
