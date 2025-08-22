import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const location = useLocation();
  
  // Determine if we're on a Bangladeshi or International page
  const isBanglaPage = !location.pathname.startsWith('/en');
  
  // Construct the canonical URL
  const canonicalUrl = `${import.meta.env.VITE_APP_URL}${location.pathname}`;
  
  // Construct hreflang URLs
  const bdUrl = `${import.meta.env.VITE_APP_URL}${location.pathname.replace('/en', '') || '/'}`;
  const enUrl = `${import.meta.env.VITE_APP_URL}/en${location.pathname === '/' ? '' : location.pathname}`;
  
  return (
    <Helmet>
      {/* Canonical tag */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang tags */}
      <link rel="alternate" hreflang="en-BD" href={bdUrl} />
      <link rel="alternate" hreflang="en" href={enUrl} />
      <link rel="alternate" hreflang="x-default" href={bdUrl} />
    </Helmet>
  );
};

export default SEO;