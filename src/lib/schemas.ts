import { SITE } from '@/config';
import { testimonials } from '@/data/testimonials';

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
