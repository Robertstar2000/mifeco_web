import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "MIFECO - Strategic Business Consulting Services | Transform Your Business",
  description = "MIFECO provides expert business consulting services including strategic planning, digital transformation, and growth optimization for startups and mid-size companies. Award-winning space industry expertise.",
  keywords = "business consulting, strategic planning, digital transformation, growth optimization, space industry consulting, startup consulting, business strategy, management consulting",
  canonicalUrl = "https://mifeco.com",
  ogImage = "/images/mifeco-og-image.jpg"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MIFECO",
    "description": "Strategic business consulting services specializing in digital transformation, growth optimization, and space industry consulting.",
    "url": "https://mifeco.com",
    "logo": "https://mifeco.com/images/mifeco-logo.png",
    "image": "https://mifeco.com/images/mifeco-hero.jpg",
    "telephone": "+1-555-123-4567",
    "email": "contact@mifeco.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "serviceType": [
      "Business Consulting",
      "Strategic Planning",
      "Digital Transformation",
      "Growth Optimization",
      "Space Industry Consulting"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "founder": {
      "@type": "Person",
      "name": "MIFECO Team"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sebastian Fries"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "MIFECO's strategic guidance transformed our IT governance and digital infrastructure. Their education sector expertise helped us modernize operations and improve resident satisfaction significantly."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Planning Consultation",
            "description": "Comprehensive strategic planning and business assessment"
          },
          "price": "500",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation Project",
            "description": "End-to-end digital transformation consulting"
          },
          "price": "5000",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="MIFECO" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MIFECO" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@mifeco" />
      <meta name="twitter:creator" content="@mifeco" />

      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//js.stripe.com" />
    </Helmet>
  );
};

export default SEOHead;

