import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Mock data for development when keys are missing
const mockPosts = [
    {
        id: '1',
        title: 'The Future of AI in Business',
        slug: 'future-of-ai-business',
        content: 'Artificial Intelligence is reshaping how we do business. From automating routine tasks to providing deep insights through data analysis, AI is no longer just a buzzword—it is a competitive necessity.',
        excerpt: 'AI is reshaping how we do business. Discover how automation and data insights are driving growth.',
        created_at: '2025-01-15T10:00:00Z',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: '2',
        title: 'Building Scalable MVPs',
        slug: 'building-scalable-mvps',
        content: 'Startups often fail because they scale too fast or too slow. Building a Minimum Viable Product (MVP) that is scalable from day one is crucial. Learn about the architecture that supports growth.',
        excerpt: 'Startups often fail because they scale too fast or too slow. Learn how to build an MVP that grows with you.',
        created_at: '2025-01-20T14:30:00Z',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: '3',
        title: 'Cybersecurity Best Practices 2025',
        slug: 'cybersecurity-best-practices',
        content: 'With the rise of AI-driven cyber attacks, security is more important than ever. We explore the top trends in cybersecurity and how to protect your digital assets.',
        excerpt: 'Protect your business from evolving threats. Explore the top cybersecurity trends for 2025.',
        created_at: '2025-01-22T09:15:00Z',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
    }
];

// Create a wrapper client that returns mock data if keys are missing
// Create a wrapper client that returns mock data if keys are missing OR invalid
const isValidUrl = (url: string | undefined): boolean => {
    try {
        return !!url && url.startsWith('http') && new URL(url).protocol.startsWith('http');
    } catch {
        return false;
    }
};

const shouldUseRealClient = isValidUrl(supabaseUrl) && !!supabaseAnonKey;

export const supabase = shouldUseRealClient
    ? createClient(supabaseUrl!, supabaseAnonKey!)
    : {
        from: (table: string) => ({
            select: () => ({
                order: () => Promise.resolve({ data: mockPosts, error: null }),
                eq: (col: string, val: string) => Promise.resolve({ data: mockPosts.filter(p => p[col as keyof typeof mockPosts[0]] === val), error: null }),
                single: () => Promise.resolve({ data: mockPosts[0], error: null }) // simplified for mock
            }),
            insert: (data: any) => {
                console.log('Mock Insert:', data);
                return Promise.resolve({ data: null, error: null });
            },
            update: (data: any) => ({
                eq: () => Promise.resolve({ data: null, error: null })
            }),
            delete: () => ({
                eq: () => Promise.resolve({ data: null, error: null })
            })
        }),
        auth: {
            signInWithPassword: ({ email, password }: any) => {
                if ((email === 'admin@qorb.tech' && password === 'admin123') ||
                    (email === 'hello@qorb.tech' && password === 'qorb123')) {
                    return Promise.resolve({ data: { user: { email } }, error: null });
                }
                return Promise.resolve({ data: null, error: { message: 'Invalid credentials (Mock)' } });
            },
            signOut: () => Promise.resolve({ error: null }),
            getSession: () => Promise.resolve({ data: { session: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } })
        }
    } as any;
