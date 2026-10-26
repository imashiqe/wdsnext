'use client';
import { useState } from 'react';
import { CheckCircle2, ClipboardCopy } from 'lucide-react';

export default function PlaybookChecklist({ title, steps, expected }: { title: string; steps: string[]; expected: string }) {
  const [done, setDone] = useState<boolean[]>(steps.map(() => false));
  const [feedback, setFeedback] = useState('');
  const count = done.filter(Boolean).length;
  const toggle = (index: number) => setDone((old) => old.map((value, i) => (i === index ? !value : value)));
  const copy = async () => {
    const value = `${title}\n\nIMPLEMENTATION CHECKLIST\n${steps.map((step, i) => `${done[i] ? '[x]' : '[ ]'} ${step}`).join('\n')}\n\nACCEPTANCE CHECK\n${expected}\n`;
    try {
      await navigator.clipboard.writeText(value);
      setFeedback('Checklist copied.');
    } catch {
      setFeedback('Clipboard access was blocked. You can select and copy the steps above.');
    }
  };
  return <div className="playbook-checklist" aria-label={`${title} implementation checklist`}>
    <div className="playbook-checklist-heading"><div><h3>Use this checklist</h3><p>Tick the decisions as you review them with your team.</p></div><span aria-live="polite" className="playbook-progress">{count} of {steps.length} done</span></div>
    <div className="playbook-progress-track" role="progressbar" aria-valuenow={count} aria-valuemin={0} aria-valuemax={steps.length} aria-label="Checklist progress"><span style={{ width: `${count / steps.length * 100}%` }} /></div>
    {steps.map((step, i) => <label key={step} className={`playbook-check-item ${done[i] ? 'completed' : ''}`}><input type="checkbox" checked={done[i]} onChange={() => toggle(i)} /><span>{step}</span><CheckCircle2 size={18} aria-hidden="true" /></label>)}
    <button className="playbook-copy" type="button" onClick={copy}><ClipboardCopy size={17} /> Copy checklist with progress</button>
    <p aria-live="polite" className="playbook-copy-feedback">{feedback}</p>
  </div>;
}
