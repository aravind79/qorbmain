import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | QORB - AI Solutions</title>
                <meta name="description" content="Learn about QORB, our mission, vision, and the team driving intelligent automation and digital transformation." />
            </Helmet>
            <Header />
            <main className="pt-32 pb-20 container-custom min-h-screen">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">About QORB</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    We are a team of innovators, engineers, and creators dedicated to transforming businesses through Artificial Intelligence and modern technology.
                </p>
                {/* Add more content here */}
            </main>
            <Footer />
        </>
    );
};

export default About;
