import Head from "next/head";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courses = [
  {
    id: 1,
    title: "Técnicas de Pintura al Óleo",
    description: "Domina las técnicas clásicas y modernas de la pintura al óleo. Este curso está diseñado para artistas de todos los niveles que desean perfeccionar su técnica.",
    price: "$120.000",
    duration: "8 semanas",
    videoId: "7YOsVaUDrY0",
    level: "Intermedio",
    instructor: "Carmen Fuentes"
  },
  {
    id: 2,
    title: "Acuarela para Principiantes",
    description: "Aprende los fundamentos de la acuarela desde cero. Exploraremos técnicas básicas, mezcla de colores y composición para crear hermosas obras.",
    price: "$90.000",
    duration: "6 semanas",
    videoId: "3kojEoKgrTY",
    level: "Principiante",
    instructor: "Rodrigo Méndez"
  },
  {
    id: 3,
    title: "Dibujo Anatómico Avanzado",
    description: "Un curso intensivo sobre anatomía humana para artistas. Enfocado en proporciones, estructura muscular y expresividad en el dibujo de figura.",
    price: "$140.000",
    duration: "10 semanas",
    videoId: "pMAhE5iR9OA",
    level: "Avanzado",
    instructor: "Laura Vázquez"
  },
];

export default function Cursos() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#f8f5f2] dark:bg-[#1a1814] text-[#2c2416] dark:text-[#f0ebe3] font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Cursos | La Comarca Club de Arte</title>
        <meta name="description" content="Explora nuestra selección de cursos de arte" />
      </Head>

      <header className="px-8 py-6 sm:px-20 sm:py-8 flex justify-between items-center border-b border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30">
        <div className="text-2xl font-bold">
          <span className="text-[#845e3f] dark:text-[#d3b88c]">La Comarca</span>
          <span className="font-light italic ml-2">Club de Arte</span>
        </div>
        <nav className="hidden sm:flex gap-8">
          <Link href="/" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Inicio</Link>
          <Link href="/cursos" className="text-[#845e3f] dark:text-[#d3b88c] transition-colors">Cursos</Link>
          <Link href="/clases" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Clases</Link>
          <Link href="/galeria" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Galería</Link>
          <Link href="/contacto" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Contacto</Link>
        </nav>
      </header>

      <main className="px-8 py-12 sm:px-20 sm:py-16">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nuestros Cursos</h1>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Explora nuestros cursos de arte diseñados para inspirar y desarrollar tu creatividad. 
              Cada curso incluye material didáctico, tutorías personalizadas y certificación.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="border border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video w-full bg-black">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${course.videoId}`} 
                    title={course.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#845e3f]/10 dark:bg-[#d3b88c]/10 text-[#845e3f] dark:text-[#d3b88c] text-sm rounded-full">
                      {course.level}
                    </span>
                    <span className="text-sm opacity-70">Duración: {course.duration}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                  <p className="opacity-80 mb-4">{course.description}</p>
                  
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-full bg-[#845e3f]/20 dark:bg-[#d3b88c]/20 flex items-center justify-center text-[#845e3f] dark:text-[#d3b88c] font-medium mr-3">
                      {course.instructor.split(' ')[0][0]}{course.instructor.split(' ')[1][0]}
                    </div>
                    <span>Instructor: {course.instructor}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold text-[#845e3f] dark:text-[#d3b88c]">
                      {course.price}
                    </span>
                    <button 
                      className="rounded-full bg-[#845e3f] hover:bg-[#6e4e35] dark:bg-[#d3b88c] dark:hover:bg-[#c0a678] text-white dark:text-[#2c2416] px-6 py-2 transition-colors"
                    >
                      Inscribirme
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-[#845e3f]/5 dark:bg-[#d3b88c]/5 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
            <p className="mb-6">Contamos con más cursos disponibles y también ofrecemos programas personalizados.</p>
            <Link 
              href="/contacto" 
              className="inline-block rounded-full bg-[#845e3f] hover:bg-[#6e4e35] dark:bg-[#d3b88c] dark:hover:bg-[#c0a678] text-white dark:text-[#2c2416] px-8 py-3 transition-colors"
            >
              Consultar opciones
            </Link>
          </div>
        </section>
      </main>

      <footer className="px-8 py-10 sm:px-20 border-t border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30 text-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <div className="font-bold mb-2">La Comarca <span className="font-light italic">Club de Arte</span></div>
            <p className="opacity-70">Un espacio para crear y conectar con el arte</p>
          </div>
          <div className="flex gap-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Facebook</a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">WhatsApp</a>
          </div>
          <div className="opacity-70">
            © {new Date().getFullYear()} La Comarca Club de Arte
          </div>
        </div>
      </footer>
    </div>
  );
}
