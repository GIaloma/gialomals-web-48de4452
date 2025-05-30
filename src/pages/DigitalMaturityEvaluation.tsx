import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import DigitalizationNavbar from '../components/DigitalizationNavbar';
import Footer from '../components/Footer';

interface OptionButtonProps {
  value: string;
  questionName: string;
  selected: boolean;
  children: React.ReactNode;
}

const OptionButton: React.FC<OptionButtonProps> = ({ value, questionName, selected, children }) => {
  const handleClick = () => {
    // This would typically dispatch to a state management system
    console.log(`Selected ${value} for ${questionName}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`p-4 border rounded-lg text-left transition-all hover:bg-gray-50 ${
        selected ? 'border-gialoma-gold bg-gialoma-gold/10' : 'border-gray-200'
      }`}
    >
      {children}
    </button>
  );
};

interface CheckboxOptionProps {
  value: string;
  questionName: string;
  children: React.ReactNode;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({ value, questionName, children }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="mr-3"
      />
      {children}
    </label>
  );
};

const DigitalMaturityEvaluation: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [userResponses, setUserResponses] = useState<Record<string, string>>({});
  const totalSections = 8;

  const nextSection = () => {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DigitalizationNavbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progreso</span>
              <span className="text-sm text-gray-600">{currentSection} de {totalSections}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gialoma-gold h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentSection / totalSections) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Section 1: Basic Info */}
            {currentSection === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gialoma-gold border-b-2 border-gray-100 pb-4">
                  Información Básica
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="text-lg font-semibold mb-4">
                      1. ¿Cuál es el tamaño de tu empresa?
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="1-10" 
                        questionName="company-size"
                        selected={userResponses['company-size'] === '1-10'}
                      >
                        1-10 empleados
                      </OptionButton>
                      <OptionButton 
                        value="11-50" 
                        questionName="company-size"
                        selected={userResponses['company-size'] === '11-50'}
                      >
                        11-50 empleados
                      </OptionButton>
                      <OptionButton 
                        value="51-200" 
                        questionName="company-size"
                        selected={userResponses['company-size'] === '51-200'}
                      >
                        51-200 empleados
                      </OptionButton>
                      <OptionButton 
                        value="200+" 
                        questionName="company-size"
                        selected={userResponses['company-size'] === '200+'}
                      >
                        200+ empleados
                      </OptionButton>
                    </div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold mb-4">
                      2. ¿En qué sector opera tu empresa?
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {['Tecnología', 'Salud', 'Educación', 'Retail', 'Manufactura', 'Servicios', 'Finanzas', 'Otro'].map(sector => (
                        <OptionButton 
                          key={sector}
                          value={sector} 
                          questionName="sector"
                          selected={userResponses['sector'] === sector}
                        >
                          {sector}
                        </OptionButton>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2: Current Technology */}
            {currentSection === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gialoma-gold border-b-2 border-gray-100 pb-4">
                  Tecnología Actual
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="text-lg font-semibold mb-4">
                      3. ¿Qué nivel de digitalización tiene actualmente tu empresa?
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="Básico" 
                        questionName="digitalization-level"
                        selected={userResponses['digitalization-level'] === 'Básico'}
                      >
                        Básico (principalmente papel)
                      </OptionButton>
                      <OptionButton 
                        value="Intermedio" 
                        questionName="digitalization-level"
                        selected={userResponses['digitalization-level'] === 'Intermedio'}
                      >
                        Intermedio (algunas herramientas digitales)
                      </OptionButton>
                      <OptionButton 
                        value="Avanzado" 
                        questionName="digitalization-level"
                        selected={userResponses['digitalization-level'] === 'Avanzado'}
                      >
                        Avanzado (mayormente digital)
                      </OptionButton>
                    </div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold mb-4">
                      4. ¿Qué herramientas utilizas actualmente?
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Excel/Google Sheets', 'CRM', 'ERP', 'Software de contabilidad', 'Herramientas de comunicación', 'Sistema de gestión de proyectos'].map(tool => (
                        <CheckboxOption key={tool} value={tool} questionName="current-tools">
                          {tool}
                        </CheckboxOption>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 3: Automation */}
            {currentSection === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gialoma-gold border-b-2 border-gray-100 pb-4">
                  Automatización
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="text-lg font-semibold mb-4">
                      5. ¿Cuántos procesos manuales repetitivos realiza tu equipo semanalmente?
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="0-5" 
                        questionName="manual-processes"
                        selected={userResponses['manual-processes'] === '0-5'}
                      >
                        0-5 procesos
                      </OptionButton>
                      <OptionButton 
                        value="6-15" 
                        questionName="manual-processes"
                        selected={userResponses['manual-processes'] === '6-15'}
                      >
                        6-15 procesos
                      </OptionButton>
                      <OptionButton 
                        value="16-30" 
                        questionName="manual-processes"
                        selected={userResponses['manual-processes'] === '16-30'}
                      >
                        16-30 procesos
                      </OptionButton>
                      <OptionButton 
                        value="30+" 
                        questionName="manual-processes"
                        selected={userResponses['manual-processes'] === '30+'}
                      >
                        Más de 30 procesos
                      </OptionButton>
                    </div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold mb-4">
                      6. ¿Tienes experiencia previa con automatización?
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="Ninguna" 
                        questionName="automation-experience"
                        selected={userResponses['automation-experience'] === 'Ninguna'}
                      >
                        Ninguna experiencia
                      </OptionButton>
                      <OptionButton 
                        value="Básica" 
                        questionName="automation-experience"
                        selected={userResponses['automation-experience'] === 'Básica'}
                      >
                        Experiencia básica
                      </OptionButton>
                      <OptionButton 
                        value="Intermedia" 
                        questionName="automation-experience"
                        selected={userResponses['automation-experience'] === 'Intermedia'}
                      >
                        Experiencia intermedia
                      </OptionButton>
                      <OptionButton 
                        value="Avanzada" 
                        questionName="automation-experience"
                        selected={userResponses['automation-experience'] === 'Avanzada'}
                      >
                        Experiencia avanzada
                      </OptionButton>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: Communication */}
            {currentSection === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gialoma-gold border-b-2 border-gray-100 pb-4">
                  Comunicación y Colaboración
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="text-lg font-semibold mb-4">
                      7. ¿Cómo se comunica tu equipo principalmente?
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="Email" 
                        questionName="communication-method"
                        selected={userResponses['communication-method'] === 'Email'}
                      >
                        Email
                      </OptionButton>
                      <OptionButton 
                        value="WhatsApp" 
                        questionName="communication-method"
                        selected={userResponses['communication-method'] === 'WhatsApp'}
                      >
                        WhatsApp
                      </OptionButton>
                      <OptionButton 
                        value="Slack/Teams" 
                        questionName="communication-method"
                        selected={userResponses['communication-method'] === 'Slack/Teams'}
                      >
                        Slack/Teams
                      </OptionButton>
                      <OptionButton 
                        value="Presencial" 
                        questionName="communication-method"
                        selected={userResponses['communication-method'] === 'Presencial'}
                      >
                        Comunicación presencial
                      </OptionButton>
                    </div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold mb-4">
                      8. ¿Con qué frecuencia tu equipo trabaja de forma remota?
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="Nunca" 
                        questionName="remote-work"
                        selected={userResponses['remote-work'] === 'Nunca'}
                      >
                        Nunca
                      </OptionButton>
                      <OptionButton 
                        value="Ocasionalmente" 
                        questionName="remote-work"
                        selected={userResponses['remote-work'] === 'Ocasionalmente'}
                      >
                        Ocasionalmente
                      </OptionButton>
                      <OptionButton 
                        value="Híbrido" 
                        questionName="remote-work"
                        selected={userResponses['remote-work'] === 'Híbrido'}
                      >
                        Modelo híbrido
                      </OptionButton>
                      <OptionButton 
                        value="Siempre" 
                        questionName="remote-work"
                        selected={userResponses['remote-work'] === 'Siempre'}
                      >
                        Siempre remoto
                      </OptionButton>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 5: Data Analysis */}
            {currentSection === 5 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gialoma-gold border-b-2 border-gray-100 pb-4">
                  Análisis de Datos
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="text-lg font-semibold mb-4">
                      9. ¿Con qué frecuencia tu empresa utiliza datos para tomar decisiones?
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="Nunca" 
                        questionName="analisis-datos"
                        selected={userResponses['analisis-datos'] === 'Nunca'}
                      >
                        Nunca
                      </OptionButton>
                      <OptionButton 
                        value="Ocasionalmente" 
                        questionName="analisis-datos"
                        selected={userResponses['analisis-datos'] === 'Ocasionalmente'}
                      >
                        Ocasionalmente
                      </OptionButton>
                      <OptionButton 
                        value="Regularmente" 
                        questionName="analisis-datos"
                        selected={userResponses['analisis-datos'] === 'Regularmente'}
                      >
                        Regularmente
                      </OptionButton>
                    </div>
                    <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-400 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Ejemplo:</strong> Es como conducir en una ruta desconocida. Puede hacerlo basándose solo en su intuición (nunca usar datos), consultar ocasionalmente un mapa (uso ocasional), o utilizar un GPS moderno (uso regular de datos).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 6: Work-Life Balance */}
            {currentSection === 6 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gialoma-gold border-b-2 border-gray-100 pb-4">
                  Balance Trabajo-Vida
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="text-lg font-semibold mb-4">
                      11. ¿Con qué frecuencia tú y tu equipo trabajáis horas extra?
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="Nunca" 
                        questionName="horas-extra"
                        selected={userResponses['horas-extra'] === 'Nunca'}
                      >
                        Nunca
                      </OptionButton>
                      <OptionButton 
                        value="Ocasionalmente" 
                        questionName="horas-extra"
                        selected={userResponses['horas-extra'] === 'Ocasionalmente'}
                      >
                        Ocasionalmente
                      </OptionButton>
                      <OptionButton 
                        value="Frecuentemente" 
                        questionName="horas-extra"
                        selected={userResponses['horas-extra'] === 'Frecuentemente'}
                      >
                        Frecuentemente
                      </OptionButton>
                    </div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold mb-4">
                      12. ¿Tu empresa tiene políticas formales de desconexión digital?
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="No existen" 
                        questionName="desconexion-digital"
                        selected={userResponses['desconexion-digital'] === 'No existen'}
                      >
                        No existen
                      </OptionButton>
                      <OptionButton 
                        value="Existen pero no se aplican" 
                        questionName="desconexion-digital"
                        selected={userResponses['desconexion-digital'] === 'Existen pero no se aplican'}
                      >
                        Existen pero no se aplican
                      </OptionButton>
                      <OptionButton 
                        value="Existen y se aplican efectivamente" 
                        questionName="desconexion-digital"
                        selected={userResponses['desconexion-digital'] === 'Existen y se aplican efectivamente'}
                      >
                        Existen y se aplican efectivamente
                      </OptionButton>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 7: Priorities */}
            {currentSection === 7 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gialoma-gold border-b-2 border-gray-100 pb-4">
                  Prioridades
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="text-lg font-semibold mb-4">
                      13. ¿Qué áreas consideras prioritarias para automatizar?
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {['Administración', 'Ventas', 'Marketing', 'Servicio al cliente', 'RRHH', 'Finanzas', 'Logística', 'Producción'].map(area => (
                        <CheckboxOption key={area} value={area} questionName="areas-prioritarias">
                          {area}
                        </CheckboxOption>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold mb-4">
                      14. ¿Qué tipo de tareas generan mayor frustración en tu equipo?
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Entrada manual de datos', 'Generación de informes', 'Comunicación entre departamentos', 'Seguimiento de proyectos', 'Gestión documental'].map(task => (
                        <CheckboxOption key={task} value={task} questionName="tareas-frustrantes">
                          {task}
                        </CheckboxOption>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 8: Objectives */}
            {currentSection === 8 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gialoma-gold border-b-2 border-gray-100 pb-4">
                  Objetivos
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="text-lg font-semibold mb-4">
                      15. ¿Cuál es vuestro principal objetivo con la digitalización?
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {['Reducir costos', 'Aumentar productividad', 'Mejorar satisfacción laboral', 'Reducir errores', 'Acelerar tiempo de respuesta', 'Mejorar experiencia del cliente'].map(objective => (
                        <CheckboxOption key={objective} value={objective} questionName="objetivos-digitalizacion">
                          {objective}
                        </CheckboxOption>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold mb-4">
                      16. ¿Qué presupuesto anual destináis a transformación digital? (como % de ingresos)
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <OptionButton 
                        value="0-2%" 
                        questionName="presupuesto"
                        selected={userResponses['presupuesto'] === '0-2%'}
                      >
                        0-2%
                      </OptionButton>
                      <OptionButton 
                        value="3-5%" 
                        questionName="presupuesto"
                        selected={userResponses['presupuesto'] === '3-5%'}
                      >
                        3-5%
                      </OptionButton>
                      <OptionButton 
                        value="6-10%" 
                        questionName="presupuesto"
                        selected={userResponses['presupuesto'] === '6-10%'}
                      >
                        6-10%
                      </OptionButton>
                      <OptionButton 
                        value="+10%" 
                        questionName="presupuesto"
                        selected={userResponses['presupuesto'] === '+10%'}
                      >
                        +10%
                      </OptionButton>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
              {currentSection > 1 && (
                <Button 
                  variant="outline" 
                  onClick={prevSection}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </Button>
              )}
              
              <div className="ml-auto">
                <Button 
                  onClick={nextSection}
                  className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white flex items-center gap-2"
                >
                  {currentSection === totalSections ? 'Ver resultados' : 'Siguiente'}
                  {currentSection < totalSections && <ArrowRight className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalMaturityEvaluation;