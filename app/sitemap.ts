import type { MetadataRoute } from 'next';
import { allCorePaths, articles, industries, services } from '@/lib/content';
import { absoluteUrl } from '@/lib/site';
import { playbookPillars, playbooks, playbookPath } from '@/lib/playbooks';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...allCorePaths,
    ...services.map(s=>`/services/${s.slug}`),
    ...industries.map(i=>`/industries/${i.slug}`),
    ...articles.map(a=>`/insights/${a.slug}`),
    '/playbooks',
    ...playbookPillars.map(p=>`/playbooks/${p.slug}`),
    ...playbooks.map(playbookPath),
  ];
  return paths.map(path=>({url:absoluteUrl(path),changeFrequency:path==='/insights'?'weekly':'monthly',priority:path==='/'?1:path==='/playbooks'?0.8:path.startsWith('/playbooks/')?0.65:0.7}));
}
