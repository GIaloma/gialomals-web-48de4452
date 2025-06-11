import React, { useEffect } from 'react';
import PolicyNavbar from '../components/PolicyNavbar';
import PolicyFooter from '../components/PolicyFooter';

const CookiePolicy = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" id="cookie-policy-top">
      <PolicyNavbar />
      <main className="flex-grow pt-36 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gialoma-black">Política de Cookies</h1>
          <p className="text-gialoma-darkgray mb-6">Última actualización: 8 de junio de 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Información sobre el Responsable</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray mb-2"><strong>Titular:</strong> Gialoma Life Solutions - NIF: 53045944D</p>
              <p className="text-gialoma-darkgray mb-2"><strong>Domicilio social:</strong> Saco, 19 45220 Yeles Toledo</p>
              <p className="text-gialoma-darkgray mb-2"><strong>Teléfono:</strong> 605865631</p>
              <p className="text-gialoma-darkgray mb-2"><strong>Correo electrónico:</strong> gialoma@gialoma.com</p>
              <p className="text-gialoma-darkgray"><strong>Página web:</strong> www.gialoma.com</p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">¿Qué son las cookies?</h2>
            <p className="text-gialoma-darkgray mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, smartphone, etc.) 
              cuando visita nuestro sitio web. Estas cookies nos permiten reconocer su navegador y, si tiene una cuenta registrada, 
              asociarla con ella.
            </p>
            <p className="text-gialoma-darkgray mb-4">Las cookies nos ayudan a:</p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Hacer que nuestro sitio web funcione como usted espera</li>
              <li>Recordar sus preferencias durante y entre visitas</li>
              <li>Mejorar la velocidad/seguridad del sitio</li>
              <li>Permitir que comparta páginas con redes sociales como Facebook</li>
              <li>Mejorar continuamente nuestro sitio web para usted</li>
              <li>Mostrar anuncios basados en sus intereses en otros sitios web</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Tipos de cookies que utilizamos</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-gialoma-black">1. Cookies Técnicas (Necesarias)</h3>
                <p className="text-gialoma-darkgray mb-3">
                  <strong>Finalidad:</strong> Permiten al usuario la navegación a través del sitio web y la utilización de las diferentes 
                  opciones o servicios que en él existen.
                </p>
                <p className="text-gialoma-darkgray mb-3">
                  <strong>Base legal:</strong> Interés legítimo del responsable (artículo 6.1.f RGPD)
                </p>
                <p className="text-gialoma-darkgray mb-3">
                  <strong>Plazo de conservación:</strong> Sesión (se eliminan al cerrar el navegador)
                </p>
                <p className="text-gialoma-darkgray mb-2"><strong>Ejemplos:</strong></p>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-1">
                  <li>Control de tráfico y comunicación de datos</li>
                  <li>Identificación de la sesión</li>
                  <li>Acceso a partes de acceso restringido</li>
                  <li>Recordar elementos de un pedido</li>
                  <li>Realizar el proceso de compra de un pedido</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-gialoma-black">2. Cookies de Análisis (Google Analytics 4)</h3>
                <p className="text-gialoma-darkgray mb-3">
                  <strong>Finalidad:</strong> Permiten el seguimiento y análisis del comportamiento de los usuarios en el sitio web 
                  para mejorar el funcionamiento del mismo.
                </p>
                <p className="text-gialoma-darkgray mb-3">
                  <strong>Base legal:</strong> Consentimiento del usuario (artículo 6.1.a RGPD)
                </p>
                <p className="text-gialoma-darkgray mb-3">
                  <strong>Plazo de conservación:</strong> Hasta 26 meses
                </p>
                <p className="text-gialoma-darkgray mb-3">
                  <strong>Proveedor:</strong> Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, Estados Unidos)
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Cookie</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_ga</td>
                        <td className="border border-gray-300 px-4 py-2">2 años</td>
                        <td className="border border-gray-300 px-4 py-2">Distingue a los usuarios</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_ga_*</td>
                        <td className="border border-gray-300 px-4 py-2">2 años</td>
                        <td className="border border-gray-300 px-4 py-2">Persiste el estado de sesión</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_gid</td>
                        <td className="border border-gray-300 px-4 py-2">24 horas</td>
                        <td className="border border-gray-300 px-4 py-2">Distingue a los usuarios</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">_gat_gtag_*</td>
                        <td className="border border-gray-300 px-4 py-2">1 minuto</td>
                        <td className="border border-gray-300 px-4 py-2">Limita la velocidad de peticiones</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gialoma-darkgray mt-4 mb-2">
                  <strong>Transferencia internacional:</strong> Los datos pueden transferirse a Estados Unidos. Google LLC está 
                  adherido al Marco de Privacidad de Datos UE-EE.UU. y aplica Cláusulas Contractuales Tipo de la Comisión Europea.
                </p>
                <p className="text-gialoma-darkgray">
                  <strong>Más información:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gialoma-gold hover:underline">Política de Privacidad de Google</a>
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-gialoma-black">3. Cookies de Personalización</h3>
                <p className="text-gialoma-darkgray mb-3">
                  <strong>Finalidad:</strong> Permiten recordar información para que el usuario acceda al servicio con determinadas 
                  características que pueden diferenciar su experiencia de la de otros usuarios.
                </p>
                <p className="text-gialoma-darkgray mb-3">
                  <strong>Base legal:</strong> Consentimiento del usuario (artículo 6.1.a RGPD)
                </p>
                <p className="text-gialoma-darkgray mb-2"><strong>Ejemplos:</strong></p>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-1">
                  <li>Idioma preferido</li>
                  <li>Configuración de accesibilidad</li>
                  <li>Preferencias de diseño</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Gestión de cookies</h2>
            
            <h3 className="text-xl font-medium mb-3 text-gialoma-black">Configuración del navegador</h3>
            <p className="text-gialoma-darkgray mb-4">
              Puede configurar su navegador para que rechace todas las cookies o para que le indique cuándo se está enviando una cookie. 
              Sin embargo, si rechaza las cookies, es posible que no pueda usar todas las funciones de este sitio web.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h4 className="text-lg font-medium mb-3 text-gialoma-black">Instrucciones por navegador:</h4>
              <div className="space-y-3">
                <div>
                  <strong className="text-gialoma-darkgray">Chrome:</strong>
                  <ol className="list-decimal pl-6 text-gialoma-darkgray mt-1">
                    <li>Haga clic en el menú Chrome (⋮) > Configuración</li>
                    <li>Vaya a "Privacidad y seguridad" > "Cookies y otros datos de sitios"</li>
                    <li>Configure según sus preferencias</li>
                  </ol>
                </div>
                <div>
                  <strong className="text-gialoma-darkgray">Firefox:</strong>
                  <ol className="list-decimal pl-6 text-gialoma-darkgray mt-1">
                    <li>Haga clic en el menú (☰) > Configuración</li>
                    <li>Vaya a "Privacidad y seguridad"</li>
                    <li>En la sección "Cookies y datos del sitio web", configure según sus preferencias</li>
                  </ol>
                </div>
                <div>
                  <strong className="text-gialoma-darkgray">Safari:</strong>
                  <ol className="list-decimal pl-6 text-gialoma-darkgray mt-1">
                    <li>Vaya a Preferencias > Privacidad</li>
                    <li>Configure la opción "Cookies y datos de sitios web"</li>
                  </ol>
                </div>
                <div>
                  <strong className="text-gialoma-darkgray">Edge:</strong>
                  <ol className="list-decimal pl-6 text-gialoma-darkgray mt-1">
                    <li>Haga clic en el menú (⋯) > Configuración</li>
                    <li>Vaya a "Cookies y permisos de sitio"</li>
                    <li>Configure según sus preferencias</li>
                  </ol>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-medium mb-3 text-gialoma-black">Herramientas de terceros</h3>
            <p className="text-gialoma-darkgray mb-4">También puede gestionar las cookies mediante herramientas online como:</p>
            <ul className="list-disc pl-6 text-gialoma-darkgray space-y-2">
              <li><a href="http://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer" className="text-gialoma-gold hover:underline">Your Online Choices</a></li>
              <li><a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-gialoma-gold hover:underline">Google Ads Settings</a></li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Consentimiento y retirada</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
              <h3 className="text-xl font-medium mb-3 text-gialoma-black">Otorgamiento del consentimiento</h3>
              <p className="text-gialoma-darkgray">
                Al hacer clic en "Aceptar todas las cookies" en nuestro banner, usted otorga su consentimiento libre, específico, 
                informado e inequívoco para el uso de cookies de análisis y personalización.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium mb-3 text-gialoma-black">Retirada del consentimiento</h3>
              <p className="text-gialoma-darkgray mb-3">Puede retirar su consentimiento en cualquier momento:</p>
              <ol className="list-decimal pl-6 text-gialoma-darkgray space-y-2">
                <li><strong>A través de nuestro banner:</strong> Haga clic en "Configurar cookies" para modificar sus preferencias</li>
                <li><strong>Configuración del navegador:</strong> Elimine las cookies existentes y configure su navegador para rechazar cookies futuras</li>
                <li><strong>Contacto directo:</strong> Envíenos un email a gialoma@gialoma.com solicitando la eliminación de sus cookies</li>
              </ol>
              <p className="text-gialoma-darkgray mt-3">
                La retirada del consentimiento no afectará a la licitud del tratamiento basada en el consentimiento previo a su retirada.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Derechos del usuario</h2>
            <p className="text-gialoma-darkgray mb-4">
              En relación con el tratamiento de sus datos a través de cookies, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li><strong>Acceso:</strong> Conocer qué datos tratamos sobre usted</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
              <li><strong>Limitación:</strong> Restringir determinados tratamientos</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
            </ul>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray mb-2">Para ejercer estos derechos, puede contactarnos en:</p>
              <ul className="list-disc pl-6 text-gialoma-darkgray space-y-1">
                <li><strong>Email:</strong> gialoma@gialoma.com</li>
                <li><strong>Dirección postal:</strong> Gialoma Life Solutions, Saco, 19 45220 Yeles Toledo</li>
                <li><strong>Asunto:</strong> "Ejercicio de Derechos LOPD"</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Autoridad de control</h2>
            <p className="text-gialoma-darkgray mb-4">
              Si considera que el tratamiento de sus datos no es adecuado, puede presentar una reclamación ante la Agencia Española 
              de Protección de Datos:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray mb-2"><strong>Agencia Española de Protección de Datos</strong></p>
              <p className="text-gialoma-darkgray mb-1">C/ Jorge Juan, 6</p>
              <p className="text-gialoma-darkgray mb-2">28001 Madrid</p>
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-gialoma-gold hover:underline">www.aepd.es</a>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Contacto</h2>
            <p className="text-gialoma-darkgray mb-4">Para cualquier consulta sobre esta Política de Cookies, puede contactarnos:</p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="text-gialoma-darkgray space-y-1">
                <li><strong>Email:</strong> gialoma@gialoma.com</li>
                <li><strong>Teléfono:</strong> 605865631</li>
                <li><strong>Dirección:</strong> Saco, 19 45220 Yeles Toledo</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Actualizaciones de esta política</h2>
            <p className="text-gialoma-darkgray">
              Podemos actualizar esta Política de Cookies ocasionalmente. Cuando lo hagamos, revisaremos la fecha de "última actualización" 
              en la parte superior de esta página y le notificaremos cualquier cambio material de acuerdo con la ley aplicable.
            </p>
          </section>
          
          <div className="bg-gialoma-beige p-6 rounded-lg">
            <p className="text-gialoma-darkgray text-sm italic">
              Esta Política de Cookies forma parte integral de la Política de Privacidad de Gialoma Life Solutions 
              y debe leerse conjuntamente con la misma.
            </p>
          </div>
        </div>
      </main>
      <PolicyFooter />
    </div>
  );
};

export default CookiePolicy;