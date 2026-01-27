// Centralized Content Repository for SEO & Geo-Targeting
// Targeting: India, USA, UAE

export const geoLocations = {
    india: {
        name: "India",
        cities: ["Mumbai", "Bangalore", "Delhi", "Hyderabad", "Pune"],
        timezone: "IST",
        currency: "INR"
    },
    usa: {
        name: "United States",
        cities: ["New York", "San Francisco", "Austin", "Seattle", "Boston"],
        timezone: "EST/PST",
        currency: "USD"
    },
    uae: {
        name: "United Arab Emirates",
        cities: ["Dubai", "Abu Dhabi", "Sharjah"],
        timezone: "GST",
        currency: "AED"
    }
};

export const companyInfo = {
    name: "QORB",
    tagline: "AI-First Technology Solutions Company",
    description: "Your ultimate AI technology partner, from concept to launch. We adapt and learn your business needs for personalized solutions.",
    mission: "To empower businesses worldwide with cutting-edge AI and technology solutions that drive real growth and transformation.",
    vision: "To be the most trusted AI-first technology partner for businesses across India, USA, UAE, and beyond.",
    founded: "2020",
    globalPresence: "Serving clients across India, USA, and UAE with 24/7 support and local expertise.",
    email: "hello@qorb.tech",
    phone: {
        india: "+91-XXXX-XXXXXX",
        usa: "+1-XXX-XXX-XXXX",
        uae: "+971-XX-XXX-XXXX"
    }
};

export const heroContent = {
    headline: {
        line1: "One Partner,",
        line2: "Infinite",
        line3: "Solutions"
    },
    subheadline: "AI-First Technology Solutions Company.",
    description: "Your ultimate AI technology partner, from concept to launch. That adapts and learns your business needs for personalized solutions.",
    cta: {
        primary: "Get Free Consultation",
        secondary: "Explore Services"
    },
    trustIndicators: [
        "Trusted by 30+ businesses across India, USA & UAE",
        "24/7 Global Support",
        "100% Client Satisfaction Rate"
    ]
};

export const servicesContent = {
    sectionTitle: "Our Services",
    sectionDescription: "We deliver cutting-edge digital solutions tailored to your unique business needs across India, USA, and UAE.",

    services: [
        {
            id: "ai-solutions",
            title: "AI Solutions & Automation",
            shortDescription: "Automate operations and integrate intelligence.",
            fullDescription: "We don't just 'add AI'. We architect intelligent systems that automate your specific operational bottlenecks. From custom LLMs to predictive workflows, we turn your data into your biggest competitive advantage.",

            features: [
                "Custom LLM Integration",
                "Automation Chatbots",
                "Predictive Analytics",
                "Process Automation",
                "Natural Language Processing",
                "Computer Vision Solutions",
                "AI-Powered Recommendations",
                "Intelligent Document Processing"
            ],

            approach: {
                title: "Our Approach",
                description: "We believe AI should be accessible, practical, and transformative. Our approach combines cutting-edge technology with deep business understanding.",
                steps: [
                    {
                        title: "Discovery & Analysis",
                        description: "We start by understanding your business challenges, workflows, and goals. Our team conducts thorough analysis to identify opportunities where AI can deliver maximum impact."
                    },
                    {
                        title: "Custom AI Strategy",
                        description: "Based on your unique needs, we design a tailored AI strategy that aligns with your business objectives, budget, and timeline. No one-size-fits-all solutions here."
                    },
                    {
                        title: "Development & Training",
                        description: "Our experts build and train custom AI models using the latest frameworks and technologies. We ensure models are accurate, efficient, and scalable."
                    },
                    {
                        title: "Integration & Deployment",
                        description: "Seamless integration with your existing systems and workflows. We handle deployment with minimal disruption to your operations."
                    },
                    {
                        title: "Monitoring & Optimization",
                        description: "Continuous monitoring and improvement ensure your AI solutions evolve with your business and deliver sustained value."
                    }
                ]
            },

            benefits: [
                {
                    title: "Increased Efficiency",
                    description: "Automate repetitive tasks and free up your team to focus on strategic work. Our clients see 40-60% reduction in manual processing time."
                },
                {
                    title: "Data-Driven Decisions",
                    description: "Transform raw data into actionable insights. Make informed decisions backed by AI-powered analytics and predictions."
                },
                {
                    title: "Enhanced Customer Experience",
                    description: "Deliver personalized experiences at scale with AI-powered recommendations, chatbots, and intelligent automation."
                },
                {
                    title: "Cost Reduction",
                    description: "Reduce operational costs through intelligent automation while improving accuracy and consistency."
                },
                {
                    title: "Competitive Advantage",
                    description: "Stay ahead of the curve with cutting-edge AI technology that gives you an edge in your market."
                }
            ],

            technologies: [
                "OpenAI GPT-4 & GPT-4o",
                "Google Gemini",
                "Claude AI",
                "TensorFlow",
                "PyTorch",
                "LangChain",
                "Hugging Face",
                "Python",
                "FastAPI",
                "Docker & Kubernetes"
            ],

            useCases: [
                {
                    title: "Intelligent Customer Support",
                    description: "24/7 AI chatbots that understand context, resolve queries, and escalate complex issues to human agents seamlessly."
                },
                {
                    title: "Document Processing",
                    description: "Automate extraction, classification, and processing of invoices, contracts, and forms with 99%+ accuracy."
                },
                {
                    title: "Predictive Maintenance",
                    description: "Prevent equipment failures and optimize maintenance schedules using AI-powered predictive analytics."
                },
                {
                    title: "Sales & Marketing Automation",
                    description: "AI-driven lead scoring, personalized campaigns, and automated follow-ups that increase conversion rates."
                }
            ],

            process: {
                title: "How We Work",
                steps: [
                    "Initial consultation to understand your needs",
                    "Proof of concept development",
                    "Iterative development with your feedback",
                    "Rigorous testing and validation",
                    "Deployment and team training",
                    "Ongoing support and optimization"
                ]
            },

            faq: [
                {
                    question: "How long does it take to implement an AI solution?",
                    answer: "Timeline varies based on complexity. Simple chatbots can be ready in 2-3 weeks, while complex AI systems may take 2-3 months. We provide detailed timelines during consultation."
                },
                {
                    question: "Do I need a large dataset to use AI?",
                    answer: "Not always! We can leverage pre-trained models and transfer learning for many use cases. We'll assess your data during discovery and recommend the best approach."
                },
                {
                    question: "Will AI replace my team?",
                    answer: "No. AI augments your team by handling repetitive tasks, allowing them to focus on creative, strategic work that requires human judgment and expertise."
                },
                {
                    question: "How do you ensure data privacy and security?",
                    answer: "We follow industry best practices including encryption, secure APIs, compliance with GDPR/CCPA, and can deploy on-premise or in your private cloud for sensitive data."
                }
            ],

            geoSpecific: {
                india: "Helping Indian businesses compete globally with affordable, world-class AI solutions. From Mumbai startups to Bangalore enterprises.",
                usa: "Empowering American companies with cutting-edge AI technology. Trusted by businesses from Silicon Valley to New York.",
                uae: "Driving digital transformation across UAE with AI solutions tailored for the Middle East market. Serving Dubai, Abu Dhabi, and beyond."
            }
        },

        {
            id: "web-development",
            title: "Web Development",
            shortDescription: "High-performance platforms, not just websites.",
            fullDescription: "We build digital platforms that drive revenue. Whether it's a high-scale e-commerce engine or a complex enterprise portal, we engineer for speed, SEO dominance, and conversion.",

            features: [
                "React & Next.js Apps",
                "Progressive Web Apps",
                "E-commerce Solutions",
                "CMS Development",
                "API Development",
                "Responsive Design",
                "SEO Optimization",
                "Performance Optimization"
            ],

            approach: {
                title: "Our Development Philosophy",
                description: "We build web applications that are not just beautiful, but fast, secure, and scalable. Every project is crafted with attention to detail and user experience.",
                steps: [
                    {
                        title: "Requirements Gathering",
                        description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project blueprint."
                    },
                    {
                        title: "UI/UX Design",
                        description: "Our designers create intuitive, visually stunning interfaces that delight users and drive conversions. We prototype and iterate based on your feedback."
                    },
                    {
                        title: "Agile Development",
                        description: "Using modern frameworks and best practices, we build your application in sprints, delivering working features regularly for your review."
                    },
                    {
                        title: "Quality Assurance",
                        description: "Rigorous testing across devices, browsers, and scenarios ensures your application works flawlessly for every user."
                    },
                    {
                        title: "Deployment & Launch",
                        description: "Smooth deployment to production with monitoring, analytics, and performance optimization from day one."
                    }
                ]
            },

            benefits: [
                {
                    title: "Lightning-Fast Performance",
                    description: "Optimized for speed with modern frameworks, CDN delivery, and performance best practices. Your users won't wait."
                },
                {
                    title: "Mobile-First Design",
                    description: "Responsive designs that look and work beautifully on every device, from smartphones to desktops."
                },
                {
                    title: "SEO-Optimized",
                    description: "Built with SEO best practices to help you rank higher and attract more organic traffic."
                },
                {
                    title: "Scalable Architecture",
                    description: "Grow without limits. Our applications scale seamlessly as your business expands."
                },
                {
                    title: "Secure & Reliable",
                    description: "Enterprise-grade security, regular backups, and 99.9% uptime guarantee."
                }
            ],

            technologies: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "AWS/Vercel",
                "Docker"
            ],

            useCases: [
                {
                    title: "E-Commerce Platforms",
                    description: "Full-featured online stores with payment integration, inventory management, and analytics."
                },
                {
                    title: "SaaS Applications",
                    description: "Multi-tenant web applications with subscription billing, user management, and analytics."
                },
                {
                    title: "Corporate Websites",
                    description: "Professional websites that establish credibility and generate leads for your business."
                },
                {
                    title: "Web Portals",
                    description: "Custom portals for employees, customers, or partners with role-based access and workflows."
                }
            ],

            process: {
                title: "Development Process",
                steps: [
                    "Discovery workshop and requirements documentation",
                    "Wireframing and design mockups",
                    "Sprint-based development (2-week sprints)",
                    "Regular demos and feedback sessions",
                    "Testing and quality assurance",
                    "Deployment and launch support",
                    "Post-launch monitoring and support"
                ]
            },

            faq: [
                {
                    question: "How long does it take to build a web application?",
                    answer: "Simple websites take 3-4 weeks, while complex web applications can take 2-4 months. We provide detailed timelines after understanding your requirements."
                },
                {
                    question: "Will my website work on mobile devices?",
                    answer: "Absolutely! All our websites are responsive and mobile-first, ensuring perfect experience across all devices."
                },
                {
                    question: "Can you help with ongoing maintenance?",
                    answer: "Yes! We offer maintenance packages including updates, security patches, performance monitoring, and feature enhancements."
                },
                {
                    question: "Do you provide hosting services?",
                    answer: "We can deploy to your preferred hosting provider or recommend and manage hosting on platforms like AWS, Vercel, or DigitalOcean."
                }
            ],

            geoSpecific: {
                india: "Building web solutions for Indian businesses with local payment integrations, regional language support, and India-specific compliance.",
                usa: "Creating web applications for American companies with focus on accessibility, WCAG compliance, and US market standards.",
                uae: "Developing websites for UAE businesses with Arabic language support, RTL design, and Middle East payment gateways."
            }
        },

        {
            id: "mobile-apps",
            title: "Mobile App Development",
            shortDescription: "Native performance that users love.",
            fullDescription: "Your customers live on their phones. We build native and cross-platform apps that feel premium, perform flawlessly, and keep users coming back. We handle the entire lifecycle from design to App Store optimization.",

            features: [
                "iOS & Android Development",
                "React Native / Flutter",
                "App Store Optimization",
                "Mobile UI/UX Design",
                "Push Notifications",
                "Offline Functionality",
                "In-App Purchases",
                "Analytics Integration"
            ],

            approach: {
                title: "Mobile-First Approach",
                description: "We design and develop mobile apps with a focus on performance, user experience, and platform-specific best practices.",
                steps: [
                    {
                        title: "Strategy & Planning",
                        description: "Define your app's purpose, target audience, key features, and monetization strategy. We help you validate your app idea."
                    },
                    {
                        title: "UX/UI Design",
                        description: "Create intuitive, beautiful interfaces following iOS and Android design guidelines. Interactive prototypes let you experience the app before development."
                    },
                    {
                        title: "Development",
                        description: "Build your app using the best technology for your needs - native or cross-platform. Clean code, modular architecture, and best practices."
                    },
                    {
                        title: "Testing",
                        description: "Comprehensive testing on real devices, different OS versions, and scenarios to ensure flawless performance."
                    },
                    {
                        title: "Launch & ASO",
                        description: "App Store and Play Store submission, optimization for discoverability, and launch marketing support."
                    }
                ]
            },

            benefits: [
                {
                    title: "Native Performance",
                    description: "Smooth, fast, and responsive apps that feel natural on each platform."
                },
                {
                    title: "Offline Capabilities",
                    description: "Apps that work even without internet connection, syncing data when back online."
                },
                {
                    title: "Push Notifications",
                    description: "Re-engage users with timely, personalized notifications that drive retention."
                },
                {
                    title: "Cross-Platform Efficiency",
                    description: "Build once, deploy to both iOS and Android with React Native or Flutter, saving time and cost."
                },
                {
                    title: "App Store Success",
                    description: "Optimized for app store algorithms to maximize downloads and visibility."
                }
            ],

            technologies: [
                "React Native",
                "Flutter",
                "Swift (iOS)",
                "Kotlin (Android)",
                "Firebase",
                "GraphQL",
                "Redux/MobX",
                "Push Notifications",
                "In-App Purchases",
                "Analytics (Mixpanel, Amplitude)"
            ],

            useCases: [
                {
                    title: "On-Demand Services",
                    description: "Apps like Uber, food delivery, or home services with real-time tracking and payments."
                },
                {
                    title: "Social & Community",
                    description: "Social networking apps with feeds, messaging, media sharing, and user profiles."
                },
                {
                    title: "E-Commerce Apps",
                    description: "Shopping apps with product catalogs, cart, checkout, and order tracking."
                },
                {
                    title: "Fitness & Health",
                    description: "Health tracking apps with wearable integration, workout plans, and progress tracking."
                }
            ],

            process: {
                title: "App Development Journey",
                steps: [
                    "Idea validation and feature prioritization",
                    "Wireframes and interactive prototypes",
                    "Design system and UI screens",
                    "Sprint-based development",
                    "Beta testing with real users",
                    "App Store submission and approval",
                    "Launch and user acquisition support",
                    "Ongoing updates and feature releases"
                ]
            },

            faq: [
                {
                    question: "Should I build native or cross-platform?",
                    answer: "It depends on your needs. Cross-platform (React Native/Flutter) is faster and more cost-effective. Native is best for apps requiring maximum performance or platform-specific features. We'll recommend the best approach."
                },
                {
                    question: "How much does mobile app development cost?",
                    answer: "Costs vary based on complexity. Simple apps start from $10K-$20K, while complex apps can be $50K+. We provide detailed estimates after understanding your requirements."
                },
                {
                    question: "How long does it take to get approved on app stores?",
                    answer: "Apple App Store review typically takes 1-3 days, Google Play Store is usually within 24 hours. We handle the entire submission process."
                },
                {
                    question: "Do you provide post-launch support?",
                    answer: "Yes! We offer maintenance packages including bug fixes, OS updates, new features, and performance monitoring."
                }
            ],

            geoSpecific: {
                india: "Creating mobile apps for the Indian market with UPI payments, regional languages, and optimized for varying network conditions.",
                usa: "Building apps for US audiences with Apple Pay, Google Pay, and compliance with US privacy regulations.",
                uae: "Developing apps for UAE market with Arabic support, local payment methods, and Middle East cultural considerations."
            }
        },

        {
            id: "mvp-development",
            title: "Rapid MVP Development",
            shortDescription: "Launch validation-ready products in weeks.",
            fullDescription: "Speed is your only advantage. We take your concept and deliver a market-ready MVP in weeks, not months. No bloat, just the core value proposition built to scale into a full product.",

            features: [
                "Rapid Prototyping",
                "Scalable Architecture",
                "User Testing",
                "Cloud Deployment",
                "Analytics Integration",
                "Iterative Development",
                "Investor-Ready Demos",
                "Market Validation"
            ],

            approach: {
                title: "Lean Startup Methodology",
                description: "We follow lean principles to help you build, measure, and learn quickly. Focus on core features that matter most to your users.",
                steps: [
                    {
                        title: "Idea Validation",
                        description: "We help you refine your idea, identify your target users, and define the core value proposition. What problem are you solving?"
                    },
                    {
                        title: "Feature Prioritization",
                        description: "Using frameworks like MoSCoW, we identify must-have features for your MVP. Focus on what's essential, defer the rest."
                    },
                    {
                        title: "Rapid Development",
                        description: "Build your MVP in 4-8 weeks using proven frameworks and tools. Weekly demos keep you in the loop."
                    },
                    {
                        title: "User Testing",
                        description: "Launch to early adopters, gather feedback, and measure key metrics. Learn what works and what doesn't."
                    },
                    {
                        title: "Iterate & Scale",
                        description: "Based on user feedback and data, we iterate and add features. Scale infrastructure as you grow."
                    }
                ]
            },

            benefits: [
                {
                    title: "Fast Time to Market",
                    description: "Launch in 4-8 weeks instead of 6-12 months. Test your idea while it's still relevant."
                },
                {
                    title: "Cost-Effective",
                    description: "Build only what you need to validate your idea. Avoid wasting money on features users don't want."
                },
                {
                    title: "Investor-Ready",
                    description: "A working product is worth more than a pitch deck. Attract investors with a live demo."
                },
                {
                    title: "Real User Feedback",
                    description: "Learn from actual users, not assumptions. Make data-driven decisions about your product."
                },
                {
                    title: "Scalable Foundation",
                    description: "Built with growth in mind. Your MVP can evolve into a full product without rebuilding."
                }
            ],

            technologies: [
                "Next.js / React",
                "Node.js / Python",
                "Supabase / Firebase",
                "Vercel / AWS",
                "Stripe / Payment APIs",
                "Tailwind CSS",
                "PostgreSQL",
                "Authentication (Auth0, Clerk)",
                "Analytics (Mixpanel, PostHog)",
                "Email (SendGrid, Resend)"
            ],

            useCases: [
                {
                    title: "SaaS MVPs",
                    description: "Subscription-based software with user management, billing, and core features to validate your SaaS idea."
                },
                {
                    title: "Marketplace Platforms",
                    description: "Two-sided marketplaces connecting buyers and sellers, with payments and reviews."
                },
                {
                    title: "Social Platforms",
                    description: "Community apps with user profiles, feeds, messaging, and engagement features."
                },
                {
                    title: "Booking Systems",
                    description: "Appointment scheduling, calendar management, and payment processing for service businesses."
                }
            ],

            process: {
                title: "4-8 Week MVP Sprint",
                steps: [
                    "Week 1: Discovery, feature prioritization, wireframes",
                    "Week 2-3: Design and core feature development",
                    "Week 4-5: Additional features and integrations",
                    "Week 6: Testing and bug fixes",
                    "Week 7: Beta launch and user onboarding",
                    "Week 8: Iteration based on feedback"
                ]
            },

            faq: [
                {
                    question: "What's the difference between MVP and full product?",
                    answer: "An MVP includes only core features needed to solve the main problem and validate your idea. Full product includes all planned features, polish, and optimizations."
                },
                {
                    question: "Can my MVP scale to a full product?",
                    answer: "Absolutely! We build MVPs with scalable architecture so you can add features and handle growth without rebuilding."
                },
                {
                    question: "How much does MVP development cost?",
                    answer: "Typically $15K-$40K depending on complexity. Much more affordable than full product development while giving you a working product to test."
                },
                {
                    question: "What if my idea changes during development?",
                    answer: "That's normal! We work in agile sprints and can adjust based on your learnings. Flexibility is built into our process."
                }
            ],

            geoSpecific: {
                india: "Helping Indian startups launch quickly with affordable MVP development. Perfect for bootstrapped founders and early-stage startups.",
                usa: "Empowering American entrepreneurs to validate ideas fast. Ideal for pre-seed and seed-stage startups seeking product-market fit.",
                uae: "Supporting UAE's thriving startup ecosystem with rapid MVP development. Launch your idea in the Middle East market quickly."
            }
        },

        {
            id: "digital-marketing-seo",
            title: "Digital Marketing & SEO/GEO",
            shortDescription: "Dominate local and global search results.",
            fullDescription: "Traffic means nothing without intent. We engineer your digital presence to capture high-value leads in your specific target markets. We combine technical SEO with precision content strategies to make you the authority in your niche.",

            features: [
                "Geo-Targeted SEO",
                "Local Search Optimization",
                "Content Marketing Strategy",
                "PPC & Performance Marketing",
                "Social Media Management",
                "Technical SEO Audits",
                "Conversion Rate Optimization",
                "Analytics & ROI Tracking"
            ],

            approach: {
                title: "Data-Driven & Location-Smart",
                description: "We combine global marketing best practices with hyper-local strategies to ensure your brand resonates with the right audience in the right place.",
                steps: [
                    {
                        title: "Market & Geo Analysis",
                        description: "We analyze your target market, local competition, and search behavior in your specific focus regions (India, USA, UAE)."
                    },
                    {
                        title: "Strategy Development",
                        description: "Crafting a customized roadmap that blends SEO, content, and paid strategies to hit your growth KPIs."
                    },
                    {
                        title: "On-Page & Local Optimization",
                        description: "Optimizing your website's robust architecture and content, ensuring it speaks the language of search engines and local users."
                    },
                    {
                        title: "Content & Authority Building",
                        description: "Creating high-value, location-specific content and building authoritative backlinks to boost your domain rating."
                    },
                    {
                        title: "Performance Tracking",
                        description: "Continuous monitoring of rankings, traffic, and conversions, with real-time adjustments to maximize ROI."
                    }
                ]
            },

            benefits: [
                {
                    title: "Higher Local Visibility",
                    description: "Be the top choice in your specific service areas. Dominate local search results and Google Maps."
                },
                {
                    title: "Qualified Leads",
                    description: "Attract users who are actively searching for your services in your target regions, leading to higher conversion rates."
                },
                {
                    title: "Long-Term Growth",
                    description: "SEO provides sustainable organic traffic that grows over time, reducing reliance on paid ads."
                },
                {
                    title: "Brand Authority",
                    description: "Establish your brand as a market leader with high-quality content and top search rankings."
                },
                {
                    title: "Measurable ROI",
                    description: "Track every click and conversion. Clear reporting shows exactly how our efforts impact your bottom line."
                }
            ],

            technologies: [
                "Google Analytics 4",
                "Google Custom Search",
                "SEMrush",
                "Ahrefs",
                "Moz",
                "Google Search Console",
                "Yoast SEO",
                "Meta Ads Manager",
                "LinkedIn Ads",
                "HubSpot"
            ],

            useCases: [
                {
                    title: "Local Business Growth",
                    description: "Helping brick-and-mortar or service-area businesses capture the local market share in their cities."
                },
                {
                    title: "International Expansion",
                    description: "Strategies for companies expanding into new regions (e.g., a US company targeting the UAE market)."
                },
                {
                    title: "E-Commerce Sales",
                    description: "Driving organic traffic to product pages and optimizing conversion funnels for online stores."
                },
                {
                    title: "B2B Lead Generation",
                    description: "Targeting high-value B2B decision-makers through professional content and LinkedIn strategies."
                }
            ],

            process: {
                title: "Our Marketing Workflow",
                steps: [
                    "Audit and competitive analysis",
                    "Strategy and KPI definition",
                    "Technical optimization and setup",
                    "Content creation and publishing",
                    "Campaign launch and promotion",
                    "Monthly reporting and refinement"
                ]
            },

            faq: [
                {
                    question: "How long does SEO take to show results?",
                    answer: "SEO is a long-term strategy. Typically, significant improvements are seen in 3-6 months, but results compound over time."
                },
                {
                    question: "What is Geo-Targeting?",
                    answer: "Geo-targeting involves delivering content and ads to users based on their specific geographic location, ensuring higher relevance and engagement."
                },
                {
                    question: "Do you handle social media as well?",
                    answer: "Yes, we offer integrated digital marketing services including social media management, paid social, and community building."
                },
                {
                    question: "How do you measure success?",
                    answer: "We track KPIs aligned with your goals: organic traffic, keyword rankings, conversion rate, cost per acquisition, and overall ROI."
                }
            ],

            geoSpecific: {
                india: "Dominating the Indian digital landscape with hyper-local SEO for Tier 1 & 2 cities and vernacular content strategies.",
                usa: "Competing in the competitive US market with high-authority link building and national vs. local SEO segmentation.",
                uae: "Capturing the Middle East audience with Arabic-English bilingual SEO and optimization for mobile-first user behavior."
            }
        },

        {
            id: "saas-development",
            title: "SaaS Product Development",
            shortDescription: "Scalable, multi-tenant architectures for serious growth.",
            fullDescription: "We build the engines that power recurring revenue. Our team specializes in complex, multi-tenant SaaS architectures that are secure, scalable, and ready for enterprise adoption from day one.",

            features: [
                "Multi-tenant Architecture",
                "Subscription Management",
                "API Development",
                "Cloud Infrastructure",
                "User Management",
                "Analytics Dashboard",
                "Payment Integration",
                "Email Automation"
            ],

            approach: {
                title: "SaaS-First Development",
                description: "We build SaaS products with scalability, security, and user experience at the core. Every decision is made with your business growth in mind.",
                steps: [
                    {
                        title: "Product Strategy",
                        description: "Define your SaaS business model, pricing tiers, target market, and competitive positioning."
                    },
                    {
                        title: "Architecture Design",
                        description: "Design scalable, multi-tenant architecture that can handle growth from 10 to 10,000+ customers."
                    },
                    {
                        title: "Core Development",
                        description: "Build your SaaS platform with authentication, billing, user management, and core features."
                    },
                    {
                        title: "Integration & APIs",
                        description: "Develop robust APIs and integrate with payment processors, email services, and third-party tools."
                    },
                    {
                        title: "Launch & Scale",
                        description: "Deploy to production, monitor performance, and scale infrastructure as you acquire customers."
                    }
                ]
            },

            benefits: [
                {
                    title: "Recurring Revenue",
                    description: "Subscription billing built-in. Predictable revenue stream for your business."
                },
                {
                    title: "Scalable Infrastructure",
                    description: "Handle 10 customers or 10,000 without breaking a sweat. Auto-scaling keeps costs optimized."
                },
                {
                    title: "Multi-Tenant Efficiency",
                    description: "Single codebase serves all customers. Easy to maintain, update, and improve."
                },
                {
                    title: "Built-in Analytics",
                    description: "Track MRR, churn, user engagement, and other key SaaS metrics from day one."
                },
                {
                    title: "API-First Design",
                    description: "Extensible APIs let you build integrations, mobile apps, and partnerships easily."
                }
            ],

            technologies: [
                "Next.js / React",
                "Node.js / Python",
                "PostgreSQL / MongoDB",
                "Redis",
                "Stripe / Paddle",
                "AWS / Vercel",
                "Docker / Kubernetes",
                "GraphQL / REST APIs",
                "Elasticsearch",
                "Monitoring (Sentry, DataDog)"
            ],

            useCases: [
                {
                    title: "B2B SaaS Platforms",
                    description: "Business software with team collaboration, role-based access, and enterprise features."
                },
                {
                    title: "Analytics Tools",
                    description: "Data analytics and reporting platforms with dashboards, charts, and insights."
                },
                {
                    title: "Project Management",
                    description: "Task management, time tracking, and collaboration tools for teams."
                },
                {
                    title: "CRM Systems",
                    description: "Customer relationship management with contacts, deals, and sales pipelines."
                }
            ],

            process: {
                title: "SaaS Development Roadmap",
                steps: [
                    "Business model and pricing strategy",
                    "Technical architecture and database design",
                    "Authentication and user management",
                    "Core feature development",
                    "Billing and subscription management",
                    "Admin dashboard and analytics",
                    "API development and documentation",
                    "Testing and security hardening",
                    "Launch and customer onboarding",
                    "Continuous improvement and scaling"
                ]
            },

            faq: [
                {
                    question: "How long does it take to build a SaaS product?",
                    answer: "MVP in 2-3 months, full-featured SaaS in 4-6 months depending on complexity. We can start with MVP and iterate based on customer feedback."
                },
                {
                    question: "What's included in multi-tenant architecture?",
                    answer: "Data isolation, tenant-specific customization, shared infrastructure, and efficient resource utilization. Each customer's data is secure and separate."
                },
                {
                    question: "How do you handle billing and subscriptions?",
                    answer: "We integrate with Stripe or Paddle for subscription management, including trials, upgrades, downgrades, and cancellations."
                },
                {
                    question: "Can you help with SaaS marketing and growth?",
                    answer: "While our focus is development, we can recommend growth strategies, implement analytics, and build features that drive user acquisition and retention."
                }
            ],

            geoSpecific: {
                india: "Building SaaS products for Indian market with INR pricing, Indian payment gateways, and GST compliance.",
                usa: "Creating SaaS platforms for US market with USD pricing, Stripe integration, and US tax compliance.",
                uae: "Developing SaaS solutions for UAE with AED pricing, local payment methods, and VAT compliance."
            }
        },
        {
            id: "media-production",
            title: "Media Production",
            shortDescription: "Professional video, photography, and graphic design services for brands.",
            fullDescription: "Tell your brand's story with high-quality media production. From cinematic corporate videos to stunning product photography and AI-enhanced editing, we create visual assets that captivate your audience.",

            features: [
                "Corporate Video Production",
                "Product Photography",
                "Brand Identity Design",
                "Motion Graphics",
                "AI-Enhanced Video Editing",
                "Social Media Reels/Shorts",
                "Drone Videography",
                "3D Visualization"
            ],

            approach: {
                title: "Visual Storytelling",
                description: "We combine creativity with technical expertise to produce media that not only looks good but conveys your message effectively.",
                steps: [
                    {
                        title: "Concept Development",
                        description: "We brainstorm ideas and create storyboards that align with your brand voice and campaign goals."
                    },
                    {
                        title: "Pre-Production",
                        description: "Planning every detail - from location scouting and casting to equipment selection and scheduling."
                    },
                    {
                        title: "Production",
                        description: "Executing the shoot with top-tier cameras, lighting, and audio equipment for cinematic quality."
                    },
                    {
                        title: "Post-Production",
                        description: "Editing, color grading, sound design, and adding visual effects to bring the vision to life."
                    },
                    {
                        title: "Delivery",
                        description: "Delivering finalized assets in optimized formats for web, social media, or broadcast."
                    }
                ]
            },

            benefits: [
                {
                    title: "Professional Quality",
                    description: "Stand out with cinema-grade visuals that reflect the quality of your brand."
                },
                {
                    title: "Increased Engagement",
                    description: "Video content generates 1200% more shares than text and image combined."
                },
                {
                    title: "Consistent Branding",
                    description: "Maintain a cohesive visual identity across all your marketing channels."
                },
                {
                    title: "Time Efficiency",
                    description: "We handle the entire production process, saving you time and resources."
                },
                {
                    title: "Enhanced Trust",
                    description: "High-quality media builds credibility and trust with your potential customers."
                }
            ],

            technologies: [
                "Adobe Premiere Pro",
                "After Effects",
                "DaVinci Resolve",
                "Cinema 4D",
                "MidJourney",
                "RunwayML",
                "Sony Cinema Cameras",
                "DJI Drones",
                "Blender",
                "Photoshop"
            ],

            useCases: [
                {
                    title: "Brand Commercials",
                    description: "Cinematic ads for TV, YouTube, or social media to boost brand awareness."
                },
                {
                    title: "Product Showcases",
                    description: "High-end photography and 3D renders that highlight your product's best features."
                },
                {
                    title: "Corporate Training",
                    description: "Engaging educational videos for employee onboarding and training programs."
                },
                {
                    title: "Event Coverage",
                    description: "Dynamic video and photo coverage of corporate events, conferences, and launches."
                }
            ],

            process: {
                title: "Creative Process",
                steps: [
                    "Client briefing and goal setting",
                    "Scriptwriting and storyboarding",
                    "Location and talent management",
                    "Filming and photography execution",
                    "Editing and visual effects",
                    "Review and feedback rounds"
                ]
            },

            faq: [
                {
                    question: "Do you provide raw footage?",
                    answer: "Typically we deliver the final edited product, but raw footage can be purchased separately if needed."
                },
                {
                    question: "How long does a video project take?",
                    answer: "Depending on complexity, a typical corporate video takes 2-4 weeks from concept to final delivery."
                },
                {
                    question: "Do you travel for shoots?",
                    answer: "Yes, our team is available to travel to your location across India and the UAE for on-site production."
                },
                {
                    question: "Can you edit existing footage?",
                    answer: "Absolutely! We can take your existing assets and give them a professional polish with editing and motion graphics."
                }
            ],

            geoSpecific: {
                india: "Creating culturally relevant media content for the diverse Indian market. From Mumbai studios to location shoots across the country.",
                usa: "Producing high-end creative assets for US brands ensuring international quality standards and appeal.",
                uae: "Delivering luxury media production services for Dubai and Abu Dhabi businesses, tailored to the vibrant Middle East market."
            }
        }
    ]
};

export const aboutContent = {
    hero: {
        title: "About QORB",
        subtitle: "Transforming Businesses Through AI and Technology",
        description: "We're not just another tech company. We're your partners in digital transformation, combining cutting-edge AI with human creativity to build solutions that actually work."
    },

    story: {
        title: "Our Story",
        content: "Founded in 2025, QORB started with a simple belief: technology should empower businesses, not complicate them. What began as a small team of passionate developers has grown into a global technology partner serving clients across India, USA, and UAE.\n\nWe've helped over 30+ businesses transform their operations with AI, build products that users love, and scale from startup to enterprise. Every project teaches us something new, and we bring those learnings to help you succeed."
    },

    mission: {
        title: "Our Mission",
        content: "To empower businesses worldwide with cutting-edge AI and technology solutions that drive real growth and transformation. We believe in building long-term partnerships, not just delivering projects."
    },

    values: [
        {
            title: "Innovation First",
            description: "We stay ahead of technology trends so you don't have to. From AI to cloud computing, we bring the latest innovations to your business."
        },
        {
            title: "Client Success",
            description: "Your success is our success. We measure our work by the impact it creates for your business, not just lines of code."
        },
        {
            title: "Transparency",
            description: "No jargon, no hidden costs, no surprises. We communicate clearly and keep you involved every step of the way."
        },
        {
            title: "Quality Obsessed",
            description: "We don't cut corners. Every project gets the same attention to detail, whether it's a $5K website or a $100K SaaS platform."
        },
        {
            title: "Global Mindset",
            description: "We think globally but act locally. Understanding cultural nuances and market differences makes our solutions more effective."
        }
    ],

    globalPresence: {
        title: "Global Presence, Local Expertise",
        description: "With clients across three continents, we understand the unique challenges and opportunities in each market.",
        locations: [
            {
                region: "India",
                description: "Serving startups and enterprises across Mumbai, Bangalore, Delhi, and beyond. We understand the Indian market, from payment integrations to regional compliance.",
                highlights: ["Local payment gateways", "Regional language support", "India-specific compliance"]
            },
            {
                region: "United States",
                description: "Partnering with American businesses from Silicon Valley to New York. We deliver solutions that meet US market standards and regulations.",
                highlights: ["US timezone support", "HIPAA/SOC2 compliance", "American design standards"]
            },
            {
                region: "United Arab Emirates",
                description: "Supporting UAE's digital transformation with solutions tailored for the Middle East market, including Arabic support and local integrations.",
                highlights: ["Arabic language support", "Middle East payment gateways", "UAE compliance"]
            }
        ]
    },

    team: {
        title: "Our Team",
        description: "We're a diverse team of developers, designers, AI specialists, and business strategists. What unites us is a passion for solving complex problems and building products that make a difference.",
        expertise: [
            "AI & Machine Learning Engineers",
            "Full-Stack Developers",
            "Mobile App Developers",
            "UI/UX Designers",
            "DevOps Engineers",
            "Security Specialists",
            "Product Managers",
            "Business Analysts"
        ]
    },

    stats: [
        { number: "30+", label: "Projects Delivered" },
        { number: "70%", label: "Average Cost Savings" },
        { number: "10+", label: "AI Solutions Built" },
        { number: "100%", label: "Client Satisfaction" }
    ],

    whyChoose: {
        title: "Why Choose QORB?",
        reasons: [
            {
                title: "Proven Track Record",
                description: "30+ successful projects across industries. From startups to enterprises, we've delivered results."
            },
            {
                title: "AI Expertise",
                description: "We're not just developers - we're AI specialists. We help you leverage the latest in AI technology."
            },
            {
                title: "Agile & Transparent",
                description: "Regular updates, demos, and communication. You're always in the loop."
            },
            {
                title: "End-to-End Service",
                description: "From strategy to deployment to maintenance, we handle everything."
            },
            {
                title: "Competitive Pricing",
                description: "Enterprise-quality work without enterprise prices. Transparent pricing, no hidden costs."
            },
            {
                title: "Global Support",
                description: "24/7 support across timezones. We're here when you need us."
            }
        ]
    }
};

