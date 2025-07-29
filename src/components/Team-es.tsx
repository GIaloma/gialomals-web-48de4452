
import React from 'react';
import { Linkedin, Mail, Instagram } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
  instagram?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Paloma Firgaira",
    position: "Co-Fundadora y CEO",
    image: "/lovable-uploads/05911789-0c2c-4e1e-ad1e-d8f2f7ea1cb6.png",
    bio: "Con más de 20 años de experiencia, Paloma es una ejecutiva flexible y ágil que sobresale implementando estrategias adaptadas a cada situación. Su MBA en Administración de Empresas y experiencia como Experta en IA y Automatización fortalecen su liderazgo y pensamiento estratégico. Su eficiencia en la planificación de tareas y rápida adaptación al cambio contribuyen positivamente a su trabajo. Con sólidas habilidades de liderazgo e interpersonales, tiene un historial comprobado en gestión financiera, planificación estratégica y desarrollo de equipos.",
    linkedin: "https://www.linkedin.com/in/paloma-firgaira-840b50a3",
    email: "palomafirgaira@gmail.com",
    instagram: "https://www.instagram.com/prf.171508/"
  },
  {
    id: 2,
    name: "Gianro Compagno",
    position: "Co-Fundador y CTO",
    image: "/lovable-uploads/9b51af22-f8c7-44f1-be75-83a474f00e55.png",
    bio: "Gianro aporta una gran experiencia en gestión de proyectos tecnológicos en entornos multinacionales. Su experiencia técnica combinada con un MBA y una maestría en Psicología Investigativa crea un enfoque único para las soluciones tecnológicas. Como Experto en IA y Automatización, aplica conocimientos psicológicos para diseñar sistemas más intuitivos y centrados en el ser humano. Su enfoque orientado al detalle y mentalidad positiva aseguran que nuestras soluciones no solo sean innovadoras y confiables, sino que también se alineen con cómo las personas piensan y trabajan naturalmente.",
    linkedin: "https://www.linkedin.com/in/giovanni-roberto-compagno-aa7494110",
    email: "gianrocompagno@gmail.com",
    instagram: "https://www.instagram.com/gianro89/"
  }
];

const TeamEs = () => {
  return (
    <section id="equipo" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Nuestro Equipo Directivo</span>
          </h2>
          <p className="text-lg text-gialoma-text-on-gray max-w-2xl mx-auto">
            Conoce a los fundadores que son apasionados por crear tecnología que te devuelve tu tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden w-full mx-auto max-w-md flex flex-col min-h-[700px] sm:min-h-[750px] lg:min-h-[850px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover object-center"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gialoma-black text-center mb-2">{member.name}</h3>
                <p className="text-gialoma-lightgold-accessible font-medium mb-3 sm:mb-4 text-sm sm:text-base text-center">{member.position}</p>
                <p className="text-gialoma-darkgray-accessible mb-4 sm:mb-6 text-sm sm:text-base flex-1 text-center sm:text-justify leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-4 mt-auto">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gialoma-gold-accessible hover:text-gialoma-darkgold transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.instagram && (
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gialoma-gold-accessible hover:text-gialoma-darkgold transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gialoma-gold-accessible hover:text-gialoma-darkgold transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamEs;
