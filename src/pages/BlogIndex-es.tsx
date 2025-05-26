
import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavbarEs from '../components/Navbar-es';
import FooterEs from '../components/Footer-es';
import CookieBanner from '../components/CookieBanner';
import SEOComponent, { commonSEOConfigs } from '../components/SEOComponent';

const BlogIndexEs = () => {
  // Sample blog posts data in Spanish
  const blogPosts = [
    {
      id: 1,
      slug: 'automatizacion-inteligencia-artificial-2025',
      title: 'El Futuro de la Automatización con IA en 2025',
      excerpt: 'Descubre cómo la inteligencia artificial está revolucionando la automatización empresarial y qué esperar en el próximo año.',
      author: 'Paloma Firgaira',
      date: '15 de Mayo, 2025',
      readTime: '8 min lectura',
      category: 'Inteligencia Artificial',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      slug: 'casos-exito-transformacion-digital-pymes',
      title: 'Casos de Éxito: Transformación Digital en PYMEs',
      excerpt: 'Conoce historias reales de pequeñas y medianas empresas que han transformado sus operaciones con tecnología.',
      author: 'Gianro Compagno',
      date: '10 de Mayo, 2025',
      readTime: '6 min lectura',
      category: 'Casos de Estudio',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 3,
      slug: 'automatizacion-flujos-trabajo-sin-codigo',
      title: 'Automatización de Flujos de Trabajo Sin Código',
      excerpt: 'Aprende a automatizar procesos empresariales sin necesidad de programación usando herramientas no-code.',
      author: 'Paloma Firgaira',
      date: '5 de Mayo, 2025',
      readTime: '10 min lectura',
      category: 'Automatización',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 4,
      slug: 'roi-inversion-tecnologia-empresarial',
      title: 'Cómo Calcular el ROI de tu Inversión Tecnológica',
      excerpt: 'Guía práctica para medir el retorno de inversión en tecnología y justificar proyectos de digitalización.',
      author: 'Gianro Compagno',
      date: '28 de Abril, 2025',
      readTime: '7 min lectura',
      category: 'Finanzas',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 5,
      slug: 'tendencias-digitalizacion-2025',
      title: 'Tendencias en Digitalización para 2025',
      excerpt: 'Las principales tendencias tecnológicas que marcarán la digitalización empresarial este año.',
      author: 'Paloma Firgaira',
      date: '20 de Abril, 2025',
      readTime: '9 min lectura',
      category: 'Tendencias',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 6,
      slug: 'seguridad-datos-automatizacion',
      title: 'Seguridad de Datos en Procesos Automatizados',
      excerpt: 'Mejores prácticas para mantener la seguridad y privacidad de datos en sistemas automatizados.',
      author: 'Gianro Compagno',
      date: '15 de Abril, 2025',
      readTime: '11 min lectura',
      category: 'Seguridad',
      image: '/placeholder.svg',
      featured: false
    }
  ];

  const categories = ['Todos', 'Inteligencia Artificial', 'Automatización', 'Casos de Estudio', 'Tendencias', 'Finanzas', 'Seguridad'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOComponent meta={commonSEOConfigs.blogEs} />
      <NavbarEs />
      
      <div className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gialoma-black to-gialoma-darkgold py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blog de Gialoma
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Insights sobre automatización, digitalización e inteligencia artificial para transformar tu negocio
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gialoma-black mb-8 text-center">Artículo Destacado</h2>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-gialoma-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          Destacado
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gialoma-black mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gialoma-darkgray mb-6 text-lg">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4 text-sm text-gialoma-darkgray">
                          <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{featuredPost.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white self-start"
                        onClick={() => window.location.href = `/es/blog/${featuredPost.slug}`}
                      >
                        Leer Artículo <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-gialoma-gold text-white'
                        : 'bg-white text-gialoma-darkgray hover:bg-gialoma-gold hover:text-white border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gialoma-black mb-12 text-center">
                {selectedCategory === 'Todos' ? 'Todos los Artículos' : `Artículos de ${selectedCategory}`}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gialoma-gold/10 text-gialoma-gold px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-gialoma-darkgray">
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gialoma-black mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gialoma-darkgray mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gialoma-darkgray">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gialoma-darkgray">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline"
                        className="w-full mt-4 border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white"
                        onClick={() => window.location.href = `/es/blog/${post.slug}`}
                      >
                        Leer Más <ArrowRight className="ml-2" size={14} />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button 
                  variant="outline"
                  className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white px-8 py-3"
                >
                  Cargar Más Artículos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gialoma-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Mantente Actualizado
              </h2>
              <p className="text-white/90 mb-8">
                Recibe los últimos insights sobre automatización, IA y digitalización directamente en tu bandeja de entrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-gialoma-gold focus:outline-none"
                />
                <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white px-8">
                  Suscribirse
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Sin spam. Cancela cuando quieras.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <FooterEs />
      <CookieBanner />
    </div>
  );
};

export default BlogIndexEs;
