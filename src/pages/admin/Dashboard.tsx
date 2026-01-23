import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<any[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', slug: '', excerpt: '', content: '', image: '' });

    useEffect(() => {
        // Simple auth check mock
        // In real app, check session
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const { data } = await supabase.from('posts').select('*');
        if (data) setPosts(data);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Mock insert
        const post = { ...newPost, id: Date.now().toString(), created_at: new Date().toISOString() };
        console.log('Creating post:', post);

        // Optimistic update for mock
        setPosts([post, ...posts]);
        setShowForm(false);
        setNewPost({ title: '', slug: '', excerpt: '', content: '', image: '' });

        alert('Post created! (In mock mode this is local only)');
    };

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-display">Admin Dashboard</h1>
                    <div className="flex gap-4">
                        <Button onClick={() => navigate('/')} variant="outline">View Site</Button>
                        <Button onClick={handleLogout} variant="destructive">Logout</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar / Stats */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-muted-foreground text-sm font-medium mb-2">Total Posts</h3>
                            <div className="text-4xl font-bold">{posts.length}</div>
                        </div>
                        <Button className="w-full py-6" onClick={() => setShowForm(!showForm)}>
                            {showForm ? 'Cancel' : '+ Create New Post'}
                        </Button>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
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
                                        className="w-full flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Excerpt"
                                        rows={3}
                                        value={newPost.excerpt}
                                        onChange={e => setNewPost({ ...newPost, excerpt: e.target.value })}
                                        required
                                    />
                                    <textarea
                                        className="w-full flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Content"
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
                                {posts.map(post => (
                                    <div key={post.id} className="p-4 flex justify-between items-center hover:bg-slate-50">
                                        <div>
                                            <div className="font-bold">{post.title}</div>
                                            <div className="text-xs text-muted-foreground">/{post.slug}</div>
                                        </div>
                                        <Button variant="ghost" size="sm">Edit</Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
