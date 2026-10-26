export type FAQ = { q: string; a: string };
export type Service = {
  slug: string; title: string; short: string; category: string; heading: string; intro: string;
  icon: string; benefits: string[]; deliverables: string[]; approach: string[]; faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: 'website-development', title: 'Website Development', category: 'Build', icon: 'code',
    short: 'Fast, accessible websites engineered around business goals.',
    heading: 'Custom website development that works as hard as you do',
    intro: 'Your website should be more than a digital brochure. We build responsive, maintainable business websites with clear messaging, purposeful conversion paths, and an architecture that can support your next stage of growth.',
    benefits: ['Responsive across mobile, tablet, and desktop', 'Reusable components and clean content structure', 'Accessible navigation and conversion-focused pages', 'Technical foundations for search visibility'],
    deliverables: ['Discovery and site architecture', 'High-fidelity UI development', 'Responsive page templates', 'Contact and lead capture integrations', 'Performance and quality checks', 'Launch handover documentation'],
    approach: ['Understand your audience, offer, and conversion goal', 'Map navigation, pages, and reusable components', 'Develop, test, and refine across devices', 'Deploy with analytics and an improvement backlog'],
    faqs: [
      { q: 'What technology will my website use?', a: 'We recommend the stack based on your content workflow, performance needs, integrations, and hosting. React and Next.js are suitable for many custom projects; other platforms may fit some businesses better.' },
      { q: 'Will I be able to update my content?', a: 'Yes. We can integrate an editorial interface or content management system so authorized team members can update agreed content areas.' },
      { q: 'Can you rebuild an existing website?', a: 'Yes. We begin by reviewing the current URLs, content, technical issues, and business goals before deciding what should be retained or redesigned.' },
    ],
  },
  {
    slug: 'web-design', title: 'Web Design & UX', category: 'Design', icon: 'design',
    short: 'Credible, intuitive experiences built for actual customers.',
    heading: 'Web design that makes your value clear in seconds',
    intro: 'We turn your offering into an intuitive digital experience. The goal is to help visitors understand what you do, trust what they see, and take the next step without friction.',
    benefits: ['Clear hierarchy for key messages and calls to action', 'Responsive layouts designed for smaller screens first', 'Consistent visual systems', 'Better clarity for forms, navigation, and service selection'],
    deliverables: ['Audience and competitor review', 'Information architecture', 'Wireframes and page flows', 'Interface design and visual system', 'Responsive design specifications', 'Developer-ready handoff'],
    approach: ['Audit friction in the current experience', 'Prioritize pages and customer journeys', 'Design important states and screen sizes', 'Validate readability, accessibility, and usability'],
    faqs: [
      { q: 'Can you design without developing the site?', a: 'Yes. We can provide design deliverables for an in-house team, or include development in the same project.' },
      { q: 'Will the design match our brand?', a: 'We work from your existing brand guidelines, or help define a practical visual direction when guidelines are incomplete.' },
    ],
  },
  {
    slug: 'ecommerce-development', title: 'eCommerce Development', category: 'Commerce', icon: 'cart',
    short: 'Shopping experiences optimized for discovery and checkout.',
    heading: 'eCommerce websites designed to turn product interest into sales',
    intro: 'A reliable store needs well-organized product data, intuitive discovery, dependable checkout, and operational workflows. We develop storefronts that balance the buying experience with what your team needs behind the scenes.',
    benefits: ['Product and category discovery', 'Mobile-first checkout experience', 'Inventory and order workflow planning', 'Technical SEO for products and collections'],
    deliverables: ['Catalog and taxonomy planning', 'Product and category page templates', 'Cart and checkout setup', 'Payment and shipping integrations', 'Analytics events for important funnel steps', 'Store management training'],
    approach: ['Map product data and fulfillment constraints', 'Design discovery, product, and checkout journeys', 'Connect your chosen platform and providers', 'Test transactions, tracking, and store administration'],
    faqs: [
      { q: 'Do you work with Shopify or custom builds?', a: 'Both approaches may be appropriate. We recommend based on catalog complexity, management needs, budget, and required integrations.' },
      { q: 'Can we migrate from another store?', a: 'We can plan a migration for products, categories, content, redirects, and relevant operational data with validation before launch.' },
    ],
  },
  {
    slug: 'react-nextjs-development', title: 'React & Next.js Development', category: 'Engineering', icon: 'layers',
    short: 'Modern React applications with crawlable, fast-loading pages.',
    heading: 'React and Next.js development for scalable digital products',
    intro: 'We build modern user interfaces with a deliberate rendering strategy: server-rendered content where discoverability matters and interactive client components where functionality requires them.',
    benefits: ['Search-friendly page rendering', 'Modular UI architecture', 'High-performance application routing', 'Flexible connections to APIs and content systems'],
    deliverables: ['Technical discovery and architecture', 'React component library', 'Next.js route and rendering setup', 'API and CMS integrations', 'Testing and production deployment', 'Technical documentation'],
    approach: ['Identify static, dynamic, and interactive requirements', 'Choose rendering and caching per route', 'Build reusable components and integrations', 'Measure performance and verify output HTML'],
    faqs: [
      { q: 'Is React good for SEO?', a: 'React can support SEO, but delivery matters. Next.js can pre-render meaningful HTML, support metadata per route, and expose crawlable links and content.' },
      { q: 'Can you work with an existing backend?', a: 'Yes. We can connect React frontends to compatible APIs and backend systems after reviewing authentication and data contracts.' },
    ],
  },
  {
    slug: 'wordpress-development', title: 'WordPress Development', category: 'CMS', icon: 'globe',
    short: 'Editable content websites with practical publishing workflows.',
    heading: 'Flexible WordPress development with less day-to-day friction',
    intro: 'For businesses that publish regularly or prefer a familiar editing workflow, WordPress can be a useful foundation. We focus on intentional templates, maintainable configuration, and publishing simplicity.',
    benefits: ['Editor-friendly pages and reusable content blocks', 'Mobile-ready templates', 'Plugin and integration review', 'SEO-conscious information architecture'],
    deliverables: ['Content model and page template planning', 'Theme configuration or custom development', 'Forms and approved integrations', 'Editorial roles and workflows', 'Security and backup recommendations', 'Content editing walkthrough'],
    approach: ['Review publishing requirements and existing content', 'Choose an appropriate theme and plugin footprint', 'Configure and build required page types', 'Test editorial workflows and launch readiness'],
    faqs: [
      { q: 'Can I manage the website myself?', a: 'Yes. The project can include training on editing pages, publishing posts, and managing routine content updates.' },
      { q: 'Can you optimize an existing WordPress site?', a: 'Yes. We can audit page performance, unnecessary plugins, crawlability, templates, and content structure before recommending work.' },
    ],
  },
  {
    slug: 'technical-seo', title: 'Technical SEO', category: 'Visibility', icon: 'search',
    short: 'Help search engines discover, understand, and index your content.',
    heading: 'Technical SEO that removes friction between your site and search engines',
    intro: 'Strong SEO starts with pages that users and crawlers can access and understand. We investigate indexation, internal linking, structured data, redirects, performance, and content architecture, then prioritize improvements by impact.',
    benefits: ['Cleaner crawl and indexation signals', 'More consistent metadata and canonical URLs', 'Better structured internal links', 'Evidence-led performance improvements'],
    deliverables: ['Technical SEO audit', 'Indexation and crawl analysis', 'Metadata and canonical review', 'Structured data implementation where eligible', 'Redirect and migration mapping', 'Search Console verification checklist'],
    approach: ['Establish baseline and measure the problem', 'Prioritize high-impact technical fixes', 'Implement and validate in rendered HTML', 'Monitor changes through Search Console and analytics'],
    faqs: [
      { q: 'Do you guarantee first-page Google rankings?', a: 'No ethical provider can guarantee a particular ranking. We focus on measurable technical improvements, relevant content, and long-term search accessibility.' },
      { q: 'Do you create city-specific SEO pages?', a: 'Only where there is genuine, location-specific value and relevant business coverage. We avoid mass-produced doorway pages with nearly identical content.' },
    ],
  },
  {
    slug: 'website-redesign', title: 'Website Redesign', category: 'Revamp', icon: 'refresh',
    short: 'Improve design and usability while protecting valuable pages.',
    heading: 'A website redesign that preserves what is working',
    intro: 'Redesign projects can create opportunity and risk at the same time. We improve messaging, experience, and performance while planning the redirects, content decisions, and technical changes needed for a responsible launch.',
    benefits: ['Clearer positioning and calls to action', 'Modern responsive interface', 'Consideration for existing rankings and backlinks', 'Planned URL and content migration'],
    deliverables: ['Current-site performance and content audit', 'Page and redirect map', 'Information architecture and redesign', 'New responsive implementation', 'Pre-launch crawl and QA', 'Post-launch monitoring plan'],
    approach: ['Catalog existing assets and high-value pages', 'Plan new journeys and preservation decisions', 'Build new templates and redirect rules', 'QA launch and monitor key search signals'],
    faqs: [
      { q: 'Will a redesign hurt my SEO?', a: 'A redesign can affect rankings if content, URLs, links, or technical signals change carelessly. We mitigate risk through an audit, preservation plan, redirects, and monitoring.' },
      { q: 'Can you use our existing content?', a: 'Yes. We classify existing content into keep, improve, combine, and retire rather than replacing everything automatically.' },
    ],
  },
  {
    slug: 'maintenance-support', title: 'Website Maintenance', category: 'Care', icon: 'shield',
    short: 'Keep your website secure, usable, current, and measurable.',
    heading: 'Website maintenance without losing sight of the business',
    intro: 'A website needs consistent attention after launch. We help with updates, content changes, performance review, troubleshooting, and incremental improvements based on site priorities.',
    benefits: ['Routine issue resolution', 'Content and feature updates', 'Ongoing performance checks', 'Clear backlog and support priorities'],
    deliverables: ['Maintenance and support scope', 'Update and backup plan', 'Monitoring and issue triage', 'Scheduled content or component changes', 'Periodic technical health reviews', 'Documentation for completed work'],
    approach: ['Agree on coverage and response expectations', 'Establish change and backup procedures', 'Prioritize requested updates and issues', 'Review health and improvement opportunities'],
    faqs: [
      { q: 'Do you offer support for sites you did not build?', a: 'Often yes, after an initial technical review confirms access, architecture, and maintainability.' },
      { q: 'Do you offer 24/7 monitoring?', a: 'Monitoring and response coverage depend on the agreed support arrangement. We specify this before engagement rather than implying unconditional coverage.' },
    ],
  },
];

