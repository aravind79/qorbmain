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
        "Trusted by 100+ businesses across India, USA & UAE",
        "24/7 Global Support",
        "98% Client Satisfaction Rate"
    ]
};

export const servicesContent = {
    sectionTitle: "Our Services",
    sectionDescription: "We deliver cutting-edge digital solutions tailored to your unique business needs across India, USA, and UAE.",

    services: [
        {
            id: "ai-solutions",
            title: "AI Solutions & Automation",
            shortDescription: "Leverage the power of Artificial Intelligence to automate complex workflows, analyze data, and create personalized experiences.",
            fullDescription: "Transform your business with intelligent automation and AI-powered solutions. From custom LLM integrations to predictive analytics, we help you harness the power of artificial intelligence to streamline operations, enhance decision-making, and deliver exceptional customer experiences.",

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
            shortDescription: "High-performance, scalable web applications built with modern frameworks to drive your business growth.",
            fullDescription: "Create stunning, fast, and scalable web applications that deliver exceptional user experiences. From e-commerce platforms to enterprise web apps, we build digital solutions that drive growth and engagement.",

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
            shortDescription: "Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.",
            fullDescription: "Build mobile apps that users love. Whether you need a native iOS app, Android app, or cross-platform solution, we create mobile experiences that engage, delight, and convert.",

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
            shortDescription: "Launch your startup idea in weeks, not months. We build scalable MVPs to test your market fast.",
            fullDescription: "Turn your startup idea into reality quickly. We specialize in building Minimum Viable Products that let you validate your concept, attract investors, and start acquiring customers - all within weeks.",

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
            id: "cyber-security",
            title: "Cyber Security Services",
            shortDescription: "Protect your digital assets with enterprise-grade security auditing, testing, and implementation.",
            fullDescription: "Secure your business against cyber threats. From penetration testing to security audits, we help you identify vulnerabilities and implement robust security measures to protect your data and reputation.",

            features: [
                "Penetration Testing",
                "Security Audits",
                "Compliance (GDPR, HIPAA, SOC2)",
                "Secure Coding Practices",
                "Vulnerability Assessment",
                "Security Training",
                "Incident Response",
                "Security Monitoring"
            ],

            approach: {
                title: "Defense-in-Depth Strategy",
                description: "We implement multiple layers of security controls to protect your systems, data, and users from evolving cyber threats.",
                steps: [
                    {
                        title: "Security Assessment",
                        description: "Comprehensive evaluation of your current security posture, identifying vulnerabilities and risks across your infrastructure."
                    },
                    {
                        title: "Risk Analysis",
                        description: "Prioritize security risks based on likelihood and impact. Focus on what matters most to your business."
                    },
                    {
                        title: "Security Implementation",
                        description: "Deploy security controls, encryption, access management, and monitoring tools tailored to your needs."
                    },
                    {
                        title: "Testing & Validation",
                        description: "Penetration testing and vulnerability scans to verify security measures are effective."
                    },
                    {
                        title: "Continuous Monitoring",
                        description: "Ongoing monitoring, threat detection, and regular security updates to stay ahead of new threats."
                    }
                ]
            },

            benefits: [
                {
                    title: "Protect Your Reputation",
                    description: "Data breaches damage trust and brand reputation. Prevent incidents before they happen."
                },
                {
                    title: "Regulatory Compliance",
                    description: "Meet GDPR, HIPAA, PCI-DSS, and other compliance requirements with confidence."
                },
                {
                    title: "Prevent Financial Loss",
                    description: "Cyber attacks are expensive. Investing in security is far cheaper than dealing with breaches."
                },
                {
                    title: "Customer Trust",
                    description: "Show customers you take their data seriously. Security is a competitive advantage."
                },
                {
                    title: "Business Continuity",
                    description: "Ensure your business can continue operating even in the face of security incidents."
                }
            ],

            technologies: [
                "OWASP Top 10",
                "Burp Suite",
                "Metasploit",
                "Nmap",
                "Wireshark",
                "SSL/TLS",
                "OAuth 2.0",
                "JWT",
                "Encryption (AES, RSA)",
                "SIEM Tools"
            ],

            useCases: [
                {
                    title: "Web Application Security",
                    description: "Protect web apps from SQL injection, XSS, CSRF, and other common vulnerabilities."
                },
                {
                    title: "API Security",
                    description: "Secure your APIs with authentication, rate limiting, encryption, and monitoring."
                },
                {
                    title: "Cloud Security",
                    description: "Secure your AWS, Azure, or GCP infrastructure with proper configurations and access controls."
                },
                {
                    title: "Compliance Audits",
                    description: "Prepare for and pass compliance audits for GDPR, HIPAA, SOC2, and other standards."
                }
            ],

            process: {
                title: "Security Engagement Process",
                steps: [
                    "Initial security consultation",
                    "Scope definition and planning",
                    "Security assessment and testing",
                    "Detailed findings report",
                    "Remediation recommendations",
                    "Implementation support",
                    "Re-testing and validation",
                    "Ongoing security monitoring"
                ]
            },

            faq: [
                {
                    question: "How often should we do penetration testing?",
                    answer: "We recommend annual penetration testing, plus testing after major changes to your application or infrastructure."
                },
                {
                    question: "What's the difference between vulnerability scanning and penetration testing?",
                    answer: "Vulnerability scanning is automated and finds known issues. Penetration testing is manual, simulates real attacks, and finds complex vulnerabilities scanners miss."
                },
                {
                    question: "Will security testing disrupt our operations?",
                    answer: "We work with you to schedule testing during low-traffic periods and can perform non-intrusive testing in production environments."
                },
                {
                    question: "Do you help with compliance certifications?",
                    answer: "Yes! We help you prepare for and achieve compliance with GDPR, HIPAA, SOC2, PCI-DSS, and other standards."
                }
            ],

            geoSpecific: {
                india: "Helping Indian businesses comply with IT Act, DPDP Act, and international security standards. Protect your business and customer data.",
                usa: "Ensuring US companies meet HIPAA, SOC2, and state privacy laws. Enterprise-grade security for American businesses.",
                uae: "Supporting UAE businesses with cybersecurity aligned with UAE Cybersecurity Law and data protection regulations."
            }
        },

        {
            id: "saas-development",
            title: "SaaS Product Development",
            shortDescription: "End-to-end development of Software as a Service platforms, from multi-tenancy to subscription billing.",
            fullDescription: "Build a successful SaaS business with our end-to-end development services. We handle everything from architecture to billing, so you can focus on growing your customer base.",

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
        content: "Founded in 2020, QORB started with a simple belief: technology should empower businesses, not complicate them. What began as a small team of passionate developers has grown into a global technology partner serving clients across India, USA, and UAE.\n\nWe've helped over 100 businesses transform their operations with AI, build products that users love, and scale from startup to enterprise. Every project teaches us something new, and we bring those learnings to help you succeed."
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
        { number: "100+", label: "Projects Delivered" },
        { number: "50+", label: "Happy Clients" },
        { number: "3", label: "Countries Served" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" },
        { number: "5+", label: "Years Experience" }
    ],

    whyChoose: {
        title: "Why Choose QORB?",
        reasons: [
            {
                title: "Proven Track Record",
                description: "100+ successful projects across industries. From startups to enterprises, we've delivered results."
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

    projects: [
        {
            id: "ai-customer-support",
            title: "AI-Powered Customer Support Platform",
            client: "E-commerce Company, USA",
            category: "AI Solutions",
            description: "Built an intelligent chatbot that handles 80% of customer queries automatically, reducing support costs by 60% while improving response times.",
            challenge: "High support ticket volume with slow response times affecting customer satisfaction.",
            solution: "Custom AI chatbot with natural language understanding, integrated with their existing CRM and knowledge base.",
            results: [
                "80% of queries resolved automatically",
                "60% reduction in support costs",
                "Response time reduced from 4 hours to instant",
                "Customer satisfaction increased by 35%"
            ],
            technologies: ["OpenAI GPT-4", "Python", "FastAPI", "React", "PostgreSQL"],
            image: "ai-support.jpg",
            testimonial: {
                quote: "QORB transformed our customer support. The AI chatbot handles most queries instantly, and our team can focus on complex issues.",
                author: "Sarah Johnson",
                position: "Head of Customer Success"
            }
        },
        {
            id: "saas-analytics",
            title: "SaaS Analytics Platform",
            client: "Tech Startup, India",
            category: "SaaS Development",
            description: "Developed a complete SaaS platform for business analytics with real-time dashboards, custom reports, and multi-tenant architecture.",
            challenge: "Needed to launch quickly to compete in crowded market while ensuring scalability.",
            solution: "Built MVP in 8 weeks with core features, then iterated based on user feedback. Scalable architecture from day one.",
            results: [
                "Launched in 8 weeks",
                "Acquired 500+ customers in first 6 months",
                "Handles 10,000+ daily active users",
                "Raised seed funding based on product traction"
            ],
            technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
            image: "saas-platform.jpg"
        },
        {
            id: "mobile-fitness",
            title: "Fitness & Wellness Mobile App",
            client: "Health & Wellness Company, UAE",
            category: "Mobile App Development",
            description: "Created a cross-platform mobile app for fitness tracking, meal planning, and personal training with 50K+ downloads.",
            challenge: "Needed native-like performance on both iOS and Android with offline capabilities.",
            solution: "Built with React Native for cross-platform efficiency, with offline-first architecture and wearable integration.",
            results: [
                "50,000+ downloads in 6 months",
                "4.8 star rating on app stores",
                "Featured on App Store in UAE",
                "30% monthly active user retention"
            ],
            technologies: ["React Native", "Firebase", "GraphQL", "HealthKit", "Google Fit"],
            image: "fitness-app.jpg"
        },
        {
            id: "ecommerce-platform",
            title: "Multi-Vendor E-Commerce Platform",
            client: "Retail Business, India",
            category: "Web Development",
            description: "Built a complete e-commerce marketplace connecting vendors and customers with payments, inventory, and logistics integration.",
            challenge: "Complex multi-vendor system with Indian payment gateways and logistics partners.",
            solution: "Custom-built platform with vendor dashboard, customer app, and admin panel. Integrated with Razorpay, Shiprocket, and SMS gateways.",
            results: [
                "100+ vendors onboarded",
                "₹50L+ monthly GMV",
                "99.9% uptime",
                "Seamless payment and shipping experience"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Razorpay", "AWS", "Redis"],
            image: "ecommerce.jpg"
        },
        {
            id: "security-audit",
            title: "Enterprise Security Audit & Remediation",
            client: "Financial Services, USA",
            category: "Cyber Security",
            description: "Conducted comprehensive security audit and implemented fixes for a fintech platform handling sensitive financial data.",
            challenge: "Needed SOC2 compliance for enterprise clients but had multiple security vulnerabilities.",
            solution: "Full security assessment, penetration testing, and remediation of all critical and high-risk vulnerabilities.",
            results: [
                "Achieved SOC2 Type II certification",
                "Fixed 47 security vulnerabilities",
                "Implemented automated security monitoring",
                "Passed enterprise client security reviews"
            ],
            technologies: ["OWASP", "Burp Suite", "AWS Security", "Encryption", "OAuth 2.0"],
            image: "security.jpg"
        },
        {
            id: "mvp-booking",
            title: "Appointment Booking MVP",
            client: "Healthcare Startup, UAE",
            category: "MVP Development",
            description: "Rapid MVP development for doctor appointment booking platform, launched in 6 weeks to validate market demand.",
            challenge: "Needed to launch quickly to test market before competitors.",
            solution: "Built focused MVP with core booking features, payment integration, and SMS notifications in 6-week sprint.",
            results: [
                "Launched in 6 weeks",
                "1,000+ appointments booked in first month",
                "Validated product-market fit",
                "Secured seed funding based on traction"
            ],
            technologies: ["Next.js", "Supabase", "Stripe", "Twilio", "Vercel"],
            image: "booking-mvp.jpg"
        }
    ],

    stats: {
        title: "Our Impact in Numbers",
        metrics: [
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "1M+", label: "Users Served" },
            { number: "98%", label: "Client Satisfaction" },
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
            quote: "Their security audit saved us from potential disasters. Thorough, professional, and helped us achieve SOC2 compliance.",
            author: "Michael Chen",
            position: "CTO, FinTech Solutions",
            company: "USA"
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
        description: "Leading AI and technology solutions company serving India, USA & UAE. Expert in AI automation, web development, mobile apps, SaaS, and cybersecurity. Get free consultation today.",
        keywords: "AI development, web development, mobile app development, SaaS development, cybersecurity, India, USA, UAE, technology solutions"
    },
    about: {
        title: "About QORB - Global AI & Technology Partner | India, USA, UAE",
        description: "Learn about QORB's mission to transform businesses through AI and technology. Serving 100+ clients across India, USA, and UAE with 98% satisfaction rate.",
        keywords: "about QORB, AI company, technology partner, global presence, India USA UAE"
    },
    services: {
        title: "Our Services - AI, Web, Mobile, SaaS Development | QORB",
        description: "Comprehensive technology services: AI Solutions, Web Development, Mobile Apps, MVP Development, Cybersecurity, and SaaS. Serving India, USA & UAE.",
        keywords: "technology services, AI services, web development services, mobile app development, SaaS development, cybersecurity services"
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
