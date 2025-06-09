
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
    position: "Co-Founder & CEO",
    image: "/lovable-uploads/05911789-0c2c-4e1e-ad1e-d8f2f7ea1cb6.png",
    bio: "With over 20 years of experience, Paloma is a flexible and agile executive who excels at implementing strategies tailored to each situation. Her MBA in Business Administration and expertise as an AI and Automation Expert strengthen her leadership and strategic thinking. Her efficiency in task planning and rapid adaptation to change positively contribute to her work. With strong leadership and interpersonal skills, she has a proven track record in financial management, strategic planning, and team development.",
    linkedin: "https://www.linkedin.com/in/paloma-firgaira-840b50a3",
    email: "palomafirgaira@gmail.com",
    instagram: "https://www.instagram.com/prf.171508/"
  },
  {
    id: 2,
    name: "Gianro Compagno",
    position: "Co-Founder & CTO",
    image: "/lovable-uploads/9b51af22-f8c7-44f1-be75-83a474f00e55.png",
    bio: "Gianro brings a wealth of experience in technology project management from multinational environments. His technical expertise combined with an MBA and a master's in Investigative Psychology creates a unique approach to technology solutions. As an AI and Automation Expert, he applies psychological insights to design more intuitive and human-centered systems. His detail-oriented approach and positive mindset ensure our solutions are not only innovative and reliable but also align with how people naturally think and work.",
    linkedin: "https://www.linkedin.com/in/giovanni-roberto-compagno-aa7494110",
    email: "gianrocompagno@gmail.com",
    instagram: "https://www.instagram.com/gianro89/"
  }
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Leadership Team</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Meet the founders who are passionate about creating technology that gives you back your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden w-full mx-auto max-w-md flex flex-col min-h-[850px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
              <div className="aspect-w-4 aspect-h-3 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-128 object-cover object-center"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-gialoma-black">{member.name}</h3>
                <p className="text-gialoma-lightgold font-medium mb-3 text-sm md:text-base">{member.position}</p>
                <p className="text-gialoma-darkgray mb-6 text-sm md:text-base flex-1 text-justify">{member.bio}</p>
                <div className="flex space-x-4 mt-auto">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.instagram && (
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
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

export default Team;
