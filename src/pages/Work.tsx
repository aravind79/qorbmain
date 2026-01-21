import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OurWorkSection from '@/components/sections/OurWorkSection'; // Reusing the section for now

const Work = () => {
    return (
        <>
            <Helmet>
                <title>Our Work | QORB Portfolio</title>
                <meta name="description" content="Explore our portfolio of successful projects in AI, Web Development, and Mobile Apps." />
            </Helmet>
            <Header />
            <main className="pt-32 pb-20 container-custom component-fade-in">
                <div className="mb-16">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        A selection of projects that showcase our passion for design and technology.
                    </p>
                </div>

                {/* We can enhance this to be a filterable grid later */}
                <OurWorkSection />
            </main>
            <Footer />
        </>
    );
};

export default Work;
