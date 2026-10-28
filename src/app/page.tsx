
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-glow" />

      <div className="hero-content">
        <span className="eyebrow">PORTFÓLIO ACADÊMICO</span>

        <h1>
          Cada semestre.
          <br />
          <span>Uma nova conquista.</span>
        </h1>

        <p>
          Uma coleção de projetos, aprendizados e experiências construídos
          ao longo da minha jornada acadêmica.
        </p>

        <div className="hero-actions">
          <Link href="/projetos" className="button button-primary">
            Explorar projetos ↗
          </Link>
          <Link href="/timeline" className="button button-secondary">
            Ver timeline
          </Link>
        </div>
      </div>
    </section>
  );
}