import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = 'JUIZA BURST | Premium Cold-Pressed Juices';
    const defaultDescription = 'Experience pure refreshment with JUIZA BURST. 100% organic, cold-pressed juices handcrafted for your well-being. Order online for wide delivery.';
    const defaultKeywords = 'organic juice, cold press, health drinks, detox, fresh juice, buy juice online';
    const defaultImage = '/COVER.png';
    const siteUrl = 'https://juiza.com'; // Replace with actual URL

    const fullTitle = title ? `${title} | JUIZA BURST` : siteTitle;
    const finalDescription = description || defaultDescription;
    const finalKeywords = keywords || defaultKeywords;
    const finalImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
    const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={finalKeywords} />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={finalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={finalDescription} />
            <meta property="twitter:image" content={finalImage} />
        </Helmet>
    );
};

export default SEO;
