import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, MessageSquare, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { sendEmail } from '@/lib/email';

const QuickChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<'menu' | 'form' | 'whatsapp-form' | 'success'>('menu');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [whatsAppFormData, setWhatsAppFormData] = useState({
        name: '',
        message: ''
    });

    // Handle Email Submission
    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (formRef.current) {
            const result = await sendEmail(formRef.current);
            if (result.success) {
                setView('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send message over email. trying opening whatsapp instead.');
                // Fallback or error handling
            }
        }
        setIsSubmitting(false);
    };

    // Handle WhatsApp Submission
    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, message } = whatsAppFormData;
        const text = encodeURIComponent(`Hi, my name is ${name}. ${message}`);
        const url = `https://wa.me/917907021813?text=${text}`;

        // Open WhatsApp in new tab
        window.open(url, '_blank');

        // Show success/confirmation
        setView('success');
        setWhatsAppFormData({ name: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setWhatsAppFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => setView('menu'), 300);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-background border border-border shadow-2xl rounded-2xl w-[350px] overflow-hidden flex flex-col max-h-[600px]"
                    >
                        {/* Header Area */}
                        {view !== 'success' && (
                            <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-lg">Quick Chat</div>
                                    <div className="text-xs opacity-90">
                                        {view === 'menu' ? 'We typically reply within minutes' :
                                            view === 'form' ? 'Send us an email' : 'Start WhatsApp Chat'}
                                    </div>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        )}

                        {/* Menu View */}
                        {view === 'menu' && (
                            <div className="p-6">
                                <p className="text-muted-foreground text-sm mb-6">
                                    How can we help you today? Choose an option below to start a conversation.
                                </p>
                                <div className="space-y-3">
                                    <button
                                        onClick={() => setView('whatsapp-form')}
                                        className="flex items-center gap-3 w-full p-4 rounded-xl bg-[#25D366]/10 text-[#075E54] hover:bg-[#25D366]/20 transition-colors group text-left"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        <div className="flex-1">
                                            <div className="font-semibold">WhatsApp</div>
                                            <div className="text-xs opacity-75">Chat with our team</div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>

                                    <button
                                        onClick={() => setView('form')}
                                        className="flex items-center gap-3 w-full p-4 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors group text-left"
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-200 text-slate-600">
                                            <MessageSquare className="w-3 h-3" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold">Send a Message</div>
                                            <div className="text-xs opacity-75">We'll reply via email</div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Email Form View */}
                        {view === 'form' && (
                            <div className="flex flex-col h-full bg-white">
                                <div className="p-2 border-b flex items-center bg-muted/30">
                                    <button
                                        onClick={() => setView('menu')}
                                        className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 px-3 py-2 rounded-md hover:bg-muted"
                                    >
                                        ← Back to options
                                    </button>
                                </div>
                                <form ref={formRef} onSubmit={handleEmailSubmit} className="p-6 space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="chat-name" className="text-sm font-medium">Name</Label>
                                        <Input
                                            id="chat-name"
                                            name="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="h-10 bg-slate-50 focus:bg-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="chat-email" className="text-sm font-medium">Email</Label>
                                        <Input
                                            id="chat-email"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="h-10 bg-slate-50 focus:bg-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="chat-message" className="text-sm font-medium">Message</Label>
                                        <Textarea
                                            id="chat-message"
                                            name="message"
                                            placeholder="How can we help?"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="min-h-[100px] bg-slate-50 focus:bg-white transition-colors resize-none"
                                        />
                                    </div>
                                    <Button type="submit" size="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all" disabled={isSubmitting}>
                                        <Send className="w-4 h-4 mr-2" />
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            </div>
                        )}

                        {/* WhatsApp Form View */}
                        {view === 'whatsapp-form' && (
                            <div className="flex flex-col h-full bg-white">
                                <div className="p-2 border-b flex items-center bg-muted/30">
                                    <button
                                        onClick={() => setView('menu')}
                                        className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 px-3 py-2 rounded-md hover:bg-muted"
                                    >
                                        ← Back to options
                                    </button>
                                </div>
                                <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="wa-name" className="text-sm font-medium">Name</Label>
                                        <Input
                                            id="wa-name"
                                            name="name"
                                            placeholder="Your name"
                                            value={whatsAppFormData.name}
                                            onChange={handleWhatsAppChange}
                                            required
                                            className="h-10 bg-slate-50 focus:bg-white transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="wa-message" className="text-sm font-medium">Message</Label>
                                        <Textarea
                                            id="wa-message"
                                            name="message"
                                            placeholder="Hi, I'm interested in..."
                                            value={whatsAppFormData.message}
                                            onChange={handleWhatsAppChange}
                                            required
                                            className="min-h-[100px] bg-slate-50 focus:bg-white transition-colors resize-none"
                                        />
                                    </div>
                                    <Button type="submit" size="default" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-md hover:shadow-lg transition-all">
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        Start WhatsApp Chat
                                    </Button>
                                </form>
                            </div>
                        )}

                        {/* Success View */}
                        {view === 'success' && (
                            <div className="flex flex-col items-center justify-center p-8 text-center h-[400px] bg-white relative">
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6 animate-in zoom-in duration-300">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground mb-8">
                                    {formData.email
                                        ? `Thanks for reaching out ${formData.name}. We'll get back to you shortly at ${formData.email}.`
                                        : "Great! Check the new tab to continue your chat on WhatsApp."}
                                </p>
                                <Button
                                    onClick={handleClose}
                                    variant="outline"
                                    className="min-w-[120px]"
                                >
                                    Close
                                </Button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-destructive text-destructive-foreground' : 'bg-primary text-primary-foreground'
                    }`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>
        </div>
    );
};

export default QuickChat;
