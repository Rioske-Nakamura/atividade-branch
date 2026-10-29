
export type Projeto = {
  id: string;
  titulo: string;
  descricao: string;
  semestre: string;
  imagem: string;
};

export const projetos: Projeto[] = [
  {
    id: "mundo-ao-toque",
    titulo: "Mundo ao Toque",
    descricao: "Desenvolvimento de materiais lúdicos e táteis para o ensino de Geografia.",
    semestre: "2026.1",
    imagem: "/images/mundo-ao-toque.jpg",
  },
  {
    id: "projeto-exemplo",
    titulo: "Projeto de exemplo",
    descricao: "Descrição de um projeto acadêmico.",
    semestre: "2026.2",
    imagem: "/images/projeto-exemplo.jpg",
  },
];
