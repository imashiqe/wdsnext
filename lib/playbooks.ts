import editorialData from '@/data/playbooks.json';

export type PlaybookPillar = { slug: string; title: string; summary: string; service: string };
export type Playbook = {
  slug: string; pillar: string; title: string; goal: string;
  step1: string; step2: string; step3: string; pitfall: string; verification: string;
};

export const playbookPillars = editorialData.pillars as PlaybookPillar[];
export const playbooks = editorialData.guides as Playbook[];
export const playbookCount = playbooks.length;

// Materialized maps avoid filtering 320 entries on every statically generated page.
const pillarMap = new Map(playbookPillars.map((pillar) => [pillar.slug, pillar]));
const guideMap = new Map(playbooks.map((guide) => [playbookPath(guide), guide]));

export function playbookPath(guide: Playbook) {
  return `/playbooks/${guide.pillar}/${guide.slug}`;
}

export function getPillar(slug: string) { return pillarMap.get(slug); }
export function getPlaybook(pillar: string, slug: string) { return guideMap.get(`/playbooks/${pillar}/${slug}`); }
export function guidesFor(pillar: string) { return playbooks.filter((guide) => guide.pillar === pillar); }
export function relatedPlaybooks(guide: Playbook, limit = 4) {
  const siblings = guidesFor(guide.pillar).filter((other) => other.slug !== guide.slug);
  const i = guidesFor(guide.pillar).findIndex((item) => item.slug === guide.slug);
  const ordered = siblings.slice(Math.max(0, i - 2)).concat(siblings.slice(0, Math.max(0, i - 2)));
  return ordered.slice(0, limit);
}
