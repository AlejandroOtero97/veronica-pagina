import Link from "next/link";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Custom404() {
  return (
    <div className={`${geistSans.variable} min-h-screen flex items-center justify-center bg-[#f8f5f2] dark:bg-[#1a1814] text-[#2c2416] dark:text-[#f0ebe3] font-[family-name:var(--font-geist-sans)]`}>
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
        <p className="mb-8 opacity-80 max-w-md mx-auto">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <Link 
          href="/" 
          className="rounded-full bg-[#845e3f] hover:bg-[#6e4e35] dark:bg-[#d3b88c] dark:hover:bg-[#c0a678] text-white dark:text-[#2c2416] px-8 py-3 transition-colors inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
