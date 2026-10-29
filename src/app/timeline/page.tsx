
import Timeline from "@/components/Timeline";

export default function TimelinePage() {
  return (
    <section className="inner-page container">
      <div className="section-title">
        <span className="eyebrow">LINHA DO TEMPO</span>
        <h1>Uma jornada em construção.</h1>
        <p>
          Explore os projetos e as experiências que marcaram cada etapa
          da minha formação.
        </p>
      </div>

      <Timeline />
    </section>
  );
}