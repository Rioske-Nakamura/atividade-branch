
import Image from "next/image";
import Link from "next/link";
import { projetos } from "@/data/projetos";

export default function Timeline() {
  return (
    <div className="timeline">
      {projetos.map((projeto, index) => (
        <article
          key={projeto.id}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-marker" />

          <div className="timeline-card">
            <Link href={`/projetos/${projeto.id}`} className="timeline-image">
              <Image
                src={projeto.imagem}
                alt={projeto.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                unoptimized
              />
            </Link>

            <div className="timeline-content">
              <span className="eyebrow">
                {projeto.semestre} · {projeto.ano}
              </span>
              <h2>{projeto.titulo}</h2>
              <p>{projeto.descricao}</p>
              <Link href={`/projetos/${projeto.id}`} className="text-link">
                Explorar projeto ↗
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}