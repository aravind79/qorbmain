import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, MessageSquare, ArrowRight } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        posts: 0,
        messages: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        const { count: postsCount } = await supabase.from('posts').select('*', { count: 'exact', head: true });
        const { count: messagesCount } = await supabase.from('messages').select('*', { count: 'exact', head: true });

        setStats({
            posts: postsCount || 0,
            messages: messagesCount || 0
        });
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-display">Admin Dashboard</h1>
                    <div className="flex gap-4">
                        <Button onClick={() => navigate('/')} variant="outline">View Site</Button>
                        <Button onClick={handleLogout} variant="destructive">Logout</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Blog Stats Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <Button variant="ghost" className="text-blue-600" onClick={() => navigate('/admin/blog')}>
                                Manage <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                        <h3 className="text-muted-foreground text-sm font-medium">Total Blog Posts</h3>
                        <div className="text-3xl font-bold mt-2">{stats.posts}</div>
                    </div>

                    {/* Messages Stats Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-purple-50 rounded-lg">
                                <MessageSquare className="w-6 h-6 text-purple-600" />
                            </div>
                            <Button variant="ghost" className="text-purple-600" onClick={() => navigate('/admin/messages')}>
                                View All <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                        <h3 className="text-muted-foreground text-sm font-medium">Unread Messages</h3>
                        <div className="text-3xl font-bold mt-2">{stats.messages}</div>
                    </div>
                </div>

                {/* Welcome Section */}
                <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                    <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
                    <p className="text-muted-foreground">Select an option from the sidebar to get started.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