export type Industry = { slug: string; title: string; lead: string; challenges: string[]; opportunities: string[] };
export const industries: Industry[] = [
  { slug:'small-business',title:'Small Business Websites', lead:'Give local and growing businesses a credible online home that explains the offer and makes inquiries easy.', challenges:['Visitors cannot quickly understand what the business does','Mobile traffic reaches outdated or confusing pages','Contact actions are difficult to find'], opportunities:['Service-focused landing pages and prominent inquiry paths','Fast, accessible mobile layouts','Clear ownership of content and ongoing updates'] },
  { slug:'professional-services',title:'Professional Services Websites',lead:'Help professional teams communicate expertise and convert qualified visitors into conversations.',challenges:['Complex offerings are buried in generic messaging','Important credibility information is hard to find','Forms collect too little context'],opportunities:['Service and practice-area architecture','Team, process, and thought-leadership pages','Qualification-friendly lead forms']},
  { slug:'ecommerce-retail',title:'eCommerce & Retail Websites',lead:'Connect product discovery, confident buying, and day-to-day store operations.',challenges:['Products are hard to filter and compare','Checkout causes friction on phones','Catalog data and technical SEO are inconsistent'],opportunities:['Product taxonomy and search planning','Mobile-first product and checkout UX','Analytics across the shopping funnel']},
  { slug:'healthcare-practices',title:'Healthcare Practice Websites',lead:'Make public-facing practice information easier to navigate, understand, and act on.',challenges:['Patients struggle to find services and locations','Mobile appointment requests are difficult','Accessibility and privacy need careful consideration'],opportunities:['Accessible service and provider pages','Clear appointment and contact paths','Privacy review for third-party tools and forms']},
  { slug:'real-estate',title:'Real Estate Websites',lead:'Present properties, services, and local expertise through a structured, useful experience.',challenges:['Listing interfaces are difficult to navigate','Lead inquiries lack listing context','Pages load slowly with media-heavy layouts'],opportunities:['Property discovery and inquiry flow design','Image optimization and mobile browsing','Integrations chosen around data availability']},
  { slug:'startups-saas',title:'Startup & SaaS Websites',lead:'Translate product capabilities into an understandable story and a measurable conversion journey.',challenges:['Product positioning is too technical','Visitors cannot identify the right use case','Marketing pages and product UX feel disconnected'],opportunities:['Clear product and use-case pages','Experiment-ready landing pages','Scalable React components and analytics']},
];

