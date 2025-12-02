import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
  robots?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = "https://hxzxyrlkaczsmhgf.public.blob.vercel-storage.com/blog/1761586133241-584001331-La_Vieille_Ville_d_Annecy-Gilles_Piel-10272-ukvpHVift8lobe12TxPGFAX1EWSf5Z.jpg",
  url = "https://frenchflow.co.uk",
  type = "website",
  structuredData
}) => {
  const fullTitle = title.includes("French Flow") ? title : `${title} | French Flow`;
  const fullUrl = url.startsWith("http") ? url : `https://frenchflow.co.uk${url}`;
  const robotsDirectives = typeof robots === 'string' && robots.length > 0 ? robots : "index, follow";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Barbara - French Flow" />
      <meta name="robots" content={robotsDirectives} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="French Flow" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
