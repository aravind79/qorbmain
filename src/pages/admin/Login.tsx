import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // DEV BYPASS: Allow specific credentials to skip Supabase Auth check
        if (email === 'hello@qorb.tech' && password === 'qorb123') {
            console.log('Using Dev Bypass login');
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/admin/dashboard');
            return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else if (data.user) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/admin/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="font-display text-2xl font-bold mb-6 text-center">Admin Login</h1>
                {error && (
                    <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4">
                        {error}
                    </div>
                )}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input
                            type="email"
                            name="val_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="hello@qorb.tech"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <Input
                            type="password"
                            name="val_password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            autoComplete="new-password"
                        />
                    </div>
                    <Button type="submit" className="w-full">Sign In</Button>
                </form>
                <div className="mt-4 text-center text-xs text-muted-foreground">
                    Dev Access: hello@qorb.tech / qorb123
                </div>
            </div>
        </div>
    );
};

export default Login;
