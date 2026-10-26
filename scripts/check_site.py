"""Zero-dependency SEO content integrity check. Run before every deploy."""
import json, pathlib, re, sys
ROOT=pathlib.Path(__file__).resolve().parents[1]
data=json.loads((ROOT/'data/playbooks.json').read_text())
guides=data['guides'];pillars=data['pillars']; paths=[];issues=[]
for p in pillars:
    if p['service'] not in {'website-development','web-design','ecommerce-development','react-nextjs-development','wordpress-development','technical-seo','website-redesign','maintenance-support'}:
        issues.append(f"Bad service link for {p['slug']}")
    matches=[g for g in guides if g['pillar']==p['slug']]
    if len(matches)!=20:issues.append(f"Unexpected guide count for {p['slug']}: {len(matches)}")
for g in guides:
    path=f"/playbooks/{g['pillar']}/{g['slug']}";paths.append(path)
    if len(set(g.values()))!=len(g.values()):issues.append(f"Repeating fields in {path}")
    if len(g['goal'])<30:issues.append(f"Short goal: {path}")
    for k in ('title','goal','step1','step2','step3','pitfall','verification'):
        if not g[k] or len(g[k].strip())<18 and k != 'title':issues.append(f"Missing or short {k}: {path}")
    if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',g['slug']):issues.append(f"Malformed slug: {path}")
if len(paths)!=len(set(paths)):issues.append('Duplicate page paths')
if len(guides)<300:issues.append('Fewer than 300 pages')
if len({g['title'].casefold() for g in guides})!=len(guides):issues.append('Duplicate guide titles')
if len({g['goal'].casefold() for g in guides})!=len(guides):issues.append('Duplicate guide goals')
for path in ('app/playbooks/page.tsx','app/playbooks/[pillar]/page.tsx','app/playbooks/[pillar]/[slug]/page.tsx','components/PlaybookChecklist.tsx'):
    if not (ROOT/path).exists(): issues.append(f'Missing source route: {path}')
sitemap=(ROOT/'app/sitemap.ts').read_text()
if '...playbooks.map(playbookPath)' not in sitemap:issues.append('Missing sitemap playbook routes')
footer=(ROOT/'components/Footer.tsx').read_text()
if 'https://www.tantsoft.com/' not in footer: issues.append('Missing requested Tantsoft footer attribution')
if issues:
    for issue in issues:print('ERROR:',issue)
    sys.exit(1)
core=7;service=8;industry=6;article=5;collections=1+len(pillars); total=core+service+industry+article+collections+len(guides)
print(f'PASS: {len(guides)} unique guides, {len(pillars)} category hubs, {total} indexable HTML pages in sitemap design')
print('PASS: all guide paths unique, all categories and page fields present, footer attribution retained')
