import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Code2, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discover',
      description: 'We understand your business goals, challenges, and requirements through detailed consultation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      number: '02',
      title: 'Design',
      description: 'We create a strategic roadmap and design solutions tailored to your specific needs.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Code2,
      number: '03',
      title: 'Develop',
      description: 'Our expert team builds your solution using cutting-edge technology and best practices.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Deploy & Optimize',
      description: 'We launch your solution and continuously optimize for better performance and results.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, transparent, and results-driven
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mt-20">
          {/* Desktop Wavy Timeline */}
          <div className="hidden lg:block relative h-[400px]">
            {/* Connecting Wave Line */}
            <svg className="absolute top-0 left-0 w-full h-full" overflow="visible">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M50,200 C250,50 450,350 750,200 C1050,50 1250,350 1450,200"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="4"
                strokeDasharray="10 5"
                className="opacity-50"
              />
            </svg>

            {steps.map((step, index) => {
              // Custom positioning for 4 steps along the wave
              // These percentages approximate the peaks and troughs of the curve above
              const positions = [
                { top: '20%', left: '10%' },
                { top: '70%', left: '35%' },
                { top: '20%', left: '60%' },
                { top: '70%', left: '85%' },
              ];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="absolute transform -translate-x-1/2"
                  style={positions[index]}
                >
                  <div className="relative group">
                    {/* Content Box - Alternating Position */}
                    <div className={`absolute ${isEven ? '-top-32' : 'top-24'} left-1/2 -translate-x-1/2 w-64 text-center`}>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        <span className="text-primary mr-2">{step.number}.</span>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Icon Node */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} p-0.5 flex items-center justify-center shadow-lg relative z-10 cursor-pointer`}
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-foreground" />
                      </div>
                      {/* Ripple Effect */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20 animate-ping -z-10`} />
                    </motion.div>

                    {/* Connector Line to Icon */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-border ${isEven ? '-top-8' : 'top-16'} -z-10`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Vertical Wavy Timeline */}
          <div className="lg:hidden relative pb-12">
            {/* Vertical Wave Line SVG */}
            <svg className="absolute top-0 left-4 h-full w-20 transform -translate-x-1/2 overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Vertical Sine Wave: M start-x start-y Q control-x control-y end-x end-y T ... */}
              {/* Adjusting path to wiggle around center (x=10) */}
              <path
                d="M 10,0 Q 30,50 10,100 T 10,200 T 10,300 T 10,400 T 10,500 T 10,600 T 10,700 T 10,800"
                fill="none"
                stroke="url(#waveGradientMobile)"
                strokeWidth="3"
                strokeDasharray="8 4"
                className="opacity-50"
              />
            </svg>

            <div className="space-y-16 pl-4">
              {steps.map((step, index) => {
                // Alternate icon slightly left/right on the vertical wave
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex gap-6"
                  >
                    {/* Icon Node on Wave */}
                    <div className={`relative flex-shrink-0 z-10 ${isEven ? 'left-0' : 'left-4'}`}>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} p-0.5 flex items-center justify-center shadow-md relative`}>
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
                        {step.number}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 pt-1">
                      <div className="bg-card/50 backdrop-blur-sm p-5 rounded-2xl border border-border shadow-sm">
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
