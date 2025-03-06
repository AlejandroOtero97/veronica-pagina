import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-neutral)] font-didot">
      <Navigation />
      <main className="px-8 py-12 sm:px-20 sm:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
