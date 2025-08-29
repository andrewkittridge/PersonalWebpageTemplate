import { useEffect } from 'react';
import { generateStructuredData, generateMetaTags, SEOProps } from '@/lib/seo';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants';

interface SEOHeadProps extends SEOProps {
  children?: React.ReactNode;
}

export default function SEOHead({
  title,
  description,
  image,
  url,
  type,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  children
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
  const metaDescription = description || SITE_DESCRIPTION;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle) ogTitle.setAttribute('content', fullTitle);
    if (ogDesc) ogDesc.setAttribute('content', metaDescription);
    if (ogImage && image) ogImage.setAttribute('content', image);
    if (ogUrl && url) ogUrl.setAttribute('content', url);

  }, [fullTitle, metaDescription, image, url]);

  // Generate structured data
  const structuredData = generateStructuredData({
    title: fullTitle,
    description: metaDescription,
    image,
    url,
    type,
    publishedTime,
    modifiedTime,
    author,
    section,
    tags
  });

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Additional meta tags */}
      {generateMetaTags({
        title: fullTitle,
        description: metaDescription,
        image,
        url,
        type
      }).map((tag, index) => {
        if (tag.rel === 'canonical') {
          return <link key={index} rel={tag.rel} href={tag.href} />;
        }
        if ('property' in tag) {
          return <meta key={index} property={tag.property} content={tag.content} />;
        }
        return <meta key={index} name={tag.name} content={tag.content} />;
      })}

      {/* Additional children */}
      {children}
    </>
  );
}
