import React from 'react'

interface StructuredDataProps {
  type: 'BlogPosting' | 'FAQPage'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://www.labonneplaque.fr'
    
    switch (type) {
      case 'BlogPosting':
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "url": `${baseUrl}/blog/${data.slug}`,
          "datePublished": data.createdAt,
          "dateModified": data.updatedAt || data.createdAt,
          "author": {
            "@type": "Person",
            "name": data.author?.name || "LABONNEPLAQUE.fr",
            "url": baseUrl
          },
          "publisher": {
            "@type": "Organization",
            "name": "LABONNEPLAQUE.fr",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/images/logo/1.svg`
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${data.slug}`
          }
        }
      
      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqItems?.map((item: any) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          })) || []
        }
      
      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  )
}
