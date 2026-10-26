import Link from 'next/link';

export default function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`brand ${inverse ? 'brand-inverse' : ''}`} aria-label="Web Development Service USA home">
    <span className="brand-mark" aria-hidden="true"><span>W</span><span className="brand-mark-dot" /></span>
    <span className="brand-wordmark"><strong>webdev<span>USA</span></strong><small>DEVELOPMENT · DESIGN · GROWTH</small></span>
  </Link>;
}
