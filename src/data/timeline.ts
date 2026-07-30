export interface TimelineEntry {
  when: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export const timeline: TimelineEntry[] = [
  {
    when: 'Mar 2026 — atual',
    role: 'Desenvolvedor Full-stack',
    company: '@ e-dialoga',
    description:
      'Onde tudo virou prática. Atuo diariamente com PHP/Laravel + Vue.js/Inertia.js, modelando PostgreSQL e implementando regras de negócio complexas em sistemas empresariais. Cada fluxo é projetado para que o usuário final não precise de chamado.',
    tags: ['PHP', 'Laravel', 'Vue.js', 'Inertia.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    when: 'Ago 2024 — Fev 2026',
    role: 'Analista de Suporte',
    company: '@ Xpert (IMEX)',
    description:
      'Imersão profunda em SQL Server resolvendo demandas críticas de sistemas ERP. Ler um banco de dados é ler a intenção do sistema — essa habilidade de transformar problema confuso em causa raiz clara é aplicada hoje na hora de arquitetar sistemas.',
    tags: ['SQL Server', 'Debugging', 'Suporte N2/N3'],
  },
  {
    when: 'Mai 2023 — Set 2024',
    role: 'Analista de Suporte de Sistemas',
    company: '@ Bitz Softwares',
    description:
      'Efetivado e promovido pela qualidade do trabalho. Foi aqui que consolidei a visão mais valiosa que carrego: código bom é código que evita chamado.',
    tags: ['Atendimento', 'Análise de sistemas', 'Promovido'],
  },
  {
    when: 'Jul 2022 — Mar 2023',
    role: 'Técnico de Implantação',
    company: '@ Grupo Limber Software',
    description:
      'Primeiro contato sério com a área técnica. Implantar ERPs diretamente no cliente mostrou o ciclo completo: do código escrito ao usuário usando, com todo o atrito no meio. O combustível da transição para desenvolvimento.',
    tags: ['Implantação ERP', 'Lógica de programação', 'Treinamento'],
  },
];
