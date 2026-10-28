
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/contagem", label: "Contagem" },
  { href: "/timeline", label: "Timeline" },
  { href: "/projetos", label: "Projetos" },
  { href: "/semestres", label: "Semestres" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <Link href="/" className="logo">
        SEMESTRE<span>.DEV</span>
      </Link>

      <nav className="nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "nav-link active" : "nav-link"}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}