export const workContent = {
    hero: {
        title: "Our Work",
        subtitle: "Real Projects, Real Results",
        description: "A selection of projects that showcase our passion for design, technology, and solving complex business challenges. From AI automation to mobile apps, we've helped businesses transform and grow."
    },

    categories: ["All", "SaaS", "Shopify", "Web Development", "AI Solutions"],
    projects: [
        {
            id: "clearstatement-ai",
            title: "ClearStatement AI",
            client: "FinTech Client",
            category: "AI Solutions",
            description: "Automated bank statement converter using advanced AI to parse and standardize financial documents with high accuracy.",
            challenge: "Manual data entry from diverse bank statement formats was time-consuming and error-prone.",
            solution: "Developed an AI-powered parsing engine that automatically recognizes and extracts transaction data from PDF statements.",
            results: [
                "99% extraction accuracy",
                "Reduced processing time by 90%",
                "Supports 50+ bank formats",
                "Seamless export to Excel/CSV"
            ],
            technologies: ["Python", "Machine Learning", "OCR", "React"],
            image: "/work/ClearStatement AI Bank Statement Converter.gif",
            testimonial: {
                quote: "Drastically reduced our manual workload. The accuracy is impressive.",
                author: "Finance Manager",
                position: "CFO",
                company: "FinTech Corp"
            }
        },
        {
            id: "jewelsmuse-saas",
            title: "JewelsMuse Rental SaaS",
            client: "JewelsMuse",
            category: "SaaS",
            description: "A comprehensive rental management platform for jewelry businesses, handling inventory, billing, and customer tracking.",
            challenge: "Managing jewelry rentals manually involved complex tracking of inventory statuses and billing cycles.",
            solution: "Built a cloud-based SaaS platform with real-time inventory tracking, automated billing, and rental scheduling.",
            results: [
                "Automated recurring billing",
                "Real-time inventory status",
                "Reduced loss/theft by 40%",
                "Integrated CRM"
            ],
            technologies: ["React", "Node.js", "MongoDB", "AWS"],
            image: "/work/JewelsMuse Rental Management SaaS.gif"
        },
        {
            id: "zaasho-shopify",
            title: "Zaasho Dropshipping",
            client: "Zaasho",
            category: "Shopify",
            description: "High-conversion Shopify store designed for global dropshipping operations with optimized product pages and checkout.",
            challenge: "Low conversion rates and slow page load times were affecting ad spend efficiency.",
            solution: "Custom Shopify theme development focused on speed, mobile responsiveness, and conversion rate optimization (CRO).",
            results: [
                "2x increase in conversion rate",
                "Sub-second page load speeds",
                "Seamless multi-currency support",
                "Automated order fulfillment"
            ],
            technologies: ["Shopify Liquid", "JavaScript", "Tailwind CSS"],
            image: "/work/Zaasho Shopify Dropshipping Store.gif"
        },
        {
            id: "document-alchemist",
            title: "Document Alchemist",
            client: "SaaS Startup",
            category: "SaaS",
            description: "Web-based PDF editor and document management studio allowing users to merge, split, and edit PDFs in the browser.",
            challenge: "Users needed a lightweight, secure alternative to heavy desktop PDF software.",
            solution: "Created a browser-native PDF manipulation tool using WebAssembly for fast, secure client-side processing.",
            results: [
                "Zero server-side data storage",
                "Lightning-fast processing",
                "Intuitive drag-and-drop UI",
                "Freemium subscription model"
            ],
            technologies: ["WebAssembly", "React", "Next.js", "Stripe"],
            image: "/work/Document Alchemist Studio (PDF Editor SaaS).gif"
        },
        {
            id: "myflav-foods",
            title: "MyFlav Business Suite",
            client: "MyFlav Foods",
            category: "SaaS",
            description: "End-to-end business management SaaS for the food industry, covering supply chain, orders, and distribution.",
            challenge: "Fragmented systems for inventory and orders led to stockouts and delivery delays.",
            solution: "Unified SaaS platform connecting inventory, order management, and logistics in one dashboard.",
            results: [
                "30% reduction in food waste",
                "Real-time order tracking",
                "Optimized delivery routes",
                "Centralized supplier management"
            ],
            technologies: ["Vue.js", "Firebase", "Node.js"],
            image: "/work/MyFlav Foods Business Management SaaS.gif"
        },
        {
            id: "jewelsmuse-shopify",
            title: "JewelsMuse Store",
            client: "JewelsMuse",
            category: "Shopify",
            description: "Premium e-commerce experience for luxury jewelry, featuring high-res galleries and virtual try-on integration.",
            challenge: "Showcasing high-end jewelry online required a superior visual experience and trust-building elements.",
            solution: "Designed a luxury-focused Shopify store with custom product filtering, zoom capabilities, and brand storytelling.",
            results: [
                "Increased average order value",
                "Enhanced brand prestige",
                "Mobile-first luxury design",
                "Integrated loyalty program"
            ],
            technologies: ["Shopify Plus", "Liquid", "SCSS"],
            image: "/work/JewelsMuse Shopify Store.gif"
        },
        {
            id: "mj-adworks",
            title: "MJ Adworks Website",
            client: "MJ Adworks",
            category: "Web Development",
            description: "Corporate website for a digital advertising agency, showcasing their portfolio and services with dynamic animations.",
            challenge: "The agency needed a website that reflected their creativity and modern design sensibilities.",
            solution: "Developed a visually striking website with GSAP animations, smooth scrolling, and an interactive portfolio section.",
            results: [
                "Award-winning design",
                "Increased client inquiries",
                "Fast performance metrics",
                "Easy-to-update CMS"
            ],
            technologies: ["React", "GSAP", "Tailwind CSS"],
            image: "/work/MJ Adworks Website Development.gif"
        },
        {
            id: "driving-school",
            title: "Driving School Portal",
            client: "City Driving School",
            category: "Web Development",
            description: "Online booking and management portal for a driving school, allowing students to schedule lessons and track progress.",
            challenge: "Phone-based scheduling was inefficient and led to double bookings.",
            solution: "Implemented a self-service booking system with instructor calendar sync and automated SMS reminders.",
            results: [
                "Eliminated scheduling conflicts",
                "Reduced admin time by 70%",
                "Improved student experience",
                "Mobile-friendly booking"
            ],
            technologies: ["WordPress", "PHP", "MySQL"],
            image: "/work/Driving School Website.gif"
        },
        {
            id: "elkua-billing",
            title: "Elkua Billing Soft",
            client: "Elkua Global",
            category: "SaaS",
            description: "Robust billing and invoicing software tailored for global businesses with multi-currency and tax support.",
            challenge: "Complex international billing requirements made standard software insufficient.",
            solution: "Developed a custom billing engine capable of handling complex tax rules and multi-currency invoicing.",
            results: [
                "Compliant with global tax laws",
                "Automated invoice generation",
                "Client portal integration",
                "Recurring billing support"
            ],
            technologies: ["Angular", ".NET Core", "Azure"],
            image: "/work/Elkua Global Billing Software.gif"
        },
        {
            id: "rental-billing",
            title: "Rental & Billing Sys",
            client: "Property Managers",
            category: "SaaS",
            description: "Specialized SaaS for property rental management and tenant billing, streamlining the leasing lifecycle.",
            challenge: "Property managers struggled with manual rent collection and lease tracking.",
            solution: "Created an all-in-one platform for lease management, automated rent reminders, and online payments.",
            results: [
                "95% on-time rent collection",
                "Simplified lease renewals",
                "Tenant communication portal",
                "Automated financial reporting"
            ],
            technologies: ["React", "Node.js", "PostgreSQL"],
            image: "/work/Rental Management & Billing SaaS.gif"
        }
    ],

    stats: {
        title: "Our Impact in Numbers",
        metrics: [
            { number: "30+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "10K+", label: "Users Served" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "3", label: "Countries" },
            { number: "24/7", label: "Support" }
        ]
    },

    testimonials: [
        {
            quote: "QORB delivered our SaaS platform in record time. Their expertise in AI and scalable architecture was exactly what we needed.",
            author: "Raj Patel",
            position: "CEO, TechVenture India",
            company: "India"
        },
        {
            quote: "The mobile app they built exceeded our expectations. Professional, responsive, and delivered on time.",
            author: "Ahmed Al Maktoum",
            position: "Founder, Wellness UAE",
            company: "UAE"
        },
        {
            quote: "Their digital marketing strategy doubled our organic traffic in 3 months. Data-driven, creative, and results-oriented.",
            author: "Michael Chen",
            position: "CMO",
            company: "FinTech Solutions"
        }
    ],

    cta: {
        title: "Ready to Start Your Project?",
        description: "Let's discuss how we can help transform your business with technology.",
        buttonText: "Get Free Consultation"
    }
};

export const seoMetadata = {
    home: {
        title: "QORB - AI-First Technology Solutions | Web, Mobile & AI Development",
        description: "Leading AI and technology solutions company serving India, USA & UAE. Expert in AI automation, web development, mobile apps, SaaS, and Digital Marketing & SEO. Get free consultation today.",
        keywords: "AI development, web development, mobile app development, SaaS development, Digital Marketing, SEO, India, USA, UAE, technology solutions"
    },
    about: {
        title: "About QORB - Global AI & Technology Partner | India, USA, UAE",
        description: "Learn about QORB's mission to transform businesses through AI and technology. Serving 100+ clients across India, USA, and UAE with 98% satisfaction rate.",
        keywords: "about QORB, AI company, technology partner, global presence, India USA UAE"
    },
    services: {
        title: "Our Services - AI, Web, Mobile, SaaS Development | QORB",
        description: "Comprehensive technology services: AI Solutions, Web Development, Mobile Apps, MVP Development, Digital Marketing, SEO/GEO, and SaaS. Serving India, USA & UAE.",
        keywords: "technology services, AI services, web development services, mobile app development, SaaS development, Digital Marketing services, SEO services"
    },
    work: {
        title: "Our Work - Portfolio & Case Studies | QORB Projects",
        description: "Explore QORB's portfolio of successful projects across AI, web, mobile, and SaaS. Real results for clients in India, USA, and UAE.",
        keywords: "portfolio, case studies, projects, client work, success stories"
    },
    contact: {
        title: "Contact QORB - Get Free Consultation | India, USA, UAE",
        description: "Get in touch with QORB for your next project. Free consultation available. Offices in India, USA, and UAE. 24/7 support.",
        keywords: "contact, consultation, get quote, hire developers, technology partner"
    }
};

export const servicesPageContent = {
    hero: {
        headline: "You Build the Business. We Build the Tech.",
        subheadline: "Stop managing freelancers and vendors. We operate as your in-house product, engineering, and growth team—fully managed, outcome-driven, and built for scale."
    },
    sections: [
        {
            id: "product-engineering",
            title: "Product & Engineering Team",
            positioning: "Your End-to-End Product Powerhouse",
            description: "We don't just write code; we take ownership of the product lifecycle. From rapid MVPs that validate markets to enterprise-grade SaaS platforms, we build the technology that powers your business.",
            serviceIds: ["mvp-development", "saas-development", "mobile-apps", "web-development"]
        },
        {
            id: "growth-intelligence",
            title: "Growth & Intelligence Team",
            positioning: "Data-Driven Growth Engine",
            description: "Building a product is half the battle. We engineer the growth. By integrating AI automation with precision-targeted marketing, we turn your digital presence into a revenue-generating machine.",
            serviceIds: ["ai-solutions", "digital-marketing-seo"]
        },
        {
            id: "brand-experience",
            title: "Brand & Experience Team",
            positioning: "World-Class Digital Experience",
            description: "First impressions equate to market value. We ensure your brand looks, feels, and performs like a category leader through premium media and design.",
            serviceIds: ["media-production"]
        }
    ]
};

export const homePageContent = {
    inHouseAdvantage: {
        headline: "We Are Your Technical Co-Founder",
        description: "Growing businesses need more than outsourced tasks—they need ownership. We replace the chaos of multiple agencies with a single, unified team dedicated to your metric of success.",
        pillars: [
            {
                title: "Total Product Ownership",
                description: "We manage the roadmap, architecture, and deployment. You focus on sales and strategy."
            },
            {
                title: "Integrated Growth",
                description: "Marketing isn't an afterthought. It's built into the product DNA from day one."
            },
            {
                title: "Speed to Outcome",
                description: "No recruitment delays. No ramp-up time. Instant access to a senior-level team."
            }
        ]
    }
};
