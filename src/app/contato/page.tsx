
"use client";

import { useState } from "react";

export default function ContatoPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarMensagem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const corpo = [
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Assunto: ${assunto}`,
      "",
      mensagem,
    ].join("\n");

    window.location.href = `mailto:?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;
  }

  return (
    <section className="inner-page container contact-page">
      <div className="contact-intro">
        <span className="eyebrow">CONTATO</span>
        <h1>
          Vamos conversar
          <br />
          <span>sobre ideias?</span>
        </h1>
        <p>
          Utilize o formulário para preparar uma mensagem sobre projetos,
          trabalhos acadêmicos ou oportunidades de colaboração.
        </p>
      </div>

      <form className="contact-form" onSubmit={enviarMensagem}>
        <label>
          Nome
          <input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Seu nome"
            required
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="voce@exemplo.com"
            required
          />
        </label>

        <label>
          Assunto
          <input
            value={assunto}
            onChange={(event) => setAssunto(event.target.value)}
            placeholder="Sobre o que deseja conversar?"
            required
          />
        </label>

        <label>
          Mensagem
          <textarea
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
            placeholder="Escreva sua mensagem..."
            rows={6}
            required
          />
        </label>

        <button className="button button-primary" type="submit">
          Preparar mensagem ↗
        </button>
      </form>
    </section>
  );
}