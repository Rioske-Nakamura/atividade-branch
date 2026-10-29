

import Image from "next/image";
import Link from "next/link";
import type { Projeto } from "@/data/projetos";

export default function ProjectCard({ projeto }: { projeto: Projeto }) {
  return (
    <article className="project-card">
      <Link href={`/projetos/${projeto.id}`} className="project-image">
        <Image
          src={projeto.imagem}
          alt={projeto.titulo}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        <span className="image-category">{projeto.categoria}</span>
      </Link>

      <div className="project-content">
        <div className="project-meta">
          <span>{projeto.semestre}</span>
          <span>{projeto.ano}</span>
        </div>

        <h2>{projeto.titulo}</h2>
        <p>{projeto.descricao}</p>

        <div className="tags">
          {projeto.tecnologias.map((tecnologia) => (
            <span key={tecnologia}>{tecnologia}</span>
          ))}
        </div>

        <Link href={`/projetos/${projeto.id}`} className="text-link">
          Ver detalhes ↗
        </Link>
      </div>
    </article>
  );
}