import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound(){return <section className="not-found"><div className="container"><span>404 / PAGE NOT FOUND</span><h1>This page has moved—or doesn't exist.</h1><p>Let's get you back to something useful.</p><Link className="button button-blue" href="/"><ArrowLeft size={18}/> Back to homepage</Link></div></section>}
