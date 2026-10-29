
"use client";

import { useEffect, useState } from "react";

const dataFinal = new Date("2026-12-18T23:59:59-04:00");

function calcularTempo() {
  const restante = Math.max(0, dataFinal.getTime() - Date.now());

  return {
    dias: Math.floor(restante / 86400000),
    horas: Math.floor((restante / 3600000) % 24),
    minutos: Math.floor((restante / 60000) % 60),
    segundos: Math.floor((restante / 1000) % 60),
    finalizado: restante === 0,
  };
}

export default function Countdown() {
  const [tempo, setTempo] = useState(calcularTempo);

  useEffect(() => {
    const intervalo = setInterval(() => setTempo(calcularTempo()), 1000);
    return () => clearInterval(intervalo);
  }, []);

  const unidades = [
    { nome: "Dias", valor: tempo.dias },
    { nome: "Horas", valor: tempo.horas },
    { nome: "Minutos", valor: tempo.minutos },
    { nome: "Segundos", valor: tempo.segundos },
  ];

  return (
    <div className="countdown">
      {tempo.finalizado ? (
        <div className="countdown-finished">
          <h2>Semestre encerrado!</h2>
          <p>Uma etapa concluída. Hora de preparar a próxima.</p>
        </div>
      ) : (
        <div className="countdown-grid">
          {unidades.map((unidade) => (
            <div className="countdown-unit" key={unidade.nome}>
              <strong>{String(unidade.valor).padStart(2, "0")}</strong>
              <span>{unidade.nome}</span>
            </div>
          ))}
        </div>
      )}

      <p className="countdown-date">
        Data prevista: 18 de dezembro de 2026
      </p>
    </div>
  );
}