
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projetos } from "@/data/projetos";

export function generateStaticParams() {
  return projetos.map((projeto) => ({ id: projeto.id }));
}

export default async function ProjetoDetalhe({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projeto = projetos.find((item) => item.id === id);

  if (!projeto) notFound();

  return (
    <section className="inner-page container detail-page">
      <Link href="/projetos" className="text-link">
        ← Voltar aos projetos
      </Link>

      <div className="detail-header">
        <span className="eyebrow">
          {projeto.semestre} · {projeto.ano}
        </span>
        <h1>{projeto.titulo}</h1>
        <p>{projeto.descricao}</p>
      </div>

      <div className="detail-image">
        <Image
          src={projeto.imagem}
          alt={projeto.titulo}
          fill
          priority
          sizes="100vw"
          unoptimized
        />
      </div>

      <div className="detail-body">
        <article>
          <span className="eyebrow">SOBRE O PROJETO</span>
          <h2>Objetivos e desenvolvimento</h2>
          <p>{projeto.detalhes}</p>
        </article>

        <aside className="detail-sidebar">
          <h2>Tecnologias e áreas</h2>
          <div className="tags">
            {projeto.tecnologias.map((tecnologia) => (
              <span key={tecnologia}>{tecnologia}</span>
            ))}
          </div>
          <p>
            <strong>Categoria:</strong> {projeto.categoria}
          </p>
          <p>
            <strong>Período:</strong> {projeto.semestre}, {projeto.ano}
          </p>
        </aside>
      </div>
    </section>
  );
}