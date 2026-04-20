// Structured Data for SEO and Rich Snippets

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization", "ProfessionalService"],
  "name": "French Flow",
  "description": "French language classes for adults and exam preparation in South East London. Small group and 1:1 lessons with native French speaker.",
  "url": "https://frenchflow.co.uk",
  "logo": "https://frenchflow.co.uk/french-flow-logo.png",
  "image": "https://frenchflow.co.uk/french-flow-logo.png",
  "telephone": "+44-7812-345-678",
  "email": "barbara@frenchflow.co.uk",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dulwich",
    "addressLocality": "London",
    "addressRegion": "South East London",
    "postalCode": "SE21",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.4452",
    "longitude": "-0.0858"
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
        "price": "220",
        "priceCurrency": "GBP",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "220",
          "priceCurrency": "GBP",
          "unitText": "per 10-week block"
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
    "ratingValue": "5",
    "ratingCount": "4",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Parent of Year 2 student"
      },
      "reviewBody": "Thank you so much for making the French lessons such an interesting and innovative experience for Isla. She's clearly been having a really wonderful time."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Parent of A-Level student"
      },
      "reviewBody": "Thank you so much for my daughter's session today. She came home so positive and really enjoyed her time with you. And thank you for all your inspiration, she has a completely different attitude to French!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ian"
      },
      "reviewBody": "I've loved my lessons with Barbara at French Flow. She carefully tailors everything to my level and what I'm interested in, which makes learning feel natural and motivating. She's a joy to work with and always makes our sessions fun!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Michal"
      },
      "reviewBody": "Barbara has taken my French to a new level. She tailors each lesson carefully to where I am, which means I feel challenged but never overwhelmed. She grounds everything in real life situations and culture which makes the language feel genuinely useful."
    }
  ]
};

export const testimonialStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Review",
      "position": 1,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Parent of Year 2 student"
      },
      "reviewBody": "Thank you so much for making the French lessons such an interesting and innovative experience for Isla. She's clearly been having a really wonderful time.",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "French Flow"
      }
    },
    {
      "@type": "Review",
      "position": 2,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ian"
      },
      "reviewBody": "I've loved my lessons with Barbara at French Flow. She carefully tailors everything to my level and what I'm interested in, which makes learning feel natural and motivating. She's a joy to work with and always makes our sessions fun!",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "French Flow"
      }
    },
    {
      "@type": "Review",
      "position": 3,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Michal"
      },
      "reviewBody": "Barbara has taken my French to a new level. She tailors each lesson carefully to where I am, which means I feel challenged but never overwhelmed. She grounds everything in real life situations and culture which makes the language feel genuinely useful.",
      "itemReviewed": {
        "@type": "LocalBusiness",
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
