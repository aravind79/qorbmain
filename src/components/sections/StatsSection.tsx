import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 200, suffix: '+', label: 'Projects Delivered', sublabel: 'Across 3 continents' },
    { value: 50, suffix: '+', label: 'AI Solutions Built', sublabel: 'Chatbots & automation' },
    { value: 70, suffix: '%', label: 'Average Cost Savings', sublabel: 'Through automation' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', sublabel: '5-star rated' },
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-primary/20 to-transparent blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-secondary/20 to-transparent blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                <span className="text-gradient-hero">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-primary-foreground font-semibold text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-primary-foreground/60 text-sm">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