export type Article = { slug: string; title: string; description: string; category: string; read: string; date: string; sections: { heading: string; paragraphs: string[]; bullets?: string[] }[] };
export const articles: Article[] = [
  {
    slug:'how-much-does-a-business-website-cost',title:'How Much Does a Business Website Cost? A Practical Scope Guide',category:'Planning',read:'7 min read',date:'2026-10-15',description:'Understand the main cost drivers in business website projects and how to compare proposals without sacrificing essential functionality.',
    sections:[
      {heading:'Start with the outcome, not the page count',paragraphs:['Two five-page websites can involve very different work. A simple informational site with reusable templates is not equivalent to a site with custom design systems, complex forms, membership accounts, or deep software integrations. Compare what each proposal actually includes.','Begin with a practical question: what must a qualified visitor understand or do? That answer should determine the essential templates, content, and conversion paths.']},
      {heading:'The major variables that affect cost',paragraphs:['Pricing depends on design complexity, content readiness, the chosen platform, the number of unique page templates, integrations, migration requirements, and testing. Long-term maintenance can be as important as initial implementation.'],bullets:['Design: template adaptation versus a custom visual system','Content: supplied and approved copy versus strategy and writing','Technology: standard content site versus custom application','Integrations: CRM, payment, scheduling, or inventory systems','Migration: URL redirects, media transfers, and search preservation','Ongoing services: hosting, monitoring, edits, and support']},
      {heading:'How to compare agency proposals',paragraphs:['Ask every vendor to separate discovery, design, development, content, integrations, testing, deployment, and ongoing support. Make sure acceptance criteria are specific and any third-party charges are visible.','A strong proposal describes assumptions, dependencies, ownership of code and assets, revision rounds, estimated milestones, and what is intentionally outside scope.']},
      {heading:'Budget for launch and improvement',paragraphs:['Your website needs real photos or illustrations, reviewed copy, analytics configuration, and someone to maintain it. Set aside time for post-launch iteration based on actual customer behavior rather than trying to guess every future need in phase one.']},
    ]
  },
  {
    slug:'website-redesign-seo-checklist',title:'Website Redesign SEO Checklist: What to Preserve Before Launch',category:'Technical SEO',read:'8 min read',date:'2026-10-10',description:'A practical website redesign checklist for protecting valuable URLs, content, canonical tags, internal links, and search visibility.',
    sections:[
      {heading:'Inventory the site you already have',paragraphs:['Before removing pages or changing navigation, export a list of existing URLs and map them to traffic, backlinks, and conversion importance. Review Search Console, analytics, site crawls, and your CMS rather than relying on memory.','Identify pages that bring qualified traffic, support business questions, or earn external links. They often deserve improvement instead of deletion.']},
      {heading:'Create a URL-by-URL migration map',paragraphs:['Every indexable old URL should have a clear plan: remain unchanged, move to an equivalent new page through a permanent redirect, or intentionally retire with an appropriate response. Avoid redirecting unrelated URLs to the homepage.'],bullets:['Record old URL and corresponding new URL','Preserve valuable headings, copy, and search intent','Use server-side permanent redirects for moved content','Update internal links to the final destination','Keep canonical URLs consistent with the preferred domain']},
      {heading:'Verify the rendered website before deployment',paragraphs:['Ensure search engines receive meaningful HTML, unique titles and descriptions, correct status codes, crawlable navigation, and accessible assets. Check sitemap entries and robots rules against the actual launch URLs.','For JavaScript applications, confirm that core content is present in the initial page response or reliably rendered and that important links are standard anchors.']},
      {heading:'Monitor after the change',paragraphs:['Re-submit the sitemap in Search Console, inspect representative URLs, look for 404 errors, and compare indexation and organic traffic to a prelaunch baseline. Some fluctuations can occur; prioritize specific technical errors rather than reacting to every short-term movement.']},
    ]
  },
  {
    slug:'react-vs-nextjs-seo',title:'React vs. Next.js for SEO: What Business Owners Should Know',category:'Development',read:'6 min read',date:'2026-10-05',description:'Understand the difference between client-rendered React and a Next.js site built with server-rendered or static content.',
    sections:[
      {heading:'React is a UI library; SEO depends on delivery',paragraphs:['React is useful for building interactive interfaces, but a traditional client-only React application can initially deliver very little meaningful HTML. Search engines may render JavaScript, yet rendering can introduce complexity and slow discovery.','The question is not whether React is “good” or “bad” for SEO. It is whether each publicly discoverable page exposes useful content, correct metadata, and navigation that crawlers can follow.']},
      {heading:'What Next.js changes',paragraphs:['Next.js uses React and adds routing, server rendering, pre-rendering, and metadata conventions. A content-rich service page can be generated with its headings and text already in the HTML, while forms and interactive elements remain client-side.'],bullets:['Per-route title, meta description, and canonical URL','Server-rendered or statically generated primary content','Generated XML sitemap and robots file','Reusable templates for relevant service or editorial pages','Optimized images, caching, and route-level performance choices']},
      {heading:'When a standard React SPA still fits',paragraphs:['An authenticated dashboard or internal application may not need public indexing. In those situations, client-side React can be perfectly appropriate. Public marketing sites with many organic landing pages benefit from a more deliberate rendering strategy.']},
      {heading:'Technical SEO is only a foundation',paragraphs:['No framework guarantees rankings. Relevant original information, useful page structure, credible evidence, internal linking, accessibility, and ongoing measurement all matter. Choose technology that supports those activities rather than treating framework selection as a shortcut.']},
    ]
  },
  {
    slug:'ecommerce-website-launch-checklist',title:'eCommerce Website Launch Checklist for Growing Stores',category:'eCommerce',read:'7 min read',date:'2026-09-25',description:'A step-by-step checklist covering product data, checkout testing, shipping, tracking, and search fundamentals before launching an online store.',
    sections:[
      {heading:'Structure your catalog before building templates',paragraphs:['A store becomes difficult to manage when product variants, categories, availability, and descriptions are inconsistent. Define a clean taxonomy and product model before choosing filters, navigation, and search behavior.'],bullets:['Clear category and subcategory definitions','Distinct SKUs and consistent variants','Useful product titles and factual specifications','Image guidelines and informative alternative text','Stock status, shipping policy, and returns information']},
      {heading:'Test real purchase journeys',paragraphs:['Test from discovery through checkout using mobile devices and different combinations of items, discounts, and shipping addresses. Confirm taxes, shipping methods, payment outcomes, confirmation emails, and the admin order view.','If your store needs a third-party courier or inventory tool, validate failure and retry behavior—not just the happy path.']},
      {heading:'Make product pages searchable and helpful',paragraphs:['Use descriptive URLs, useful category copy, unique product information, internal links, and eligible product structured data that matches what customers see. Ensure out-of-stock behavior is deliberate.']},
      {heading:'Measure and improve after launch',paragraphs:['Track product views, add-to-cart actions, checkout progression, and completed purchases with proper consent where required. Review drop-off by device and fix usability problems before expanding advertising spend.']},
    ]
  },
  {
    slug:'core-web-vitals-for-service-websites',title:'Core Web Vitals for Service Websites: A Plain-English Guide',category:'Performance',read:'6 min read',date:'2026-09-15',description:'Learn how LCP, INP, and CLS affect perceived website quality and what to prioritize when performance is poor.',
    sections:[
      {heading:'Performance is part of the user experience',paragraphs:['A fast website helps people begin reading and interacting sooner. Poor performance can make service information feel frustrating even when the design looks polished in screenshots.','Google Core Web Vitals measure real user experiences for loading, responsiveness, and visual stability. Treat them as diagnostic signals, not as a promise of higher rankings.']},
      {heading:'Understand the three signals',paragraphs:['Largest Contentful Paint (LCP) focuses on when the main content becomes visible. Interaction to Next Paint (INP) reflects responsiveness. Cumulative Layout Shift (CLS) captures unexpected movement. Field data is especially useful because it represents visitors on real devices and connections.'],bullets:['LCP: optimize the hero image, server response, and critical resources','INP: reduce unnecessary JavaScript and heavy event work','CLS: reserve space for images, embeds, and dynamic UI']},
      {heading:'Common improvements worth evaluating',paragraphs:['Use appropriately sized images, cache stable content, limit third-party scripts, avoid loading unnecessary components, and keep your initial page markup useful. Always measure before and after because a technique that helps one page may not help another.']},
      {heading:'Establish a sustainable review cadence',paragraphs:['Monitor important templates, not just the homepage. Compare your results by page type and device; prioritize user journeys that directly affect discovery, inquiries, and checkout.']},
    ]
  },
];

export const allCorePaths = ['/', '/about', '/services', '/industries', '/insights', '/contact', '/get-quote'];
