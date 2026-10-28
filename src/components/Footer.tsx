

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link href="/" className="logo">
          SEMESTRE<span>.DEV</span>
        </Link>
        <p>Uma jornada de aprendizado, projetos e evolução.</p>
      </div>

      <div className="footer-links">
        <Link href="/projetos">Projetos</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/contato">Contato</Link>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Semestre.dev
      </p>
    </footer>
  );
}