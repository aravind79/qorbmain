import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Bot,
  Rocket,
  Globe,
  Smartphone,
  TrendingUp,
  Video,
  ArrowRight,
  Star,
  Code,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceData {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  comingSoon?: boolean;
  color: string;
}

interface StackingCardProps {
  service: ServiceData;
  index: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}

const StackingCard = ({ service, index, progress, range, targetScale }: StackingCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const { icon: Icon, title, description, features, badge, comingSoon, color } = service;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${index * 30}px)`,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col lg:flex-row relative h-auto lg:h-[500px] w-[95%] lg:w-[85%] max-w-6xl rounded-3xl overflow-hidden shadow-2xl origin-top"
      >
        {/* Left Side - Content */}
        <motion.div
          className="flex-1 p-8 lg:p-12 flex flex-col justify-center"
          style={{ backgroundColor: color }}
        >
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4 w-fit">
              <Star className="w-3 h-3" />
              {badge}
            </div>
          )}

          {comingSoon && (
            <div className="inline-flex px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4 w-fit">
              Coming Soon
            </div>
          )}

          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6">
            {description}
          </p>

          {/* CTAs */}
          {!comingSoon && (
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-gray-900 hover:bg-white/90 group/btn border-0"
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </div>
          )}
        </motion.div>

        {/* Right Side - Features & Visual */}
        <div className="flex-1 bg-white p-8 lg:p-12 flex flex-col justify-center">
          <h4 className="font-display text-lg font-semibold text-gray-900 mb-6">
            What's Included
          </h4>

          <motion.ul className="space-y-4" style={{ scale: imageScale }}>
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
                <span className="text-gray-700 text-lg">{feature}</span>
              </li>
            ))}
          </motion.ul>

          {/* Additional Visual Element */}
          <div className="mt-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Ready to Start?</div>
                <div className="text-sm text-gray-500">Free consultation included</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const container = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const services: ServiceData[] = [
    {
      icon: Bot,
      title: 'AI Chatbots & Intelligent Automation',
      description: 'Build intelligent AI chatbots, autonomous agents, and workflow automation that saves time and reduces costs by 70%.',
      features: [
        'WhatsApp & multi-channel chatbots',
        'AI agents for business processes',
        'Custom AI implementation',
        'Process automation'
      ],
      badge: 'Most Popular',
      color: '#5196fd'
    },
    {
      icon: Rocket,
      title: 'Rapid MVP Development',
      description: 'Launch your startup idea in 30 days with no-code and low-code solutions. Test, validate, and iterate fast.',
      features: [
        'No-code web applications',
        'Quick prototyping',
        'MVP to product evolution',
        '70% cost reduction'
      ],
      color: '#8f89ff'
    },
    {
      icon: Code,
      title: 'SaaS & Custom Web Applications',
      description: 'Enterprise-grade web applications and SaaS products built with modern tech stack for scale and performance.',
      features: [
        'Custom SaaS development',
        'Progressive web apps',
        'Business management tools',
        'Cloud-native architecture'
      ],
      color: '#13006c'
    },
    {
      icon: Globe,
      title: 'Professional Website Development',
      description: 'High-performance websites that convert. Custom designs, e-commerce stores, and CMS-powered sites.',
      features: [
        'Custom website design',
        'E-commerce (Shopify, custom)',
        'WordPress & headless CMS',
        'Performance optimized'
      ],
      color: '#ed649e'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native-quality mobile apps for iOS and Android. Cross-platform development for faster time to market.',
      features: [
        'iOS & Android apps',
        'React Native / Flutter',
        'App modernization',
        'App Store deployment'
      ],
      color: '#fd521a'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      description: 'Data-driven marketing campaigns that grow your business. SEO, social media, and performance marketing.',
      features: [
        'Search engine optimization',
        'Google Ads & social ads',
        'Content marketing',
        'Analytics & reporting'
      ],
      color: '#10b981'
    },
    {
      icon: Video,
      title: 'Media Production',
      description: 'Professional video, photography, and graphic design services for brands.',
      features: [
        'Video production',
        'Brand photography',
        'Graphic design',
        'AI-enhanced editing'
      ],
      comingSoon: true,
      color: '#6366f1'
    }
  ];

  return (
    <section id="services" className="relative">
      {/* Section Header */}
      <div ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-radial from-secondary/5 to-transparent blur-3xl" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From AI automation to full-stack development, we deliver solutions that drive real business results.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Scroll down to explore our services 👇
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stacking Cards */}
      <div ref={container} className="bg-slate-950">
        {services.map((service, i) => {
          const targetScale = 1 - (services.length - i) * 0.05;
          return (
            <StackingCard
              key={`service_${i}`}
              service={service}
              index={i}
              progress={scrollYProgress}
              range={[i * 0.14, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
