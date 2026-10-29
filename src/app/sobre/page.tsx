
import Link from "next/link";

export default function SobrePage() {
  return (
    <section className="inner-page container about-page">
      <div className="about-intro">
        <span className="eyebrow">SOBRE A JORNADA</span>
        <h1>
          Conhecimento se constrói
          <br />
          <span>projeto por projeto.</span>
        </h1>
        <p>
          Este portfólio documenta a evolução acadêmica, organiza os
          trabalhos desenvolvidos e apresenta as tecnologias e soluções
          exploradas ao longo do curso.
        </p>
      </div>

      <div className="about-columns">
        <article className="about-block">
          <span>01 / PROPÓSITO</span>
          <h2>Registrar a evolução</h2>
          <p>
            Manter um histórico dos projetos e das competências desenvolvidas
            em cada etapa da formação.
          </p>
        </article>

        <article className="about-block">
          <span>02 / PRÁTICA</span>
          <h2>Transformar ideias</h2>
          <p>
            Aplicar os conhecimentos adquiridos na criação de soluções
            práticas, acessíveis e úteis.
          </p>
        </article>

        <article className="about-block">
          <span>03 / FUTURO</span>
          <h2>Continuar aprendendo</h2>
          <p>
            Utilizar cada experiência como base para novos desafios e
            projetos mais complexos.
          </p>
        </article>
      </div>

      <div className="closing-banner">
        <h2>Explore os trabalhos desenvolvidos.</h2>
        <p>
          Acesse os projetos e conheça as atividades registradas no portfólio.
        </p>
        <Link href="/projetos" className="button button-primary">
          Ver portfólio ↗
        </Link>
      </div>
    </section>
  );
}