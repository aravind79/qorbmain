import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageBanner from '@/components/layout/PageBanner';

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image: string;
    created_at: string;
}

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (!error && data) {
                setPosts(data);
            }
            setLoading(false);
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Header />
            <PageBanner
                title="Our Blog"
                subtitle="Insights & Updates"
                description="Latest thoughts on AI, Technology, and Business Transformation."
                badge="Blog"
            />

            <main className="py-20 bg-slate-50 min-h-screen">
                <div className="container-custom">
                    {loading ? (
                        <div className="text-center py-20">Loading posts...</div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link key={post.id} to={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=No+Image';
                                            }}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs text-primary font-bold mb-2">
                                            {new Date(post.created_at).toLocaleDateString()}
                                        </div>
                                        <h2 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Blog;
