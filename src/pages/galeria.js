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

// Gallery items data
const galleryItems = [
  {
    id: 1,
    title: "Atardecer en el Campo",
    artist: "Elena Martínez",
    category: "pintura",
    technique: "Óleo sobre lienzo",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Retrato de Mujer",
    artist: "Carlos López",
    category: "dibujo",
    technique: "Carboncillo sobre papel",
    image: "https://images.unsplash.com/photo-1578926288207-32356bf84ca7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Abstracción No. 4",
    artist: "Ana Rodríguez",
    category: "pintura",
    technique: "Acrílico sobre canvas",
    image: "https://images.unsplash.com/photo-1552817459-e9e336736b61?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Metamorfosis",
    artist: "Miguel Ángel Torres",
    category: "escultura",
    technique: "Arcilla modelada",
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Naturaleza Muerta",
    artist: "Patricia Fuentes",
    category: "pintura",
    technique: "Óleo sobre lienzo",
    image: "https://images.unsplash.com/photo-1579541592825-95eb5b4db6f0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Figura en Movimiento",
    artist: "Roberto Sánchez",
    category: "escultura",
    technique: "Bronce fundido",
    image: "https://images.unsplash.com/photo-1576502200916-3808e07386a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Estudio de Manos",
    artist: "Lucía Gómez",
    category: "dibujo",
    technique: "Lápiz sobre papel",
    image: "https://images.unsplash.com/photo-1614107151491-6876eecbff89?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Paisaje Urbano",
    artist: "Fernando Herrera",
    category: "pintura",
    technique: "Acuarela",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Composición Geométrica",
    artist: "Diana Vargas",
    category: "mixta",
    technique: "Técnica mixta sobre papel",
    image: "https://images.unsplash.com/photo-1547333101-6bb18e609b2f?q=80&w=800&auto=format&fit=crop"
  }
];

// Available categories for filter
const categories = [
  { id: "all", name: "Todas las obras" },
  { id: "pintura", name: "Pintura" },
  { id: "dibujo", name: "Dibujo" },
  { id: "escultura", name: "Escultura" },
  { id: "mixta", name: "Técnica mixta" }
];

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter items by category
  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="flex flex-col gap-8 max-w-5xl mx-auto" style={{ backgroundColor: 'var(--color-background)' }}>
      <Head>
        <title>Galería | La Comarca Club de Arte</title>
        <meta name="description" content="Galería de obras de arte de nuestros estudiantes y profesores" />
      </Head>


      <main className="px-8 py-12 sm:px-20 sm:py-16">
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Galería de Arte</h1>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Descubre las creaciones de nuestros estudiantes y profesores. Una muestra del talento y la pasión que se cultivan en nuestro espacio.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="flex p-1 bg-[#d3c7b1]/20 dark:bg-[#5d4f3a]/20 rounded-full">
              {categories.map(category => (
                <button 
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)} 
                  className={`px-5 py-2 rounded-full text-sm whitespace-nowrap ${
                    selectedCategory === category.id 
                    ? 'bg-[#845e3f] dark:bg-[#d3b88c] text-white dark:text-[#2c2416]' 
                    : 'hover:bg-[#845e3f]/10 dark:hover:bg-[#d3b88c]/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-black/10 dark:bg-white/5 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-medium text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.artist}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm opacity-70">
                    {item.artist} · {item.technique}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state if no items */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg opacity-70">No hay obras disponibles en esta categoría actualmente.</p>
            </div>
          )}

          {/* Modal for selected item */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedItem(null)}>
              <div className="max-w-4xl max-h-[90vh] bg-[#f8f5f2] dark:bg-[#1a1814] rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="w-full object-contain max-h-[70vh]" 
                  />
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-black/30 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                  <p className="text-[#845e3f] dark:text-[#d3b88c]">{selectedItem.artist}</p>
                  <p className="mt-2 opacity-80">{selectedItem.technique}</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Call to action section */}
        <section className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">¿Te gustaría exponer tu obra?</h2>
          <p className="mb-8">
            En La Comarca promovemos el talento artístico. Si eres estudiante o artista y quieres formar parte de nuestra galería, contáctanos.
          </p>
          <Link 
            href="/contacto" 
            className="inline-block rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-3 transition-colors"
          >
            Háblanos de tu obra
          </Link>
        </section>
      </main>
    </section>
  );
}
