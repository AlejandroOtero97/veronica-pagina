import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-col gap-8 max-w-5xl mx-auto p-6" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-neutral)' }}>
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: 'var(--color-primary-dark)' }}>
            Descubre el arte en <span className="text-[var(--color-secondary)]">comunidad</span>
          </h1>
          {/* Updated paragraph color */}
          <p className="text-lg font-medium" style={{ color: 'var(--color-neutral)' }}>
            Un espacio para explorar tu creatividad, aprender nuevas técnicas y conectar con otros artistas en un ambiente acogedor y estimulante.
          </p>
          <div className="flex gap-4 items-center flex-col sm:flex-row pt-4">
            <a
              className="btn-artistic transition transform duration-200 hover:scale-105 active:scale-95 text-white font-bold"
              href="#talleres"
              style={{
                background: 'linear-gradient(270deg, var(--color-accent), var(--color-secondary), var(--color-secondary-dark), var(--color-primary), var(--color-primary-dark))',
                backgroundSize: '400%',
                animation: 'gradient-move 8s ease infinite',
                border: 'none',
                padding: '0.75rem 1.25rem',
                borderRadius: '0.375rem'
              }}
            >
              Explorar talleres
            </a>
            <a
              className="btn-artistic-outline transition transform duration-200 hover:scale-105 active:scale-95 text-white font-bold"
              href="#contacto"
              style={{
                background: 'linear-gradient(270deg, var(--color-accent), var(--color-secondary), var(--color-secondary-dark), var(--color-primary), var(--color-primary-dark))',
                backgroundSize: '400%',
                animation: 'gradient-move 8s ease infinite',
                border: 'none',
                padding: '0.75rem 1.25rem',
                borderRadius: '0.375rem'
              }}
            >
              Contáctanos
            </a>
          </div>
        </div>
        <div className="flex-1 relative h-64 sm:h-80 w-full rounded-lg overflow-hidden">
          {/* Imagen de portada */}
          <div className="absolute inset-0 art-gradient">
            <Image
              src="/images/portada.jpg"
              alt="Imagen de portada"
              fill
              className="object-cover"
              onError={(e) => {
                console.log("Error loading image");
              }}
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="talleres" className="py-16">
        <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: 'var(--color-primary-dark)' }}>Nuestros Talleres</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ 
            { name: 'Pintura', color: 'var(--color-primary-dark)' },
            { name: 'Escultura', color: 'var(--color-secondary)' },
            { name: 'Dibujo', color: 'var(--color-accent-dark)' }
          ].map((taller, index) => (
            <div key={index} className="art-card hover:border-[var(--color-secondary)] shadow-md">
              <div className="h-40 mb-4" style={{ backgroundColor: `${taller.color}20` }}>
                <span className="font-medium" style={{ color: taller.color }}>Imagen de {taller.name}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary-dark)' }}>Taller de {taller.name}</h3>
                <p className="mb-4" style={{ color: 'var(--color-neutral)' }}>Aprende técnicas de {taller.name.toLowerCase()} con nuestros profesores experimentados en un ambiente creativo.</p>
                <a href="#" className="font-medium flex items-center text-[var(--color-primary)] hover:text-[var(--color-secondary)]">
                  Ver detalles 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-background-alt)' }}>
        <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: 'var(--color-secondary)' }}>Lo que dicen nuestros artistas</h2>
        <div className="max-w-4xl mx-auto">
          <blockquote className="italic text-lg text-center art-panel">
            &ldquo;La Comarca ha sido un descubrimiento maravilloso para mí. No solo he aprendido nuevas técnicas, sino que he encontrado una comunidad que me inspira cada día a seguir creando.&rdquo;
            <footer className="mt-4 font-normal text-base opacity-70">María González, pintora</footer>
          </blockquote>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contacto" className="py-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#C0392B' }}>¿Listo para unirte?</h2>
        <p className="text-center mb-8" style={{ color: 'var(--color-neutral)' }}>Déjanos tus datos y te contactaremos para informarte sobre próximos talleres y eventos.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
            <input id="name" type="text" className="w-full p-3 rounded-md border" style={{ borderColor: '#E67E2280', backgroundColor: '#E67E2220' }} />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input id="email" type="email" className="w-full p-3 rounded-md border" style={{ borderColor: '#E67E2280', backgroundColor: '#E67E2220' }} />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
            <textarea id="message" rows="4" className="w-full p-3 rounded-md border" style={{ borderColor: '#E67E2280', backgroundColor: '#E67E2220' }}></textarea>
          </div>
          <button type="submit" className="btn-artistic-secondary w-full" style={{ backgroundColor: '#C0392B', borderColor: '#C0392B' }}>
            Enviar mensaje
          </button>
        </form>
      </section>
      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
