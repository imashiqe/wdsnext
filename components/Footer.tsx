import Link from 'next/link';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import Brand from './Brand';
import { services } from '@/lib/content';
import { chatUrl } from '@/lib/site';

export default function Footer() {
  return <footer className="site-footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-intro"><Brand inverse /><p>Web experiences designed to earn attention, build trust, and help businesses grow across the USA.</p>
          <a href={chatUrl()} className="footer-contact" target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Start a WhatsApp conversation <ArrowUpRight size={16}/></a></div>
        <div className="footer-column"><h3>Services</h3>{services.slice(0,6).map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}</div>
        <div className="footer-column"><h3>Company</h3><Link href="/about">About</Link><Link href="/industries">Industries</Link><Link href="/insights">Insights & guides</Link><Link href="/playbooks">Website playbooks</Link><Link href="/contact">Contact</Link><Link href="/get-quote">Get a quote</Link></div>
        <div className="footer-column"><h3>Work with us</h3><p>Planning a redesign or building from scratch? Tell us what your website needs to accomplish.</p><Link className="footer-strong-link" href="/get-quote">Discuss your project <ArrowUpRight size={16}/></Link><p className="footer-note"><Mail size={16}/> Online inquiries welcome</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Web Development Service USA. All rights reserved.</span><span>Serving businesses across the United States · Remote-first collaboration</span><span>Developed by <a className="footer-credit-link" href="https://www.tantsoft.com/" target="_blank" rel="noopener noreferrer">Tantsoft</a></span></div>
    </div>
  </footer>;
}
