
export type Projeto = {
  id: string;
  titulo: string;
  semestre: string;
  ano: number;
  descricao: string;
  detalhes: string;
  tecnologias: string[];
  imagem: string;
  categoria: string;
};

export const projetos: Projeto[] = [
  {
    id: "logica-programacao",
    titulo: "Fundamentos da Programação",
    semestre: "1º Semestre",
    ano: 2025,
    descricao: "Primeiros passos na lógica de programação e resolução de problemas.",
    detalhes: "Estudo de algoritmos, variáveis, condicionais, repetições e organização de código.",
    tecnologias: ["Python", "Algoritmos", "Lógica"],
    imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    categoria: "Programação",
  },
  {
    id: "desenvolvimento-web",
    titulo: "Desenvolvimento Web",
    semestre: "2º Semestre",
    ano: 2025,
    descricao: "Criação de páginas e interfaces para aplicações web.",
    detalhes: "Estudo de páginas responsivas, estilização e interatividade.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    categoria: "Web",
  },
  {
    id: "banco-de-dados",
    titulo: "Banco de Dados",
    semestre: "3º Semestre",
    ano: 2026,
    descricao: "Modelagem e consulta de informações em bancos relacionais.",
    detalhes: "Modelagem de tabelas, relacionamentos e consultas SQL.",
    tecnologias: ["SQL", "Modelagem", "Banco de Dados"],
    imagem: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=85",
    categoria: "Dados",
  },
  {
    id: "mundo-ao-toque",
    titulo: "Mundo ao Toque",
    semestre: "4º Semestre",
    ano: 2026,
    descricao: "Materiais táteis para o ensino acessível de Geografia.",
    detalhes: "Desenvolvimento de materiais acessíveis para pessoas com deficiência visual, incluindo recursos táteis e impressão 3D.",
    tecnologias: ["Impressão 3D", "Acessibilidade", "Geografia"],
    imagem: "https://images.unsplash.com/photo-1631553127985-7e1d3d4c9f36?auto=format&fit=crop&w=1200&q=85",
    categoria: "Acessibilidade",
  },
];