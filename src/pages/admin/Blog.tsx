import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, X, Upload, Loader2, Search, FileText } from 'lucide-react';
import { toast } from 'sonner';

const Blog = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        image: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setIsLoading(true);
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            toast.error('Failed to fetch posts: ' + error.message);
        } else {
            setPosts(data || []);
        }
        setIsLoading(false);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        setIsUploading(true);

        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            // Upload to Supabase Storage (bucket: 'blog-images' or 'public')
            // Trying 'public' bucket first as it's common, fallback to 'blog-images' if needed in real env logic
            const { error: uploadError } = await supabase.storage
                .from('public') // CAUTION: Ensure this bucket exists and is public
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data } = supabase.storage.from('public').getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, image: data.publicUrl }));
            toast.success('Image uploaded successfully');
        } catch (error: any) {
            console.error('Upload Error:', error);
            toast.error('Image upload failed. Ensure "public" bucket exists in Supabase Storage.');
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase.from('posts').insert([formData]);

            if (error) throw error;

            toast.success('Blog post published!');
            setIsCreating(false);
            setFormData({ title: '', slug: '', excerpt: '', content: '', image: '' });
            fetchPosts();
        } catch (error: any) {
            toast.error('Error creating post: ' + error.message);
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        const { error } = await supabase.from('posts').delete().eq('id', id);

        if (error) {
            toast.error('Failed to delete post');
        } else {
            toast.success('Post deleted');
            fetchPosts();
        }
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Helmet>
                <title>Manage Blogs | QORB Admin</title>
            </Helmet>

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
                    <p className="text-gray-500">Manage your articles and news</p>
                </div>
                {!isCreating && (
                    <Button onClick={() => setIsCreating(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Post
                    </Button>
                )}
            </div>

            {isCreating ? (
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-4xl animate-in slide-in-from-right-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">New Blog Post</h2>
                        <Button variant="ghost" size="icon" onClick={() => setIsCreating(false)}>
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Title</label>
                                    <Input
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        required
                                        placeholder="Enter post title"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Slug</label>
                                    <Input
                                        value={formData.slug}
                                        onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                        required
                                        placeholder="url-friendly-slug"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Featured Image</label>
                                    <div className="flex gap-4">
                                        <Input
                                            value={formData.image}
                                            onChange={e => setFormData({ ...formData, image: e.target.value })}
                                            placeholder="https://..."
                                            className="flex-1"
                                        />
                                        <div className="relative">
                                            <input
                                                type="file"
                                                id="file-upload"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                disabled={isUploading}
                                            />
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => document.getElementById('file-upload')?.click()}
                                                disabled={isUploading}
                                            >
                                                {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                                            </Button>
                                        </div>
                                    </div>
                                    {formData.image && (
                                        <img src={formData.image} alt="Preview" className="mt-2 h-32 w-full object-cover rounded-md border" />
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Excerpt</label>
                                    <textarea
                                        className="w-full flex min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        value={formData.excerpt}
                                        onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                                        placeholder="Short summary for cards..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Content (Markdown)</label>
                            <textarea
                                className="w-full flex min-h-[300px] font-mono rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                value={formData.content}
                                onChange={e => setFormData({ ...formData, content: e.target.value })}
                                placeholder="# Heading&#10;&#10;Write your content here..."
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-4">
                            <Button type="button" variant="outline" onClick={() => setIsCreating(false)}>Cancel</Button>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Publishing...
                                    </>
                                ) : (
                                    'Publish Post'
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    {/* Search and Filter Bar could go here */}
                    <div className="p-4 border-b flex items-center gap-4 bg-slate-50/50">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                className="pl-9 bg-white"
                                placeholder="Search posts..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="divide-y text-sm">
                        {isLoading ? (
                            <div className="p-12 text-center text-muted-foreground">Loading posts...</div>
                        ) : filteredPosts.length === 0 ? (
                            <div className="p-12 text-center text-muted-foreground">No posts found.</div>
                        ) : (
                            filteredPosts.map((post) => (
                                <div key={post.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded bg-slate-100 flex-shrink-0 overflow-hidden">
                                            {post.image ? (
                                                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                                            ) : (
                                                <FileText className="h-5 w-5 m-auto text-slate-400" />
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">{post.title}</div>
                                            <div className="text-xs text-muted-foreground">{new Date(post.created_at).toLocaleDateString()} • {post.slug}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button variant="ghost" size="sm">Edit</Button>
                                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleDelete(post.id)}>Delete</Button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;
