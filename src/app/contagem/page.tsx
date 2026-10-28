
import Countdown from "../../components/Countdown";

export default function ContagemPage() {
  return (
    <section className="inner-page container countdown-page">
      <span className="eyebrow">CONTAGEM REGRESSIVA</span>

      <h1>
        O próximo capítulo
        <br />
        <span>está chegando.</span>
      </h1>

      <p className="page-description">
        Acompanhe o tempo restante até a data prevista para o encerramento
        do semestre.
      </p>

      <Countdown />

      <div className="info-grid">
        {[
          ["01", "Concluir", "Finalizar atividades e entregas pendentes."],
          ["02", "Aprender", "Consolidar os conhecimentos adquiridos."],
          ["03", "Evoluir", "Preparar-se para os próximos desafios."],
        ].map(([numero, titulo, descricao]) => (
          <article className="info-card" key={numero}>
            <span>{numero}</span>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}