import { motion } from 'framer-motion';
import { ArrowRight, CornerDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveDots from '@/components/effects/InteractiveDots';
import ServiceOrbit from '@/components/effects/ServiceOrbit';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
      {/* Interactive Dots Background - Hero Only */}
      <InteractiveDots
        backgroundColor="#f8fafc"
        dotColor="#3b82f6"
        gridSpacing={24}
        animationSpeed={0.008}
        removeWaveLine={false}
        isSection={true}
        className="z-0"
      />

      {/* Content container */}
      <div className="container-custom relative z-20 py-16 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-4 sm:mb-6"
            >
              <CornerDownRight className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">AI-First Technology Solutions Company.</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6"
            >
              <span className="text-foreground">One Partner,</span>
              <br />
              <span className="text-primary">Infinite</span>
              <span className="text-foreground"> Solutions</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0"
            >
              Your ultimate AI technology partner, from concept to launch.
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              That adapts and learns your business needs for personalized solutions.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6 sm:mb-8 text-xs sm:text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Trusted by 100+ businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>India • USA • UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>98% Satisfaction</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Consultation
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-foreground hover:text-primary font-medium group py-5 sm:py-6"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Mobile Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:hidden gap-2 mt-8"
            >
              {['AI Automation', 'MVP Dev', 'SaaS', 'Web Apps', 'Mobile'].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full text-xs font-medium text-foreground shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Service Orbit Visualization (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[600px] hidden lg:flex items-center justify-center perspective-1000"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />

            {/* Interactive Service Orbit */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <ServiceOrbit className="scale-90" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Scroll indicator - mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground hidden sm:block">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-2.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
