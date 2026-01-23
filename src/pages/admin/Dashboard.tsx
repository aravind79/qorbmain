import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<any[]>([]);
    const [messages, setMessages] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<'posts' | 'messages'>('posts');
    const [showForm, setShowForm] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', slug: '', excerpt: '', content: '', image: '' });

    useEffect(() => {
        fetchPosts();
        fetchMessages();
    }, []);

    const fetchPosts = async () => {
        const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
        if (data) setPosts(data);
    };

    const fetchMessages = async () => {
        const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
        if (data) setMessages(data);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const post = { ...newPost };

        const { error } = await supabase.from('posts').insert([post]);

        if (error) {
            alert('Error creating post: ' + error.message);
        } else {
            alert('Post created!');
            setShowForm(false);
            setNewPost({ title: '', slug: '', excerpt: '', content: '', image: '' });
            fetchPosts();
        }
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

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="bg-white p-4 rounded-xl shadow-sm space-y-2">
                            <Button
                                variant={activeTab === 'posts' ? 'default' : 'ghost'}
                                className="w-full justify-start"
                                onClick={() => setActiveTab('posts')}
                            >
                                Blog Posts
                            </Button>
                            <Button
                                variant={activeTab === 'messages' ? 'default' : 'ghost'}
                                className="w-full justify-start"
                                onClick={() => setActiveTab('messages')}
                            >
                                Messages ({messages.length})
                            </Button>
                        </div>

                        {activeTab === 'posts' && (
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-muted-foreground text-sm font-medium mb-2">Total Posts</h3>
                                <div className="text-4xl font-bold">{posts.length}</div>
                            </div>
                        )}

                        {activeTab === 'posts' && (
                            <Button className="w-full py-6" onClick={() => setShowForm(!showForm)}>
                                {showForm ? 'Cancel' : '+ Create New Post'}
                            </Button>
                        )}
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {activeTab === 'posts' ? (
                            <>
                                {showForm && (
                                    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                                        <h2 className="text-xl font-bold mb-4">New Blog Post</h2>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <Input
                                                placeholder="Title"
                                                value={newPost.title}
                                                onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                                                required
                                            />
                                            <Input
                                                placeholder="Slug (e.g. my-first-post)"
                                                value={newPost.slug}
                                                onChange={e => setNewPost({ ...newPost, slug: e.target.value })}
                                                required
                                            />
                                            <Input
                                                placeholder="Image URL"
                                                value={newPost.image}
                                                onChange={e => setNewPost({ ...newPost, image: e.target.value })}
                                            />
                                            <textarea
                                                className="w-full flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                placeholder="Excerpt"
                                                rows={3}
                                                value={newPost.excerpt}
                                                onChange={e => setNewPost({ ...newPost, excerpt: e.target.value })}
                                                required
                                            />
                                            <textarea
                                                className="w-full flex min-h-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                placeholder="Content (Markdown supported)"
                                                rows={10}
                                                value={newPost.content}
                                                onChange={e => setNewPost({ ...newPost, content: e.target.value })}
                                                required
                                            />
                                            <Button type="submit" className="w-full">Publish Post</Button>
                                        </form>
                                    </div>
                                )}

                                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                    <div className="p-4 border-b font-medium">Recent Posts</div>
                                    <div className="divide-y">
                                        {posts.length === 0 ? (
                                            <div className="p-8 text-center text-muted-foreground">No posts yet.</div>
                                        ) : (
                                            posts.map(post => (
                                                <div key={post.id} className="p-4 flex justify-between items-center hover:bg-slate-50">
                                                    <div>
                                                        <div className="font-bold">{post.title}</div>
                                                        <div className="text-xs text-muted-foreground">/{post.slug}</div>
                                                    </div>
                                                    <Button variant="ghost" size="sm">Edit</Button>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <div className="p-4 border-b font-medium">Inquiries & Messages</div>
                                <div className="divide-y">
                                    {messages.length === 0 ? (
                                        <div className="p-8 text-center text-muted-foreground">No messages yet.</div>
                                    ) : (
                                        messages.map(msg => (
                                            <div key={msg.id} className="p-6 hover:bg-slate-50 transition-colors">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <span className="font-bold text-lg">{msg.name}</span>
                                                        <span className="text-muted-foreground text-sm ml-2">&lt;{msg.email}&gt;</span>
                                                    </div>
                                                    <span className="text-xs text-muted-foreground">
                                                        {new Date(msg.created_at).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <div className="font-medium text-blue-600 mb-2">{msg.subject}</div>
                                                <div className="text-gray-700 whitespace-pre-wrap">{msg.message}</div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
