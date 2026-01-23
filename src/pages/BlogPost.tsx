import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Post {
    id: string;
    title: string;
    content: string;
    image: string;
    created_at: string;
}

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;

            // In a real app with proper query:
            // const { data } = await supabase.from('posts').select('*').eq('slug', slug).single();

            // For mock data handling setup in lib/supabase.ts, just getting all and filtering
            const { data } = await supabase.from('posts').select('*').eq('slug', slug);

            // Handle array return from mock or single object from real API if .single() worked perfectly in both
            // The mock implementation returns an array for .eq()
            if (data && data.length > 0) {
                setPost(data[0]);
            }
            setLoading(false);
        };

        fetchPost();
    }, [slug]);

    if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    if (!post) return <div className="flex items-center justify-center min-h-screen">Post not found</div>;

    return (
        <>
            <Header />
            <main className="pt-32 pb-20 min-h-screen">
                <article className="container-custom max-w-4xl">
                    <Link to="/blog">
                        <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                        </Button>
                    </Link>

                    <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/800x400?text=No+Image';
                            }}
                        />
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="text-sm text-primary font-bold mb-4">
                            {new Date(post.created_at).toLocaleDateString()}
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            {post.title}
                        </h1>
                        <div className="prose prose-lg prose-slate max-w-none">
                            <p className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
                                {post.content}
                            </p>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default BlogPost;
