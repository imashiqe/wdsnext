import type { Metadata } from 'next';

export const SITE = {
  name: 'Web Development Service USA',
  shortName: 'WDS USA',
  url: 'https://webdevelopmentserviceusa.com',
  description: 'Custom web development, responsive web design, eCommerce, and technical SEO for businesses serving customers across the United States.',
  email: '', // Set only after confirming that the mailbox exists.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801710233118',
} as const;

export const absoluteUrl = (path = '/') => `${SITE.url}${path === '/' ? '' : path}`;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: absoluteUrl(path),
      siteName: SITE.name,
      title,
      description,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${SITE.name} — Web Development Services` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.path),
    })),
  };
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const chatUrl = (message = 'Hello, I would like a quote for a website project.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
