'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, LoaderCircle, MessageCircle } from 'lucide-react';
import { chatUrl } from '@/lib/site';

const serviceOptions = ['Website development', 'Web design & UX', 'eCommerce website', 'React / Next.js application', 'WordPress', 'SEO and performance', 'Website redesign', 'Maintenance', 'Other'];

export default function QuoteForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const el = e.currentTarget;
    const data = Object.fromEntries(new FormData(el).entries());
    setStatus('sending'); setError('');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'We could not submit the inquiry.');
      setStatus('sent'); el.reset();
    } catch (err) { setError(err instanceof Error ? err.message : 'Unable to submit.'); setStatus('error'); }
  }

  return <div className="form-card"><div className="form-head"><span className="form-kicker">TELL US ABOUT YOUR PROJECT</span><h2>Get a project conversation started.</h2><p>Share the basics. We'll have enough context to discuss a realistic scope and next steps.</p></div>
    {status === 'sent' ? <div className="form-success" role="status"><CheckCircle2 size={36}/><h3>Inquiry submitted.</h3><p>Thank you for sharing your project. Your message has been accepted for delivery.</p><button className="button button-dark" onClick={() => setStatus('idle')}>Send another inquiry</button></div> :
    <form onSubmit={submit} className="quote-form">
      <div className="form-row"><label>Full name <span>*</span><input name="name" type="text" maxLength={100} placeholder="Your name" autoComplete="name" required/></label><label>Work email <span>*</span><input name="email" type="email" maxLength={150} placeholder="you@company.com" autoComplete="email" required/></label></div>
      <div className="form-row"><label>Company / organization<input name="company" maxLength={120} placeholder="Your business (optional)" autoComplete="organization"/></label><label>Service needed <span>*</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{serviceOptions.map(x=><option key={x} value={x}>{x}</option>)}</select></label></div>
      <label>Estimated budget <select name="budget" defaultValue=""><option value="">Not sure yet</option><option value="Under $2,500">Under $2,500</option><option value="$2,500–$5,000">$2,500–$5,000</option><option value="$5,000–$10,000">$5,000–$10,000</option><option value="$10,000+">$10,000+</option></select></label>
      <label>Tell us about the project <span>*</span><textarea name="message" maxLength={4000} minLength={15} required rows={5} placeholder="What do you need built? What should the website achieve? Any launch target or must-have features?"/></label>
      <div className="hidden-field" aria-hidden="true"><label>Leave this field blank<input type="text" name="website" tabIndex={-1} autoComplete="off"/></label></div>
      {status === 'error' && <p role="alert" className="form-error">{error} You can contact us directly through WhatsApp below.</p>}
      <button type="submit" className="button button-blue form-submit" disabled={status === 'sending'}>{status === 'sending' ? <><LoaderCircle size={17} className="spin"/> Sending inquiry…</> : <>Send project inquiry <ArrowUpRight size={18}/></>}</button>
      <p className="form-fine">Submitting this form shares the details you enter for the purpose of responding to your inquiry. Please avoid sending sensitive information.</p>
    </form>}
    <div className="form-alt">Prefer a quick chat? <a href={chatUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={16}/> Message us on WhatsApp <ArrowUpRight size={15}/></a></div>
  </div>;
}
