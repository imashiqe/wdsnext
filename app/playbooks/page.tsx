import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, ListChecks } from 'lucide-react';
import { Breadcrumbs, CTA, Eyebrow } from '@/components/Ui';
import { breadcrumbJsonLd, pageMetadata, safeJsonLd } from '@/lib/site';
import { playbookCount, playbookPillars, guidesFor, playbookPath } from '@/lib/playbooks';

export const metadata: Metadata = pageMetadata('Website Development Playbooks & SEO Checklists', `Browse ${playbookCount} practical web development, SEO, accessibility, conversion, and launch checklists organized by topic.`, '/playbooks');

export default function PlaybooksIndex() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Playbooks', path: '/playbooks' }])) }} />
    <section className="page-hero page-hero-gradient"><div className="container"><Breadcrumbs items={[{ name: 'Playbooks', href: '/playbooks' }]} /><div className="page-hero-content"><Eyebrow>WEB DEVELOPMENT / PRACTICAL RESOURCES</Eyebrow><h1>Useful website advice. <em>Organized by the job to do.</em></h1><p>{playbookCount} specific, actionable checklists covering planning, engineering, content, technical SEO, performance and conversion. Start with the challenge you're solving.</p></div></div></section>
    <section className="section"><div className="container"><div className="playbook-index-heading"><h2>Explore by topic</h2><p>Each collection covers a different part of a website's lifecycle. Start with the highest-priority decision for your project.</p></div><div className="playbook-pillar-grid">{playbookPillars.map((pillar) => {const guides = guidesFor(pillar.slug);return <article key={pillar.slug} className="playbook-pillar-card"><div className="playbook-pillar-eyebrow"><BookOpen size={17}/>{guides.length} checklists</div><h3><Link href={`/playbooks/${pillar.slug}`}>{pillar.title}</Link></h3><p>{pillar.summary}</p><div className="playbook-pillar-preview"><span>Start with</span>{guides.slice(0,2).map((guide) => <Link key={guide.slug} href={playbookPath(guide)}>{guide.title}<ArrowUpRight size={14}/></Link>)}</div><Link className="playbook-pillar-cta" href={`/playbooks/${pillar.slug}`}>View topic guides <ArrowUpRight size={16}/></Link></article>})}</div></div></section>
    <section className="section section-soft"><div className="container playbook-note"><ListChecks size={26}/><div><h2>Guides, not guarantees</h2><p>These resources describe implementation and verification steps. They are intended to support planning and expert review—not to suggest that a particular technical change automatically produces rankings or sales.</p></div></div></section>
    <div className="container cta-wrap"><CTA/></div>
  </>;
}
