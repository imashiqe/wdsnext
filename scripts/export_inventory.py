"""Export a human-reviewable inventory of all known public page URLs."""
import csv, json, pathlib, re
ROOT = pathlib.Path(__file__).resolve().parents[1]
D=json.loads((ROOT/'data/playbooks.json').read_text());base='https://webdevelopmentserviceusa.com'
rows=[]
def add(path,kind,title,category,description,review='Needs editorial verification'):
    rows.append({'path':path,'url':base+('' if path=='/' else path),'type':kind,'category':category,'seo_title':title,'meta_description':description,'editorial_status':review})
for path,label in [('/','Web Development Services USA'),('/about','About Web Development Service USA'),('/services','Web Development Services'),('/industries','Industries We Help'),('/insights','Web Development Insights'),('/contact','Contact Web Development Service USA'),('/get-quote','Request a Website Quote')]:add(path,'core',label,'Core','Core conversion or navigation page','Existing page; verify facts and business identity')
content=(ROOT/'lib/content.ts').read_text()
service_section=content.split('export const services: Service[] = [',1)[1].split('export type Industry',1)[0]
for slug,title in re.findall(r"slug:\s*'([^']+)',\s*title:\s*'([^']+)'",service_section):
    add('/services/'+slug,'service',f'{title} Services for USA Businesses','Services',f'Overview of {title.lower()} for business websites.','Existing page; verify services offered')
industry_section=content.split('export const industries',1)[1].split('export type Article',1)[0]
for slug,title in re.findall(r"slug:\s*'([^']+)',\s*title:\s*'([^']+)'",industry_section):
    add('/industries/'+slug,'industry',title,'Industries',f'Industry website design and development for {title.lower()}.','Existing page; verify industry expertise')
article_section=content.split('export const articles: Article[] = [',1)[1]
for slug,title in re.findall(r"slug:\s*'([^']+)',\s*title:\s*'([^']+)'",article_section):
    add('/insights/'+slug,'article',title,'Insights','Original site planning, development or SEO article.','Existing article; verify factual claims')
add('/playbooks','playbooks_index','Website Development Playbooks & SEO Checklists','Playbooks','Browse practical implementation checklists by task.','Technical preview complete; editorial verification required')
for pillar in D['pillars']:
    add('/playbooks/'+pillar['slug'],'topic_hub',pillar['title']+' Guides & Checklists',pillar['title'],pillar['summary'])
for g in D['guides']:
    add('/playbooks/'+g['pillar']+'/'+g['slug'],'playbook',g['title']+': Checklist & Review Guide',next(p['title'] for p in D['pillars'] if p['slug']==g['pillar']),(g['goal']+' Practical steps: '+g['step1']+'; '+g['step2']+'.')[:160])
if len(rows)!=363:raise ValueError(f'Expected 363 pages, found {len(rows)}; check parsing.')
with (ROOT/'SEO-PAGE-INVENTORY.csv').open('w',newline='') as handle:
    writer=csv.DictWriter(handle,fieldnames=list(rows[0]));writer.writeheader();writer.writerows(rows)
print(f'Exported {len(rows)} URLs to SEO-PAGE-INVENTORY.csv')
