import { SITE_TITLE, SITE_DESCRIPTION, SOCIAL_LINKS } from './constants';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

// Generate structured data for the website
export function generateStructuredData(props: SEOProps = {}) {
  const {
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    image = '/favicon.svg',
    url = typeof window !== 'undefined' ? window.location.href : 'https://andrewkittridge.dev',
    type = 'website',
    publishedTime,
    modifiedTime,
    author = 'Andrew Kittridge',
    section,
    tags = []
  } = props;

  const baseData = {
    '@context': 'https://schema.org',
    '@type': type === 'website' ? 'Person' : 'Article',
    name: title,
    description,
    url,
    image,
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.github
    ]
  };

  if (type === 'website') {
    return {
      ...baseData,
      '@type': 'Person',
      givenName: 'Andrew',
      familyName: 'Kittridge',
      jobTitle: 'Full-Stack Web Developer',
      email: SOCIAL_LINKS.email,
      telephone: SOCIAL_LINKS.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Reston',
        addressRegion: 'VA',
        addressCountry: 'US'
      },
      knowsAbout: [
        'Java',
        'Spring Boot',
        'Full-Stack Development',
        'Enterprise Software',
        'Web Development',
        'JavaScript',
        'TypeScript',
        'React',
        'Oracle Database'
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Full-Stack Web Developer',
        occupationLocation: {
          '@type': 'City',
          name: 'Reston',
          addressRegion: 'VA',
          addressCountry: 'US'
        }
      }
    };
  }

  return {
    ...baseData,
    '@type': 'Article',
    headline: title,
    author: {
      '@type': 'Person',
      name: author,
      url: url
    },
    publisher: {
      '@type': 'Person',
      name: author
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    articleSection: section,
    keywords: tags.join(', ')
  };
}

// Generate meta tags for SEO
export function generateMetaTags(props: SEOProps = {}) {
  const {
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    image = '/favicon.svg',
    url = typeof window !== 'undefined' ? window.location.href : 'https://andrewkittridge.dev',
    type = 'website'
  } = props;

  const metaTags = [
    // Basic meta tags
    { name: 'description', content: description },
    { name: 'author', content: 'Andrew Kittridge' },

    // Open Graph tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: SITE_TITLE },

    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },

    // Additional SEO tags
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'language', content: 'English' },
    { name: 'revisit-after', content: '7 days' },

    // Mobile optimization
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'msapplication-TileColor', content: '#ffffff' },

    // Canonical URL
    { rel: 'canonical', href: url }
  ];

  return metaTags;
}

// Generate breadcrumb structured data
export function generateBreadcrumbData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

// Generate FAQ structured data
export function generateFAQData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
