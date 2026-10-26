import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, AlertCircle, BadgeCheck, ChevronRight, ListChecks } from 'lucide-react';
import { Breadcrumbs, CTA, Eyebrow } from '@/components/Ui';
import PlaybookChecklist from '@/components/PlaybookChecklist';
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, safeJsonLd, SITE } from '@/lib/site';
import { playbooks, getPillar, getPlaybook, playbookPath, relatedPlaybooks } from '@/lib/playbooks';
import { services } from '@/lib/content';

type Props = { params: Promise<{ pillar: string; slug: string }> };
export function generateStaticParams() { return playbooks.map(({pillar,slug})=>({pillar,slug})); }
export const dynamicParams = false;
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {pillar,slug}=await params;const p=getPlaybook(pillar,slug);if(!p)return{};
  const description = `${p.goal} Practical steps: ${p.step1}; ${p.step2}.`;
  return pageMetadata(`${p.title}: Checklist & Review Guide`,description.slice(0,160), playbookPath(p));
}
export default async function PlaybookDetail({params}:Props) {
  const {pillar,slug} = await params;
  const guide=getPlaybook(pillar,slug), topic=getPillar(pillar);
  if(!guide || !topic) notFound();
  const path=playbookPath(guide), service=services.find(s=>s.slug===topic.service);
  const steps=[guide.step1,guide.step2,guide.step3];
  const breadcrumb = [{name:'Home',path:'/'},{name:'Playbooks',path:'/playbooks'},{name:topic.title,path:`/playbooks/${pillar}`},{name:guide.title,path}];
  const schema=[breadcrumbJsonLd(breadcrumb),{ '@context':'https://schema.org','@type':'WebPage',name:`${guide.title}: Checklist & Review Guide`,description:guide.goal,url:absoluteUrl(path),isPartOf:{'@id':`${SITE.url}/#website`},about:{'@type':'Thing',name:guide.title},publisher:{'@id':`${SITE.url}/#organization`}}];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:safeJsonLd(schema)}} />
    <section className="page-hero page-hero-gradient playbook-detail-hero"><div className="container"><Breadcrumbs items={[{name:'Playbooks',href:'/playbooks'},{name:topic.title,href:`/playbooks/${pillar}`},{name:guide.title,href:path}]} /><div className="page-hero-content"><Eyebrow>{topic.title.toUpperCase()} / IMPLEMENTATION GUIDE</Eyebrow><h1>{guide.title}<span className="blue-dot">.</span></h1><p>{guide.goal}</p><div className="playbook-hero-tags"><span><ListChecks size={17}/> 3 priority actions</span><span><BadgeCheck size={17}/> Acceptance check included</span></div></div></div></section>
    <section className="section"><div className="container playbook-detail-grid"><article className="playbook-article"><div className="playbook-introduction"><Eyebrow>THE OBJECTIVE</Eyebrow><h2>What this work should accomplish</h2><p>{guide.goal}</p><p>Use the steps below during planning, implementation or review. Record the current condition, assign responsibility for any changes, and verify the result before treating the work as complete.</p></div>
      <div className="playbook-steps"><Eyebrow>ACTION PLAN</Eyebrow><h2>Three priority checks</h2>{steps.map((step,index)=><div className="playbook-step" key={step}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{step}</h3><p>{['Start by collecting the relevant facts and confirming the scope with the people responsible for this work. Capture the starting state so proposed changes are auditable.', 'Turn the decision into a clear implementation requirement, including important exceptions and dependencies. Record which person or system owns the result.', 'Validate the outcome in a realistic user journey, not only a static preview. Document findings and any follow-up items that remain open.'][index]}</p></div></div>)}</div>
      <div className="playbook-evaluation"><div className="playbook-caution"><AlertCircle size={24}/><div><h3>Common mistake to avoid</h3><p>{guide.pitfall}</p></div></div><div className="playbook-success"><BadgeCheck size={24}/><div><h3>How to confirm the work is complete</h3><p>{guide.verification}</p></div></div></div>
      <div className="playbook-context"><Eyebrow>WHEN THIS MATTERS</Eyebrow><h2>Where this fits into your website project</h2><p>{topic.summary} This particular checklist is most useful when your team needs to turn an open question into an agreed decision and a result that can be reviewed.</p><p>Keep the checks proportionate to the size of your project. For critical pages and customer-facing systems, test the actual published behavior as well as the implementation plan.</p></div>
    </article><aside className="playbook-aside"><PlaybookChecklist title={guide.title} steps={steps} expected={guide.verification}/><div className="playbook-aside-service"><Eyebrow>NEED IMPLEMENTATION HELP?</Eyebrow><h3>{service?.title ?? 'Website Development'}</h3><p>{service?.short ?? 'Plan and build a website around your business needs.'}</p><Link href={service?`/services/${service.slug}`:'/services'}>Related service <ArrowUpRight size={16}/></Link><Link href={`/get-quote?service=${encodeURIComponent(service?.title ?? 'Website Development')}`} className="button button-blue">Request a quote <ArrowUpRight size={16}/></Link></div></aside></div></section>
    <section className="section section-soft"><div className="container"><div className="playbook-index-heading"><Eyebrow>KEEP LEARNING</Eyebrow><h2>Continue with a related task</h2><p>These guides belong to the {topic.title.toLowerCase()} collection.</p></div><div className="playbook-related-grid">{relatedPlaybooks(guide).map((next)=><Link key={next.slug} href={playbookPath(next)} className="playbook-related-card"><span>CHECKLIST</span><h3>{next.title}</h3><p>{next.goal}</p><span className="playbook-related-action">Read guide <ChevronRight size={17}/></span></Link>)}</div><Link className="playbook-all-link" href={`/playbooks/${pillar}`}>All {topic.title} guides <ArrowUpRight size={16}/></Link></div></section>
    <div className="container cta-wrap"><CTA/></div>
  </>;
}
