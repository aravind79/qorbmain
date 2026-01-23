import { useState, useRef } from 'react';
import { sendEmail } from '@/lib/email';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

export function ContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (form.current) {
            const result = await sendEmail(form.current);
            if (result.success) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds if desired, or keep it
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert('Failed to send message: ' + result.error);
            }
        }
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (isSuccess) {
        return (
            <Card className="w-full bg-green-50 border-green-100">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center h-[520px]">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6 animate-in zoom-in duration-300">
                        <Send className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-green-800 mb-2">Message Sent!</CardTitle>
                    <CardDescription className="text-green-700 max-w-sm text-base">
                        Thank you for reaching out. We have received your message and will get back to you shortly.
                    </CardDescription>
                    <Button
                        variant="outline"
                        className="mt-8 border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800"
                        onClick={() => setIsSuccess(false)}
                    >
                        Send Another Message
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help?"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project..."
                            className="min-h-[120px]"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
