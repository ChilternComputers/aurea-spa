import { SITE } from '@/config';
import { testimonials } from '@/data/testimonials';
import type { Treatment } from '@/data/treatments';
import type { TeamMember } from '@/data/team';

export function getBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.area,
      postalCode: SITE.address.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.5189',
      longitude: '-0.1497',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: SITE.hours.weekday.open,
        closes: SITE.hours.weekday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: SITE.hours.saturday.open,
        closes: SITE.hours.saturday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: SITE.hours.sunday.open,
        closes: SITE.hours.sunday.close,
      },
    ],
    priceRange: '£££',
    image: `${SITE.url}/og-image.jpg`,
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.tiktok],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(testimonials.length),
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.slice(0, 3).map((t) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(t.rating),
        bestRating: '5',
      },
      author: { '@type': 'Person', name: t.author },
      reviewBody: t.quote,
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceSchema(treatments: Treatment[]) {
  return treatments.map((t) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t.name,
    description: t.description,
    provider: {
      '@type': 'HealthAndBeautyBusiness',
      name: SITE.name,
      url: SITE.url,
    },
    offers: {
      '@type': 'Offer',
      price: String(t.price),
      priceCurrency: 'GBP',
    },
  }));
}

export function getPersonSchema(members: TeamMember[]) {
  return members.map((m) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    image: m.image.startsWith('/') ? `${SITE.url}${m.image}` : m.image,
    worksFor: {
      '@type': 'HealthAndBeautyBusiness',
      name: SITE.name,
      url: SITE.url,
    },
  }));
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getWebPageSchema(page: { title: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
  };
}
