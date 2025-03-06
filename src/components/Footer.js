export default function Footer() {
  return (
    <footer className="px-8 py-10 sm:px-20 border-t border-[var(--color-primary-light)]/30 text-sm font-didot">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left">
          <div className="font-bold mb-2 text-[var(--color-primary)]">La Comarca <span className="font-light italic">Club de Arte</span></div>
          <p className="opacity-70">Un espacio para crear y conectar con el arte</p>
        </div>
        <div className="flex gap-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors">Facebook</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-secondary)] transition-colors">WhatsApp</a>
        </div>
        <div className="opacity-70">
          © {new Date().getFullYear()} La Comarca Club de Arte
        </div>
      </div>
    </footer>
  );
}
