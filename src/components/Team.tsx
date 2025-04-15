
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alessandro Giallombardo",
    position: "Co-Founder & CEO",
    image: "/lovable-uploads/34119c99-f024-4f88-9bf1-13abf64f51c6.png", // Temporarily using logo until we upload the actual image
    bio: "With over a decade of experience in technology management, Alessandro leads our strategic initiatives, focusing on delivering innovative solutions that save our clients valuable time.",
    linkedin: "https://linkedin.com/in/alessandro-giallombardo",
    email: "alessandro@gialomalife.com"
  },
  {
    id: 2,
    name: "Marco Rossi",
    position: "Co-Founder & CTO",
    image: "/lovable-uploads/34119c99-f024-4f88-9bf1-13abf64f51c6.png", // Temporarily using logo until we upload the actual image
    bio: "Marco heads our technical development with expertise in software architecture and AI integration. His focus on performance and security ensures our solutions are robust and reliable.",
    linkedin: "https://linkedin.com/in/marco-rossi",
    email: "marco@gialomalife.com"
  }
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Leadership Team</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Meet the founders who are passionate about creating technology that gives you back your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gialoma-black">{member.name}</h3>
                <p className="text-gialoma-lightgold font-medium mb-4">{member.position}</p>
                <p className="text-gialoma-darkgray mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
                    >
                      <Mail size={20} />
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
