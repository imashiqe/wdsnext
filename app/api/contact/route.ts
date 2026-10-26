import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 16_384;

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get('content-length') || '0');
    if (contentLength > MAX_BODY_BYTES) return NextResponse.json({ error: 'The inquiry is too large.' }, { status: 413 });
    const raw = await request.text();
    if (Buffer.byteLength(raw,'utf8') > MAX_BODY_BYTES) return NextResponse.json({ error: 'The inquiry is too large.' }, { status: 413 });
    let data: Record<string,unknown>;
    try { data = JSON.parse(raw); } catch { return NextResponse.json({ error:'Invalid form submission.' }, { status:400 }); }
    const value=(key:string)=> typeof data?.[key]==='string' ? (data[key] as string).trim() : '';
    if (value('website')) return NextResponse.json({ok:true}); // Honeypot: appear successful to bots.
    const name=value('name'),email=value('email'),company=value('company'),service=value('service'),budget=value('budget'),message=value('message');
    if (!name || name.length>100 || !EMAIL_RE.test(email) || email.length>150 || !service || service.length>100 || message.length<15 || message.length>4000 || company.length>120 || budget.length>50) {
      return NextResponse.json({error:'Please check the required fields and try again.'},{status:400});
    }
    const key=process.env.RESEND_API_KEY,from=process.env.CONTACT_FROM_EMAIL,to=process.env.CONTACT_TO_EMAIL;
    if (!key || !from || !to) return NextResponse.json({error:'The email form is not configured yet.'},{status:503});
    const escape=(v:string)=>v.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] || c));
    const html=`<h2>New Website Project Inquiry</h2><p><strong>Name:</strong> ${escape(name)}</p><p><strong>Email:</strong> ${escape(email)}</p><p><strong>Company:</strong> ${escape(company||'Not provided')}</p><p><strong>Service:</strong> ${escape(service)}</p><p><strong>Budget:</strong> ${escape(budget||'Not provided')}</p><p><strong>Project:</strong></p><p>${escape(message).replace(/\n/g,'<br/>')}</p>`;
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{'Authorization':`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:email,subject:`New project inquiry: ${service}`,html})});
    if (!response.ok) { console.error('Resend delivery error',response.status);return NextResponse.json({error:'Email delivery is temporarily unavailable.'},{status:502});}
    return NextResponse.json({ok:true});
  } catch {return NextResponse.json({error:'Unable to submit the form right now.'},{status:500});}
}
