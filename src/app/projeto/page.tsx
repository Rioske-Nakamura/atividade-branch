
import ProjectCard from "@/components/ProjectCard";
import { projetos } from "@/data/projetos";

export default function ProjetosPage() {
  return (
    <section className="inner-page container">
      <div className="section-title">
        <span className="eyebrow">PORTFÓLIO</span>
        <h1>Projetos desenvolvidos.</h1>
        <p>
          Trabalhos, experimentos e soluções construídos durante o curso.
        </p>
      </div>

      <div className="project-grid">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}