import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
    type?: 'website' | 'article' | 'product';
    structuredData?: object;
}

const SEO = ({
    title,
    description,
    keywords,
    ogImage = '/og-image.jpg',
    canonicalUrl,
    type = 'website',
    structuredData
}: SEOProps) => {
    const siteUrl = 'https://qorb.tech'; // Update with actual domain
    const fullTitle = title.includes('QORB') ? title : `${title} | QORB`;
    const url = canonicalUrl || siteUrl;

    // Default Organization Schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'QORB',
        description: 'AI-First Technology Solutions Company',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+91-XXXX-XXXXXX',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi']
            },
            {
                '@type': 'ContactPoint',
                telephone: '+1-XXX-XXX-XXXX',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English'
            },
            {
                '@type': 'ContactPoint',
                telephone: '+971-XX-XXX-XXXX',
                contactType: 'customer service',
                areaServed: 'AE',
                availableLanguage: ['English', 'Arabic']
            }
        ],
        sameAs: [
            'https://www.linkedin.com/company/qorb',
            'https://twitter.com/qorb',
            'https://github.com/qorb'
        ],
        address: [
            {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'Maharashtra'
            },
            {
                '@type': 'PostalAddress',
                addressCountry: 'US',
                addressRegion: 'California'
            },
            {
                '@type': 'PostalAddress',
                addressCountry: 'AE',
                addressRegion: 'Dubai'
            }
        ]
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="QORB" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            {/* Geo Targeting */}
            <meta name="geo.region" content="IN;US;AE" />
            <meta name="geo.placename" content="India;United States;United Arab Emirates" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>

            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
