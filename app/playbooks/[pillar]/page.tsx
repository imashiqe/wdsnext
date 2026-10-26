import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ListChecks } from 'lucide-react';
import { Breadcrumbs, CTA, Eyebrow } from '@/components/Ui';
import { breadcrumbJsonLd, pageMetadata, safeJsonLd } from '@/lib/site';
import { playbookPillars, guidesFor, getPillar, playbookPath } from '@/lib/playbooks';
import { services } from '@/lib/content';

type Props = { params: Promise<{ pillar: string }> };
export function generateStaticParams() { return playbookPillars.map((item) => ({ pillar: item.slug })); }
export const dynamicParams = false;
export async function generateMetadata({params}:Props):Promise<Metadata>{const {pillar}=await params;const p=getPillar(pillar);if(!p)return{};return pageMetadata(`${p.title} Guides & Checklists`,`${p.summary} Explore ${guidesFor(pillar).length} focused practical guides.`, `/playbooks/${pillar}`);}
export default async function TopicPage({params}:Props) {
  const { pillar } = await params; const topic = getPillar(pillar); if (!topic) notFound();
  const guides = guidesFor(topic.slug); const path = `/playbooks/${pillar}`;
  const service = services.find((s) => s.slug === topic.service);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:safeJsonLd(breadcrumbJsonLd([{name:'Home',path:'/'},{name:'Playbooks',path:'/playbooks'},{name:topic.title,path}]))}} />
    <section className="page-hero page-hero-gradient"><div className="container"><Breadcrumbs items={[{name:'Playbooks',href:'/playbooks'},{name:topic.title,href:path}]} /><div className="page-hero-content"><Eyebrow>TOPIC COLLECTION / {guides.length} GUIDES</Eyebrow><h1>{topic.title}<span className="blue-dot">.</span></h1><p>{topic.summary}</p><Link href="/get-quote" className="button button-blue button-large">Discuss a project <ArrowUpRight size={18}/></Link></div></div></section>
    <section className="section"><div className="container"><div className="playbook-index-heading"><h2>Choose the next task</h2><p>Each guide contains three implementation checks, a mistake worth avoiding, and a practical acceptance test.</p></div><div className="playbook-guide-grid">{guides.map((guide,index)=><article className="playbook-guide-card" key={guide.slug}><span className="playbook-guide-number"><ListChecks size={16}/>{String(index+1).padStart(2,'0')}</span><h3><Link href={playbookPath(guide)}>{guide.title}</Link></h3><p>{guide.goal}</p><Link className="playbook-guide-link" href={playbookPath(guide)}>Read checklist <ArrowUpRight size={17}/></Link></article>)}</div></div></section>
    {service && <section className="section section-soft"><div className="container playbook-related-service"><div><Eyebrow>RELATED SERVICE</Eyebrow><h2>{service.title}</h2><p>{service.short}</p></div><Link href={`/services/${service.slug}`} className="button button-dark">Explore service <ArrowUpRight size={17}/></Link></div></section>}
    <div className="container cta-wrap"><CTA/></div>
  </>;
}
