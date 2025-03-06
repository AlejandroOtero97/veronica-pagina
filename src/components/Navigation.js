import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  
  // Helper function to determine if a link is active
  const isActive = (path) => router.pathname === path;
  
  return (
    <header className="px-8 py-6 sm:px-20 sm:py-8 flex justify-between items-center border-b border-[var(--color-primary-light)]/30">
      <div className="text-2xl font-bold font-didot">
        <span className="text-[var(--color-primary)]">La Comarca</span>
        <span className="font-light italic ml-2">Club de Arte</span>
      </div>
      <nav className="hidden sm:flex gap-8 font-didot">
        <Link href="/" className={isActive("/") ? "text-[var(--color-secondary)]" : "hover:text-[var(--color-primary)] transition-colors"}>
          Inicio
        </Link>
        <Link href="/cursos" className={isActive("/cursos") ? "text-[var(--color-secondary)]" : "hover:text-[var(--color-primary)] transition-colors"}>
          Cursos
        </Link>
        <Link href="/clases" className={isActive("/clases") ? "text-[var(--color-secondary)]" : "hover:text-[var(--color-primary)] transition-colors"}>
          Clases
        </Link>
        <Link href="/galeria" className={isActive("/galeria") ? "text-[var(--color-secondary)]" : "hover:text-[var(--color-primary)] transition-colors"}>
          Galería
        </Link>
        <Link href="/contacto" className={isActive("/contacto") ? "text-[var(--color-secondary)]" : "hover:text-[var(--color-primary)] transition-colors"}>
          Contacto
        </Link>
      </nav>
    </header>
  );
}
