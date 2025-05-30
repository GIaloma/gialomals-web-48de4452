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

            {/* Section 6: Balance Trabajo-Vida */}
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

            {/* Section 7: Prioridades */}
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

            {/* Section 8: Objetivos */}
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