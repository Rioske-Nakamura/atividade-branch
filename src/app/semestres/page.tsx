
import Link from "next/link";
import { projetos } from "../../data/projetos";

export default function SemestresPage() {
  const semestres = Array.from(
    new Map(
      projetos.map((projeto) => [
        `${projeto.semestre}-${projeto.ano}`,
        {
          semestre: projeto.semestre,
          ano: projeto.ano,
          projetos: projetos.filter(
            (item) =>
              item.semestre === projeto.semestre &&
              item.ano === projeto.ano
          ),
        },
      ])
    ).values()
  );

  return (
    <section className="inner-page container">
      <div className="section-title">
        <span className="eyebrow">ORGANIZAÇÃO ACADÊMICA</span>
        <h1>Semestres do curso.</h1>
        <p>
          Consulte cada etapa da formação e acesse os trabalhos
          correspondentes ao período.
        </p>
      </div>

      <div className="semester-grid">
        {semestres.map((semestre, index) => (
          <article
            className="semester-card"
            key={`${semestre.semestre}-${semestre.ano}`}
          >
            <span className="semester-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="eyebrow">{semestre.ano}</span>
            <h2>{semestre.semestre}</h2>
            <p>{semestre.projetos.length} projeto(s) registrado(s)</p>

            <div className="semester-projects">
              {semestre.projetos.map((projeto) => (
                <Link
                  href={`/projetos/${projeto.id}`}
                  key={projeto.id}
                  className="semester-project"
                >
                  {projeto.titulo}
                  <span>↗</span>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}