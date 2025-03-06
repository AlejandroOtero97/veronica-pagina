import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const classes = [
  {
    id: 1,
    title: "Clase de Retrato al Pastel",
    description: "Sesión individual o grupal para aprender técnicas de retrato usando pastel seco. Ideal para capturar la expresividad del rostro humano.",
    videoId: "oG4zHKGo8Bk",
    price: "$35.000 / sesión",
    duration: "2 horas",
    schedule: ["Lunes 15:00 - 17:00", "Jueves 18:00 - 20:00"],
    instructor: "Alejandra Morales"
  },
  {
    id: 2,
    title: "Clase de Cerámica Creativa",
    description: "Explora diferentes técnicas de modelado en arcilla y aprende a crear piezas únicas. Incluye materiales y horneado de las piezas.",
    videoId: "mWuud-vBlK4",
    price: "$45.000 / sesión",
    duration: "3 horas",
    schedule: ["Martes 16:00 - 19:00", "Sábado 10:00 - 13:00"],
    instructor: "Francisco Hernández"
  },
  {
    id: 3,
    title: "Clase de Acuarela Botánica",
    description: "Aprende a capturar la belleza de las plantas y flores utilizando acuarela. Enfoque en detalles, textura y composición.",
    videoId: "oG_AXBf_iXk",
    price: "$30.000 / sesión",
    duration: "2 horas",
    schedule: ["Miércoles 17:00 - 19:00", "Viernes 10:00 - 12:00"],
    instructor: "Mariana Rojas"
  },
  {
    id: 4,
    title: "Clase de Collage Experimental",
    description: "Explora la creatividad a través del collage, combinando diferentes materiales, texturas y técnicas para crear composiciones únicas.",
    videoId: "DfzbRrDQl_Q",
    price: "$28.000 / sesión",
    duration: "2.5 horas",
    schedule: ["Jueves 15:00 - 17:30", "Domingo 11:00 - 13:30"],
    instructor: "Pablo Gómez"
  }
];

export default function Clases() {
  const [filter, setFilter] = useState("all");

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#f8f5f2] dark:bg-[#1a1814] text-[#2c2416] dark:text-[#f0ebe3] font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Clases | La Comarca Club de Arte</title>
        <meta name="description" content="Clases individuales y grupales de arte" />
      </Head>

      <header className="px-8 py-6 sm:px-20 sm:py-8 flex justify-between items-center border-b border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30">
        <div className="text-2xl font-bold">
          <span className="text-[#845e3f] dark:text-[#d3b88c]">La Comarca</span>
          <span className="font-light italic ml-2">Club de Arte</span>
        </div>
        <nav className="hidden sm:flex gap-8">
          <Link href="/" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Inicio</Link>
          <Link href="/cursos" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Cursos</Link>
          <Link href="/clases" className="text-[#845e3f] dark:text-[#d3b88c] transition-colors">Clases</Link>
          <Link href="/galeria" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Galería</Link>
          <Link href="/contacto" className="hover:text-[#845e3f] dark:hover:text-[#d3b88c] transition-colors">Contacto</Link>
        </nav>
      </header>

      <main className="px-8 py-12 sm:px-20 sm:py-16">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nuestras Clases</h1>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Clases individuales y grupales diseñadas para todos los niveles. 
              Reserva tu lugar y comienza a explorar nuevas técnicas artísticas con nuestros instructores especializados.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="flex p-1 bg-[#d3c7b1]/20 dark:bg-[#5d4f3a]/20 rounded-full">
              <button 
                onClick={() => setFilter("all")} 
                className={`px-5 py-2 rounded-full text-sm ${filter === 'all' ? 'bg-[#845e3f] dark:bg-[#d3b88c] text-white dark:text-[#2c2416]' : 'hover:bg-[#845e3f]/10 dark:hover:bg-[#d3b88c]/10'}`}
              >
                Todas las clases
              </button>
              <button 
                onClick={() => setFilter("weekend")} 
                className={`px-5 py-2 rounded-full text-sm ${filter === 'weekend' ? 'bg-[#845e3f] dark:bg-[#d3b88c] text-white dark:text-[#2c2416]' : 'hover:bg-[#845e3f]/10 dark:hover:bg-[#d3b88c]/10'}`}
              >
                Fin de semana
              </button>
              <button 
                onClick={() => setFilter("weekday")} 
                className={`px-5 py-2 rounded-full text-sm ${filter === 'weekday' ? 'bg-[#845e3f] dark:bg-[#d3b88c] text-white dark:text-[#2c2416]' : 'hover:bg-[#845e3f]/10 dark:hover:bg-[#d3b88c]/10'}`}
              >
                Entre semana
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classes.map((classItem) => {
              // Simple filter logic - could be enhanced
              const isWeekend = classItem.schedule.some(s => s.includes("Sábado") || s.includes("Domingo"));
              if (filter === "weekend" && !isWeekend) return null;
              if (filter === "weekday" && isWeekend) return null;
              
              return (
                <div 
                  key={classItem.id} 
                  className="border border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-video w-full bg-black">
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${classItem.videoId}`} 
                      title={classItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{classItem.title}</h2>
                    <p className="opacity-80 mb-5">{classItem.description}</p>
                    
                    <div className="flex flex-wrap items-center mb-4 text-sm">
                      <div className="flex items-center mr-6 mb-2">
                        <svg className="h-5 w-5 mr-2 text-[#845e3f] dark:text-[#d3b88c]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>{classItem.duration}</span>
                      </div>
                      <div className="flex items-center mr-6 mb-2">
                        <svg className="h-5 w-5 mr-2 text-[#845e3f] dark:text-[#d3b88c]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a1 1 0 10-2 0 8 8 0 0016 0 1 1 0 00-2 0 5.986 5.986 0 00-.454 2.916A5 5 0 008 11z" clipRule="evenodd" />
                        </svg>
                        <span>{classItem.instructor}</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 mb-6">
                      <h3 className="font-medium mb-2">Horarios disponibles:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {classItem.schedule.map((time, idx) => (
                          <div key={idx} className="px-3 py-1 bg-[#845e3f]/10 dark:bg-[#d3b88c]/10 rounded text-sm">
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-2xl font-bold text-[#845e3f] dark:text-[#d3b88c]">
                        {classItem.price}
                      </span>
                      <button 
                        className="rounded-full bg-[#845e3f] hover:bg-[#6e4e35] dark:bg-[#d3b88c] dark:hover:bg-[#c0a678] text-white dark:text-[#2c2416] px-6 py-2 transition-colors"
                      >
                        Reservar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 border border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Clases Privadas Personalizadas</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              ¿Buscas una experiencia de aprendizaje más personalizada? Ofrecemos clases privadas adaptadas 
              a tus necesidades, nivel y horario preferido.
            </p>
            <Link 
              href="/contacto" 
              className="inline-block rounded-full bg-[#845e3f] hover:bg-[#6e4e35] dark:bg-[#d3b88c] dark:hover:bg-[#c0a678] text-white dark:text-[#2c2416] px-8 py-3 transition-colors"
            >
              Solicitar información
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
