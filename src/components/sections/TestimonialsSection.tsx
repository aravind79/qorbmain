import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Dazzle has been a game-changer. The process is so simple and quick that I can send money anytime, anywhere, and it's immediately available to the recipient.",
      name: "Sarah Wilson",
      role: "CEO of Hummingbird"
    },
    {
      quote: "The efficiency and reliability of QORB are unmatched. It completely automated our workflow and saved us countless hours of manual processing.",
      name: "David Chen",
      role: "Founder at TechFlow"
    },
    {
      quote: "Their AI solutions transformed our customer support. Response times dropped by 80% while satisfaction scores hit all-time highs.",
      name: "Alex Morgan",
      role: "CTO of InnovateX"
    }
  ];

  // Logic for cycling colors: Black -> Green -> Yellow
  const colors = [
    { bg: '#050505', text: 'text-white', subtext: 'text-white/60', dot: 'bg-green-500', dotBg: 'bg-green-500/20' }, // Black
    { bg: '#2E8B57', text: 'text-white', subtext: 'text-white/80', dot: 'bg-white', dotBg: 'bg-white/20' },      // Green
    { bg: '#F4D03F', text: 'text-black', subtext: 'text-black/60', dot: 'bg-black', dotBg: 'bg-black/10' }        // Yellow
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  // Rotate colors based on index
  const mainColor = colors[currentIndex % colors.length];
  const back1Color = colors[(currentIndex + 1) % colors.length]; // Middle card
  const back2Color = colors[(currentIndex + 2) % colors.length]; // Bottom card

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden relative flex items-center justify-center">
      <div className="container-custom relative z-10 flex flex-col items-center">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Trust is built with<br />consistency
          </h2>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="relative w-full max-w-3xl h-[300px] flex items-center justify-center mb-8">

          {/* Background Card 2 (Bottom) */}
          <motion.div
            className="absolute top-0 w-[90%] md:w-[85%] h-full rounded-[24px] transform -rotate-3 origin-bottom-left transition-colors duration-500"
            style={{ backgroundColor: back2Color.bg }}
            animate={{ rotate: -3, y: -24 }}
          />
          {/* Background Card 1 (Middle) */}
          <motion.div
            className="absolute top-3 w-[92%] md:w-[88%] h-full rounded-[24px] transform rotate-2 origin-bottom-right opacity-90 transition-colors duration-500"
            style={{ backgroundColor: back1Color.bg }}
            animate={{ rotate: 2, y: -12 }}
          />

          {/* Main Foreground Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`relative w-full md:w-[95%] h-full rounded-[24px] p-8 md:p-12 flex flex-col justify-center gap-6 shadow-2xl z-20 transition-colors duration-500`}
            style={{ backgroundColor: mainColor.bg }}
          >
            {/* Content - Full Width (No Image) */}
            <div className={`flex-1 ${mainColor.text} flex flex-col justify-between`}>
              <div className={`w-8 h-8 rounded-full ${mainColor.dotBg} flex items-center justify-center mb-4`}>
                <div className={`w-4 h-4 ${mainColor.dot} rounded-full`} />
              </div>

              <p className="font-display text-xl md:text-2xl leading-relaxed font-medium text-center mx-auto">
                "{current.quote}"
              </p>

              <div className="pt-6">
                <p className={`font-bold text-lg ${mainColor.text}`}>
                  {current.name}
                  <span className={`block md:inline md:ml-2 font-normal ${mainColor.subtext}`}>
                    {current.role}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-border bg-white hover:bg-gray-100 dark:bg-black"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-border bg-white hover:bg-gray-100 dark:bg-black"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
