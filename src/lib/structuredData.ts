// Structured Data for SEO and Rich Snippets

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "French Flow",
  "description": "French language classes for adults and exam preparation in South East London. Small group and 1:1 lessons with native French speaker.",
  "url": "https://frenchflow.co.uk",
  "logo": "https://frenchflow.co.uk/french-flow-logo.png",
  "image": "https://frenchflow.co.uk/og-image.jpg",
  "telephone": "+44-7812-345-678",
  "email": "barbara@frenchflow.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "South East London",
    "addressRegion": "London",
    "addressCountry": "GB"
  },
  "founder": {
    "@type": "Person",
    "name": "Barbara",
    "jobTitle": "French Teacher",
    "description": "Native French speaker, fully qualified teacher with QTS and PGCE, DAEFLE certified with Alliance française de Paris"
  },
  "areaServed": [
    "Dulwich",
    "Forest Hill", 
    "East Dulwich",
    "Sydenham",
    "Honor Oak",
    "Crystal Palace",
    "Penge"
  ],
  "serviceType": "French Language Education",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "French Classes",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Adult Group French Classes",
          "description": "Small group French conversation classes for adults",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "French Flow"
          }
        },
        "price": "20",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "20",
          "priceCurrency": "GBP",
          "unitText": "per session"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "1:1 French Lessons",
          "description": "Personalised one-to-one French lessons tailored to your goals",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "French Flow"
          }
        },
        "price": "45",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "45",
          "priceCurrency": "GBP",
          "unitText": "per session"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "GCSE French Preparation",
          "description": "Comprehensive GCSE French exam preparation",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "French Flow"
          }
        },
        "price": "40",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "40",
          "priceCurrency": "GBP",
          "unitText": "per session"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "A-Level French Preparation",
          "description": "Advanced A-Level French exam preparation",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "French Flow"
          }
        },
        "price": "50",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "50",
          "priceCurrency": "GBP",
          "unitText": "per session"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "12",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const testimonialStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewBody": "After 20 years since my A-levels, I thought my French was lost forever. The 6-week course brought it all back and gave me the confidence to actually use it. I'm now planning my first trip to France in decades!",
      "publisher": {
        "@type": "Organization",
        "name": "French Flow"
      }
    }
  ]
};

export const courseStructuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "French Language Classes",
  "description": "Comprehensive French language education for adults and students in South East London",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "French Flow",
    "url": "https://frenchflow.co.uk"
  },
  "courseMode": ["Blended", "In-person"],
  "educationalLevel": "Beginner to Advanced",
  "inLanguage": "French",
  "availableLanguage": "English",
  "teaches": [
    "French conversation",
    "French grammar", 
    "French vocabulary",
    "French culture",
    "French exam preparation"
  ],
  "coursePrerequisites": "No prior French knowledge required for beginner classes",
  "syllabusSections": [
    {
      "@type": "Syllabus",
      "name": "Conversation Practice",
      "description": "Building confidence in speaking French through structured conversation"
    },
    {
      "@type": "Syllabus", 
      "name": "Grammar Foundation",
      "description": "Understanding French grammar rules and structures"
    },
    {
      "@type": "Syllabus",
      "name": "Cultural Context",
      "description": "Learning about French culture, traditions, and everyday life"
    }
  ]
};
