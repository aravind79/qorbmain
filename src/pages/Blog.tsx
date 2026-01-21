import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog & Insights | QORB</title>
                <meta name="description" content="Latest insights, trends, and news in Artificial Intelligence, Automation, and Web Development." />
            </Helmet>
            <Header />
            <main className="pt-32 pb-20 container-custom min-h-screen">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Insights</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-16">
                    Thoughts, tutorials, and updates from the QORB team.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Post Placeholders - Will come from Supabase later */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-video bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <span className="text-sm text-primary font-medium mb-2 block">Technology</span>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">The Future of AI Agents in Business</h3>
                            <p className="text-muted-foreground line-clamp-2">How autonomous agents are reshaping workflow automation.</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Blog;
