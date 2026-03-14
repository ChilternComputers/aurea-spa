import { SITE } from '@/config';
import { testimonials } from '@/data/testimonials';
import type { Treatment } from '@/data/treatments';
import type { TeamMember } from '@/data/team';

const MONTHS: Record<string, string> = {
  January: '01', February: '02', March: '03', April: '04',
  May: '05', June: '06', July: '07', August: '08',
  September: '09', October: '10', November: '11', December: '12',
};

function parseReviewDate(date: string): string {
  const [month, year] = date.split(' ');
  return `${year}-${MONTHS[month] || '01'}-01`;
}

function parseDuration(dur: string): string {
  if (dur.includes('hour')) {
    const h = parseInt(dur);
    return `PT${h}H`;
  }
  return `PT${dur.replace(' min', 'M')}`;
}

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
      addressLocality: SITE.address.area,
      addressRegion: SITE.address.city,
      postalCode: SITE.address.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5189,
      longitude: -0.1497,
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
      ratingValue: String((testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(2)),
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
      datePublished: parseReviewDate(t.date),
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
    areaServed: {
      '@type': 'City',
      name: 'London',
    },
    offers: {
      '@type': 'Offer',
      price: String(t.price),
      priceCurrency: 'GBP',
    },
    duration: parseDuration(t.duration),
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

export function getProductSchema(vouchers: { name: string; price: number; description: string }[]) {
  return vouchers.map((v) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${v.name} Gift Voucher`,
    description: v.description,
    brand: { '@type': 'Brand', name: SITE.name },
    offers: {
      '@type': 'Offer',
      price: String(v.price),
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/gift-vouchers/`,
    },
  }));
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
