'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Brand from './Brand';

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Playbooks', href: '/playbooks' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(link => <Link key={link.href} className={path === link.href || path.startsWith(`${link.href}/`) ? 'active' : ''} href={link.href}>{link.label}</Link>)}
      </nav>
      <Link className="button button-dark header-cta" href="/get-quote">Start a project <ArrowUpRight size={16} /></Link>
      <button type="button" className="mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">
      {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <Link className="button button-blue" href="/get-quote" onClick={() => setOpen(false)}>Get a project quote <ArrowUpRight size={18} /></Link>
    </nav>}
  </header>;
}
