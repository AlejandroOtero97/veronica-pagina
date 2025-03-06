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
    title: "Testeo Video 1 Oculto-10min",
    description: "Domina las técnicas clásicas y modernas de la pintura al óleo. Este curso está diseñado para artistas de todos los niveles que desean perfeccionar su técnica.",
    price: "$120.000",
    duration: "8 semanas",
    videoId: "VmzlzTg5jzg",
    level: "Intermedio",
    instructor: "Veronica Garcia"
  },
  {
    id: 2,
    title: "Testeo Video 2 Publico-30min",
    description: "Aprende los fundamentos de la acuarela desde cero. Exploraremos técnicas básicas, mezcla de colores y composición para crear hermosas obras.",
    price: "$90.000",
    duration: "6 semanas",
    videoId: "kXLgNshy5Zc",
    level: "Principiante",
    instructor: "Veronica Garcia"
  },
  {
    id: 3,
    title: "Testeo Video 3 Oculto-1 hora",
    description: "Un curso intensivo sobre anatomía humana para artistas. Enfocado en proporciones, estructura muscular y expresividad en el dibujo de figura.",
    price: "$140.000",
    duration: "10 semanas",
    videoId: "hMEhryEPDwY",
    level: "Avanzado",
    instructor: "Veronica Garcia"
  },
];

export default function Cursos() {
  return (
    <section className="flex flex-col gap-8 max-w-5xl mx-auto" style={{ backgroundColor: 'var(--color-background)' }}>
      <Head>
        <title>Cursos | La Comarca Club de Arte</title>
        <meta name="description" content="Explora nuestra selección de cursos de arte" />
      </Head>

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
                <div className="aspect-video w-full bg-[var(--color-background)]">
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
          
          <div className="mt-16 p-8 bg-[var(--color-primary)]/5 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
            <p className="mb-6">Contamos con más cursos disponibles y también ofrecemos programas personalizados.</p>
            <Link 
              href="/contacto" 
              className="inline-block rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-3 transition-colors"
            >
              Consultar opciones
            </Link>
          </div>
        </section>
      </main>
    </section>
  );
}
