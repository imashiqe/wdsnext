import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE, safeJsonLd } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Web Development Services USA | Design, Development & SEO', template: '%s | Web Development Service USA' },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ['web development services USA', 'custom web development', 'website design company USA', 'React Next.js development', 'ecommerce website development'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: '/' },
  openGraph: { siteName: SITE.name, title: 'Web Development Services USA | Design, Development & SEO', description: SITE.description, type: 'website', url: SITE.url, images: [{ url: '/opengraph-image', width: 1200, height: 630 }] },
  twitter: { card:'summary_large_image', title: 'Web Development Service USA', description: SITE.description, images: ['/opengraph-image'] },
};
export const viewport: Viewport = { width:'device-width', initialScale: 1, themeColor:'#0e1830' };

const organization = { '@context':'https://schema.org', '@type':'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: SITE.url, description: SITE.description, contactPoint: [{ '@type':'ContactPoint', contactType:'sales', url: `${SITE.url}/contact`, areaServed:'US', availableLanguage:'en' }], areaServed: { '@type':'Country', name:'United States' } };
const website = { '@context':'https://schema.org', '@type':'WebSite', '@id':`${SITE.url}/#website`, url:SITE.url, name:SITE.name, publisher:{ '@id':`${SITE.url}/#organization` }, inLanguage:'en-US' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-US"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd([organization,website]) }}/><Header/><main id="main-content">{children}</main><Footer/></body></html>;
}
