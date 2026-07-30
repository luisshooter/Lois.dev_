export type TechIcon = 'code' | 'polygon' | 'db' | 'server';

export interface TechItem {
  name: string;
  primary?: boolean;
}

export interface StackGroup {
  num: string;
  label: string;
  icon: TechIcon;
  items: string[];
}

/** Flat list used by the floating badge cloud. */
export const stackCloud: TechItem[] = [
  { name: 'PHP', primary: true },
  { name: 'Laravel', primary: true },
  { name: 'Vue 3', primary: true },
  { name: 'Inertia.js' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'PostgreSQL', primary: true },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'Redis' },
  { name: 'Tailwind CSS' },
  { name: 'Docker' },
  { name: 'Git' },
  { name: 'Linux' },
  { name: 'REST APIs' },
  { name: 'Eloquent ORM' },
  { name: 'Livewire' },
  { name: 'Vite' },
];

/** Grouped list used by the fallback / accessible stack listing. */
export const stackGroups: StackGroup[] = [
  {
    num: '01',
    label: 'Linguagens',
    icon: 'code',
    items: ['PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    num: '02',
    label: 'Frameworks',
    icon: 'polygon',
    items: ['Laravel', 'Vue 3', 'Inertia.js', 'Tailwind CSS', 'Livewire'],
  },
  {
    num: '03',
    label: 'Dados',
    icon: 'db',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Eloquent ORM'],
  },
  {
    num: '04',
    label: 'Infra',
    icon: 'server',
    items: ['Git', 'Docker', 'Linux', 'REST APIs', 'Vite'],
  },
];
