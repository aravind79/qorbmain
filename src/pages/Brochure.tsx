import { Bot, Rocket, Code, TrendingUp, Check, Mail, MapPin, Phone, Users, Zap, Target, DollarSign, Shield, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Brochure = () => {
    return (
        <>
            <Helmet>
                <title>Qorb Brochure | Your In-House Tech & Marketing Team</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            {/* Print Styles */}
            <style>
                {`
          @media print {
            @page { margin: 0; size: A4; }
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .no-print { display: none !important; }
            .page-break { break-after: page; }
          }
          @page { size: A4 portrait; margin: 0; }
        `}
            </style>

            {/* Control Bar (Hidden on print) */}
            <div className="no-print fixed top-0 left-0 right-0 bg-slate-900 text-white p-4 z-50 flex justify-between items-center shadow-lg">
                <div className="font-bold">Qorb Company Brochure</div>
                <button
                    onClick={() => window.print()}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                    Download PDF
                </button>
            </div>

            <div className="w-full max-w-[210mm] mx-auto bg-white min-h-screen pt-16 print:pt-0">

                {/* ===== PAGE 1: COVER ===== */}
                <div className="page-break relative w-full h-[297mm] flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
                    {/* Geometric Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-white rounded-full"></div>
                        <div className="absolute bottom-40 left-20 w-48 h-48 border-2 border-white rotate-45"></div>
                        <div className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-white"></div>
                    </div>

                    {/* Header */}
                    <div className="relative z-10 px-16 py-12">
                        <div className="flex items-center gap-3 text-3xl font-bold tracking-tight">
                            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                                <span className="text-white text-2xl">Q</span>
                            </div>
                            <span>QORB</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center px-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-sm font-semibold mb-8 w-fit">
                            <Sparkles className="w-4 h-4" />
                            Your In-House Tech & Marketing Team
                        </div>

                        <h1 className="text-7xl font-display font-bold leading-[1.1] mb-8">
                            Build Better.<br />
                            Launch Faster.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                                Grow Smarter.
                            </span>
                        </h1>

                        <p className="text-2xl text-slate-300 max-w-2xl leading-relaxed mb-12">
                            Full-stack development, AI automation, and growth marketing — all under one roof. No outsourcing. No compromises.
                        </p>

                        <div className="flex gap-6">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex-1">
                                <div className="text-5xl font-bold mb-2">70%</div>
                                <div className="text-blue-200 text-sm">Cost Savings vs Traditional Hiring</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex-1">
                                <div className="text-5xl font-bold mb-2">24/7</div>
                                <div className="text-blue-200 text-sm">Dedicated Support</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex-1">
                                <div className="text-5xl font-bold mb-2">100%</div>
                                <div className="text-blue-200 text-sm">Product Ownership</div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="relative z-10 px-16 py-8 border-t border-white/10">
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-slate-400">www.qorb.tech</div>
                            <div className="text-sm text-slate-400">Dubai, UAE  •  Kerala, India</div>
                        </div>
                    </div>
                </div>

                {/* ===== PAGE 2: ABOUT US + WHY CHOOSE US ===== */}
                <div className="page-break w-full h-[297mm] bg-white">
                    <div className="h-full flex flex-col p-16">
                        {/* Header */}
                        <div className="mb-12">
                            <div className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider">About Qorb</div>
                            <h2 className="text-5xl font-display font-bold text-slate-900 mb-6">
                                Your Complete In-House <br />Technology Partner
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        </div>

                        {/* About Content */}
                        <div className="grid grid-cols-2 gap-12 mb-16">
                            <div>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Qorb is not just a development agency — we're your dedicated in-house technology and marketing team without the overhead costs.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    We combine cutting-edge software development, intelligent AI automation, and data-driven marketing strategies to help businesses launch products faster and scale smarter.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">What Makes Us Different</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-slate-700">Fully integrated tech & marketing capabilities</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-slate-700">AI-powered automation reduces operational costs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-slate-700">Senior developers, not junior apprentices</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-slate-700">Full transparency and product ownership</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Qorb?</h3>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                                        <DollarSign className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">Cost Effective</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        70% cheaper than hiring in-house teams. No recruitment fees, no benefits overhead.
                                    </p>
                                </div>

                                <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                                        <Clock className="w-7 h-7 text-green-600" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">Fast Delivery</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Launch MVPs in 4-6 weeks. Rapid iterations based on real user feedback.
                                    </p>
                                </div>

                                <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                                        <Users className="w-7 h-7 text-purple-600" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">Expert Team</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Access to senior developers, AI specialists, and growth marketers.
                                    </p>
                                </div>

                                <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                                        <Zap className="w-7 h-7 text-orange-600" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">AI Automation</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Smart automation reduces manual work, cutting costs without sacrificing quality.
                                    </p>
                                </div>

                                <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                                        <Shield className="w-7 h-7 text-cyan-600" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">Full Ownership</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        100% code ownership, complete transparency, and your product, your rules.
                                    </p>
                                </div>

                                <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                                        <Target className="w-7 h-7 text-pink-600" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">Growth Focus</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Built-in SEO, analytics, and marketing automation from day one.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== PAGE 3: SERVICES ===== */}
                <div className="page-break w-full h-[297mm] bg-slate-50">
                    <div className="h-full flex flex-col p-16">
                        {/* Header */}
                        <div className="mb-12">
                            <div className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider">Our Services</div>
                            <h2 className="text-5xl font-display font-bold text-slate-900 mb-6">
                                Complete Technology <br />& Marketing Solutions
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-2 gap-8 flex-1">
                            {/* AI & Automation */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                        <Bot className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">AI & Automation</h3>
                                        <p className="text-sm text-slate-500">Intelligent systems that work for you</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">AI Chatbots (WhatsApp, Web, Multi-channel)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Business Process Automation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Custom AI Implementation & Training</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Intelligent Workflow Optimization</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Web & SaaS Development */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                        <Code className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Web & SaaS</h3>
                                        <p className="text-sm text-slate-500">Enterprise-grade applications</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Custom SaaS Platform Development</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Progressive Web Applications (PWA)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">E-commerce & Business Portals</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">API Development & Cloud Architecture</span>
                                    </li>
                                </ul>
                            </div>

                            {/* MVP Development */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                        <Rocket className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Rapid MVP</h3>
                                        <p className="text-sm text-slate-500">Launch in 4-6 weeks</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">No-Code & Low-Code Solutions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Quick Prototyping & Validation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">MVP to Full Product Evolution</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Investor-Ready Demonstrations</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Digital Marketing */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                        <TrendingUp className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">Digital Marketing</h3>
                                        <p className="text-sm text-slate-500">Data-driven growth strategies</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">SEO & GEO (AI Search) Optimization</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Performance Marketing & PPC</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Social Media Management</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Content Marketing & Analytics</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Your Complete In-House Team</h3>
                                <p className="text-blue-100">Tech + Marketing + AI — All integrated, all optimized.</p>
                            </div>
                            <div className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold">
                                Get Started <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== PAGE 4: WE VS OTHER ===== */}
                <div className="page-break w-full h-[297mm] bg-white">
                    <div className="h-full flex flex-col p-16">
                        {/* Header */}
                        <div className="mb-12">
                            <div className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider">The Qorb Advantage</div>
                            <h2 className="text-5xl font-display font-bold text-slate-900 mb-6">
                                Qorb vs Traditional <br />Hiring & Agencies
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"></div>
                            <p className="text-xl text-slate-600 max-w-3xl">
                                We don't break your hard-earned money because we're cutting costs through smart automation — not by compromising on quality or expertise.
                            </p>
                        </div>

                        {/* Comparison Table */}
                        <div className="flex-1">
                            <div className="grid grid-cols-3 gap-6 h-full">
                                {/* Header Row */}
                                <div className="bg-slate-50 rounded-t-2xl p-6 border-b-4 border-slate-200">
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Factor</h3>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-t-2xl p-6 border-b-4 border-blue-700">
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                        <Sparkles className="w-4 h-4" />
                                        Qorb (Us)
                                    </h3>
                                </div>
                                <div className="bg-slate-50 rounded-t-2xl p-6 border-b-4 border-slate-200">
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Traditional Hiring/Agencies</h3>
                                </div>

                                {/* Cost */}
                                <div className="bg-white p-6 border-l-4 border-slate-200 flex items-center">
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-8 h-8 text-slate-400" />
                                        <span className="font-bold text-slate-900">Cost</span>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 border-l-4 border-blue-500">
                                    <div className="font-bold text-blue-900 mb-2">70% Lower</div>
                                    <p className="text-sm text-slate-600">Smart automation reduces operational costs without affecting quality</p>
                                </div>
                                <div className="bg-white p-6 border-l-4 border-red-200">
                                    <div className="font-bold text-red-600 mb-2">Very High</div>
                                    <p className="text-sm text-slate-600">Salaries, benefits, recruitment fees, office overhead</p>
                                </div>

                                {/* Speed */}
                                <div className="bg-white p-6 border-l-4 border-slate-200 flex items-center">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-8 h-8 text-slate-400" />
                                        <span className="font-bold text-slate-900">Speed to Launch</span>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 border-l-4 border-blue-500">
                                    <div className="font-bold text-blue-900 mb-2">4-6 Weeks</div>
                                    <p className="text-sm text-slate-600">Rapid MVP development and quick iterations</p>
                                </div>
                                <div className="bg-white p-6 border-l-4 border-red-200">
                                    <div className="font-bold text-red-600 mb-2">3-6 Months</div>
                                    <p className="text-sm text-slate-600">Hiring process, onboarding, ramp-up time</p>
                                </div>

                                {/* Team Quality */}
                                <div className="bg-white p-6 border-l-4 border-slate-200 flex items-center">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-8 h-8 text-slate-400" />
                                        <span className="font-bold text-slate-900">Team Quality</span>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 border-l-4 border-blue-500">
                                    <div className="font-bold text-blue-900 mb-2">Senior Experts</div>
                                    <p className="text-sm text-slate-600">Pre-vetted developers, AI specialists, and marketers</p>
                                </div>
                                <div className="bg-white p-6 border-l-4 border-red-200">
                                    <div className="font-bold text-red-600 mb-2">Mixed/Uncertain</div>
                                    <p className="text-sm text-slate-600">Lengthy hiring process, skill verification challenges</p>
                                </div>

                                {/* Automation */}
                                <div className="bg-white p-6 border-l-4 border-slate-200 flex items-center">
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-8 h-8 text-slate-400" />
                                        <span className="font-bold text-slate-900">AI & Automation</span>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 border-l-4 border-blue-500">
                                    <div className="font-bold text-blue-900 mb-2">Built-In</div>
                                    <p className="text-sm text-slate-600">Smart automation in operations = lower costs, same quality</p>
                                </div>
                                <div className="bg-white p-6 border-l-4 border-red-200">
                                    <div className="font-bold text-red-600 mb-2">Manual/Extra Cost</div>
                                    <p className="text-sm text-slate-600">Additional hiring or expensive tools required</p>
                                </div>

                                {/* Ownership */}
                                <div className="bg-white p-6 border-l-4 border-slate-200 flex items-center">
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-8 h-8 text-slate-400" />
                                        <span className="font-bold text-slate-900">Code Ownership</span>
                                    </div>
                                </div>
                                <div className="bg-blue-50 p-6 border-l-4 border-blue-500">
                                    <div className="font-bold text-blue-900 mb-2">100% Yours</div>
                                    <p className="text-sm text-slate-600">Full transparency, complete control, your product</p>
                                </div>
                                <div className="bg-white p-6 border-l-4 border-red-200">
                                    <div className="font-bold text-red-600 mb-2">Depends</div>
                                    <p className="text-sm text-slate-600">Agency lock-in risks, licensing complexities</p>
                                </div>

                                {/* Scalability */}
                                <div className="bg-white rounded-b-2xl p-6 border-l-4 border-slate-200 flex items-center">
                                    <div className="flex items-center gap-3">
                                        <Target className="w-8 h-8 text-slate-400" />
                                        <span className="font-bold text-slate-900">Scalability</span>
                                    </div>
                                </div>
                                <div className="bg-blue-50 rounded-b-2xl p-6 border-l-4 border-blue-500">
                                    <div className="font-bold text-blue-900 mb-2">Instant</div>
                                    <p className="text-sm text-slate-600">Scale team up/down as needed, no contracts</p>
                                </div>
                                <div className="bg-white rounded-b-2xl p-6 border-l-4 border-red-200">
                                    <div className="font-bold text-red-600 mb-2">Slow & Costly</div>
                                    <p className="text-sm text-slate-600">New hiring cycles, severance costs, complexity</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Highlight */}
                        <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                        <Sparkles className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl mb-1">Smart Automation = Quality + Savings</div>
                                        <div className="text-blue-100 text-sm">We invest in technology and automation so you save on costs without sacrificing excellence.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== PAGE 5: CONTACT US (BACK COVER) ===== */}
                <div className="page-break w-full h-[297mm] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
                    <div className="h-full flex flex-col p-16 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-20 right-20 w-96 h-96 border border-white rounded-full"></div>
                            <div className="absolute bottom-20 left-20 w-64 h-64 border border-white rotate-45"></div>
                        </div>

                        {/* Logo */}
                        <div className="relative z-10 mb-16">
                            <div className="flex items-center gap-3 text-3xl font-bold">
                                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                                    <span className="text-white text-2xl">Q</span>
                                </div>
                                <span>QORB</span>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="relative z-10 flex-1 flex flex-col justify-center">
                            <h2 className="text-6xl font-display font-bold mb-8 leading-tight">
                                Ready to Build <br />
                                Something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Extraordinary?
                                </span>
                            </h2>

                            <p className="text-2xl text-slate-300 mb-16 max-w-2xl">
                                Let's discuss how Qorb can become your in-house technology and marketing team — without the overhead.
                            </p>

                            <div className="grid grid-cols-2 gap-12 mb-16">
                                {/* Contact Info */}
                                <div>
                                    <h3 className="text-xl font-bold mb-6 text-blue-300">Get In Touch</h3>
                                    <div className="space-y-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                                <Mail className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-400">Email</div>
                                                <div className="font-semibold text-lg">admin@qorb.tech</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                                <Phone className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-400">Phone / WhatsApp</div>
                                                <div className="font-semibold text-lg">+971 50 123 4567</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Locations */}
                                <div>
                                    <h3 className="text-xl font-bold mb-6 text-blue-300">Our Locations</h3>
                                    <div className="space-y-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-lg mb-1">Dubai, UAE</div>
                                                <div className="text-sm text-slate-400">Middle East Hub</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-lg mb-1">Kerala, India</div>
                                                <div className="text-sm text-slate-400">Development Center</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 flex items-center justify-between">
                                <div>
                                    <div className="text-2xl font-bold mb-2">Book Your Free Consultation</div>
                                    <div className="text-blue-100">Let's explore how we can help you build, launch, and grow.</div>
                                </div>
                                <div className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 cursor-pointer hover:shadow-xl transition-shadow">
                                    Contact Us <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="relative z-10 pt-12 border-t border-white/10 flex justify-between items-center">
                            <div className="text-slate-400 text-sm">
                                © 2024 Qorb. All rights reserved.
                            </div>
                            <div className="text-slate-400 text-sm">
                                www.qorb.tech
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Brochure;
