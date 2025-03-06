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

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // For static sites, you can use a service like Formspree
    // Replace 'YOUR_FORM_ID' with your actual form ID from Formspree
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          setIsLoading(false);
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "general",
            message: ""
          });
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
        // Handle error state here
      });
  };

  return (
    <section className="flex flex-col gap-8 max-w-5xl mx-auto">
      <Head>
        <title>Contacto | La Comarca Club de Arte</title>
        <meta name="description" content="Contacta con La Comarca Club de Arte para más información" />
      </Head>

      <main className="px-8 py-12 sm:px-20 sm:py-16">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              ¿Tienes alguna pregunta sobre nuestros cursos o clases? ¿Quieres formar parte de nuestra comunidad artística? Ponte en contacto con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white/50 dark:bg-black/10 rounded-xl p-8 border border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#845e3f]/20 dark:bg-[#d3b88c]/20 text-[#845e3f] dark:text-[#d3b88c] flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">¡Mensaje enviado!</h3>
                  <p className="opacity-80 mb-6">Gracias por contactarnos. Te responderemos lo antes posible.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="text-[#845e3f] dark:text-[#d3b88c] font-medium"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium">Nombre completo</label>
                    <input 
                      id="name" 
                      name="name" 
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full p-3 rounded-md border border-[#d3c7b1]/50 dark:border-[#5d4f3a]/50 bg-white/50 dark:bg-black/10 focus:ring-2 focus:ring-[#845e3f] dark:focus:ring-[#d3b88c] outline-none" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="w-full p-3 rounded-md border border-[#d3c7b1]/50 dark:border-[#5d4f3a]/50 bg-white/50 dark:bg-black/10 focus:ring-2 focus:ring-[#845e3f] dark:focus:ring-[#d3b88c] outline-none" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-1 text-sm font-medium">Teléfono (opcional)</label>
                      <input 
                        id="phone" 
                        name="phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-[#d3c7b1]/50 dark:border-[#5d4f3a]/50 bg-white/50 dark:bg-black/10 focus:ring-2 focus:ring-[#845e3f] dark:focus:ring-[#d3b88c] outline-none" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-1 text-sm font-medium">Asunto</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md border border-[#d3c7b1]/50 dark:border-[#5d4f3a]/50 bg-white/50 dark:bg-black/10 focus:ring-2 focus:ring-[#845e3f] dark:focus:ring-[#d3b88c] outline-none"
                    >
                      <option value="general">Información general</option>
                      <option value="cursos">Información sobre cursos</option>
                      <option value="clases">Información sobre clases</option>
                      <option value="colaboracion">Propuesta de colaboración</option>
                      <option value="otro">Otro asunto</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium">Mensaje</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-md border border-[#d3c7b1]/50 dark:border-[#5d4f3a]/50 bg-white/50 dark:bg-black/10 focus:ring-2 focus:ring-[#845e3f] dark:focus:ring-[#d3b88c] outline-none resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full rounded-md bg-[#845e3f] hover:bg-[#6e4e35] dark:bg-[#d3b88c] dark:hover:bg-[#c0a678] text-white dark:text-[#2c2416] font-medium py-3 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-white/50 dark:bg-black/10 rounded-xl p-8 border border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30 mb-8">
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 h-8 w-8 rounded-full bg-[#845e3f]/20 dark:bg-[#d3b88c]/20 text-[#845e3f] dark:text-[#d3b88c] flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Dirección</h3>
                      <p className="opacity-80">Calle de las Artes 123<br />Col. Centro, Ciudad de México</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 h-8 w-8 rounded-full bg-[#845e3f]/20 dark:bg-[#d3b88c]/20 text-[#845e3f] dark:text-[#d3b88c] flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Teléfono</h3>
                      <p className="opacity-80">+52 (55) 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 h-8 w-8 rounded-full bg-[#845e3f]/20 dark:bg-[#d3b88c]/20 text-[#845e3f] dark:text-[#d3b88c] flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="opacity-80">info@lacomarcaarte.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 h-8 w-8 rounded-full bg-[#845e3f]/20 dark:bg-[#d3b88c]/20 text-[#845e3f] dark:text-[#d3b88c] flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horario de atención</h3>
                      <p className="opacity-80">
                        Lunes a Viernes: 9:00 - 19:00<br />
                        Sábados: 10:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/50 dark:bg-black/10 rounded-xl p-8 border border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30">
                <h2 className="text-xl font-bold mb-4">Síguenos en redes sociales</h2>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="flex items-center px-4 py-3 rounded-lg border border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30 hover:bg-[#845e3f]/5 dark:hover:bg-[#d3b88c]/5 transition-colors"
                  >
                    <span className="h-6 w-6 bg-[#845e3f]/20 dark:bg-[#d3b88c]/20 text-[#845e3f] dark:text-[#d3b88c] rounded-full flex items-center justify-center mr-3">
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </span>
                    Instagram
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center px-4 py-3 rounded-lg border border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30 hover:bg-[#845e3f]/5 dark:hover:bg-[#d3b88c]/5 transition-colors"
                  >
                    <span className="h-6 w-6 bg-[#845e3f]/20 dark:bg-[#d3b88c]/20 text-[#845e3f] dark:text-[#d3b88c] rounded-full flex items-center justify-center mr-3">
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </span>
                    Facebook
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center px-4 py-3 rounded-lg border border-[#d3c7b1]/30 dark:border-[#5d4f3a]/30 hover:bg-[#845e3f]/5 dark:hover:bg-[#d3b88c]/5 transition-colors"
                  >
                    <span className="h-6 w-6 bg-[#845e3f]/20 dark:bg-[#d3b88c]/20 text-[#845e3f] dark:text-[#d3b88c] rounded-full flex items-center justify-center mr-3">
                      <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </span>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Ubicación</h2>
            <div className="aspect-[16/9] w-full bg-[#d3c7b1]/20 dark:bg-[#5d4f3a]/20 rounded-xl overflow-hidden">
              {/* This is a placeholder for an actual map - you would use Google Maps or similar service */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-center opacity-70">
                  Mapa interactivo<br />
                  <span className="text-sm">(Aquí se integraría Google Maps o similar)</span>
                </p>
              </div>
              {/* For actual implementation:
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661965238077!2d-99.16869639999999!3d19.427026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzM3LjMiTiA5OcKwMTAnMDcuMyJX!5e0!3m2!1ses-419!2smx!4v1635171647917!5m2!1ses-419!2smx"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
              */}
            </div>
            
            <div className="mt-6 text-center sm:text-left">
              <p className="opacity-80">
                ¿Prefieres visitarnos personalmente? Te esperamos en nuestro espacio 
                para mostrarte nuestras instalaciones y resolver todas tus dudas.
              </p>
              <a 
                href="https://goo.gl/maps/your-custom-link-here" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-secondary)] font-medium mt-2 transition-colors"
              >
                Cómo llegar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}