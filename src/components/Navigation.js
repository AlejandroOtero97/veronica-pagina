import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../context/ThemeContext";

export default function Navigation() {
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <header className="px-8 py-6 sm:px-20 sm:py-8 flex justify-between items-center border-b border-[var(--color-primary)]/30" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="flex items-center">
          <div className="text-2xl font-bold font-didot">
            <span className="text-[var(--color-primary)]">La Comarca</span>
            <span className="font-light italic ml-2 text-[var(--color-primary-dark)]">Club de Arte</span>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-8 font-didot font-medium items-center">
          <Link href="/" className={isActive("/") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Inicio
          </Link>
          <Link href="/cursos" className={isActive("/cursos") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Cursos
          </Link>
          <Link href="/clases" className={isActive("/clases") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Clases
          </Link>
          <Link href="/galeria" className={isActive("/galeria") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Galería
          </Link>
          <Link href="/contacto" className={isActive("/contacto") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Contacto
          </Link>
          {/* Botón para cambiar entre temas */}
          <button 
            onClick={toggleTheme} 
            aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"} 
            className="ml-4 p-2 rounded-full border border-[var(--color-primary)] bg-[var(--color-background)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]/10 transition-all shadow-sm"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ color: "var(--color-neutral-dark)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </nav>
        {/* Mobile action buttons: hamburguesa + dark mode toggle juntos */}
        <div className="sm:hidden flex items-center gap-2">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md border border-[var(--color-primary)] bg-[var(--color-background)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]/10 transition-all shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              // Icono de X para cerrar
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono hamburguesa
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <button 
            onClick={toggleTheme} 
            aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"} 
            className="p-2 rounded-full border border-[var(--color-primary)] bg-[var(--color-background)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]/10 transition-all shadow-sm"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ color: "var(--color-neutral-dark)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden bg-[var(--color-background)] px-8 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Inicio
          </Link>
          <Link href="/cursos" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/cursos") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Cursos
          </Link>
          <Link href="/clases" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/clases") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Clases
          </Link>
          <Link href="/galeria" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/galeria") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Galería
          </Link>
          <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/contacto") ? "text-[var(--color-secondary)] font-bold" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"}>
            Contacto
          </Link>
        </nav>
      )}
    </>
  );
}
