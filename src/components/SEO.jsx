import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "El Sin Rival",
    "image": "https://elsinrival.com/logo.png",
    "description": "Los sorbetes artesanales favoritos de El Salvador. Ingredientes de calidad y recetas tradicionales.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Salvador",
      "addressCountry": "SV"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "135"
    }
  };

  return (
    <Helmet>
      <title>El Sin Rival | Los sorbetes artesanales favoritos de El Salvador</title>
      <meta name="description" content="Disfruta de los mejores helados y sorbetes artesanales en El Salvador con El Sin Rival. Sabores únicos preparados con ingredientes de calidad, frutas naturales y recetas tradicionales." />
      <meta name="keywords" content="Helados artesanales en El Salvador, Sorbetes artesanales, Heladerías en San Salvador, El Sin Rival, Helados de frutas, Helados premium" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://elsinrival.com/" />
      <meta property="og:title" content="El Sin Rival | Helados Artesanales" />
      <meta property="og:description" content="Disfruta de los mejores sorbetes artesanales en El Salvador. Sabores únicos y calidad garantizada." />
      <meta property="og:image" content="https://elsinrival.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://elsinrival.com/" />
      <meta property="twitter:title" content="El Sin Rival | Helados Artesanales" />
      <meta property="twitter:description" content="Disfruta de los mejores sorbetes artesanales en El Salvador. Sabores únicos y calidad garantizada." />
      <meta property="twitter:image" content="https://elsinrival.com/twitter-image.jpg" />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;
