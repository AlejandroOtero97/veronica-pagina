import Navigation from './Navigation';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

export default function Layout({ children }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark-content' : ''}`} style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-neutral)' }}>
      <Navigation />
      <main className="px-8 py-12 sm:px-20 sm:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
