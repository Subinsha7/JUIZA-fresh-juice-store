import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "JUIZA - Fresh Cold-Pressed Juices Online | 100% Natural",
  description = "Shop premium fresh cold-pressed juices online at JUIZA. 100% natural fruit juices with no preservatives or added sugar. Fast delivery. Order healthy drinks now!",
  keywords = "fresh juice online, cold pressed juice, natural fruit juice, healthy drinks, juice delivery, JUIZA",
  ogImage = "https://juiza.netlify.app/images/juiza-hero.jpg",
  ogUrl = "https://juiza.netlify.app"
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SUBIN TS" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="JUIZA" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={ogUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
}