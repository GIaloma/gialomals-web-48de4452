import React, { useEffect } from 'react';
import PolicyNavbar from '../components/PolicyNavbar';
import PolicyFooter from '../components/PolicyFooter';

const PrivacyPolicy = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" id="privacy-policy-top">
      <PolicyNavbar />
      <main className="flex-grow pt-36 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gialoma-black">Política de Privacidad</h1>
          <p className="text-gialoma-darkgray mb-6">Última actualización: 8 de junio de 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Responsable del Tratamiento</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray mb-2"><strong>Titular:</strong> Gialoma Life Solutions - NIF: 53045944D</p>
              <p className="text-gialoma-darkgray mb-2"><strong>Domicilio social:</strong> Saco, 19 45220 Yeles Toledo</p>
              <p className="text-gialoma-darkgray mb-2"><strong>Teléfono:</strong> 605865631</p>
              <p className="text-gialoma-darkgray mb-2"><strong>Correo electrónico:</strong> gialoma@gialoma.com</p>
              <p className="text-gialoma-darkgray"><strong>Página web:</strong> www.gialoma.com</p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">¿Con qué finalidad tratamos sus datos personales?</h2>
            <p className="text-gialoma-darkgray mb-4">
              En Gialoma Life Solutions recabamos y tratamos su información personal con carácter general para gestionar la relación 
              que mantenemos con Ud. siendo las principales finalidades que tenemos identificadas las siguientes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Servicios Principales</h3>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-2">
                  <li>Gestión y contratación de los productos y servicios ofrecidos por nuestra empresa</li>
                  <li>Canalizar las solicitudes de información, sugerencias y reclamaciones</li>
                  <li>Prestar un servicio y realizar su facturación</li>
                  <li>Proporcionar servicio postventa</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Comunicaciones</h3>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-2">
                  <li>Mantenerle informado sobre eventos, ofertas, productos y servicios (con consentimiento)</li>
                  <li>Fidelizar a nuestros clientes/usuarios</li>
                  <li>Gestión de la relación con los potenciales clientes</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Recursos Humanos</h3>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-2">
                  <li>Gestión de la relación laboral, en el caso de nuestros empleados</li>
                  <li>Gestión de la selección de personal</li>
                  <li>Gestión de candidatos a un empleo en la empresa</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Proveedores</h3>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-2">
                  <li>Gestión de la relación comercial mantenida con nuestros proveedores</li>
                  <li>Gestión de pedidos y facturación</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">¿Cómo recabamos su información?</h2>
            <p className="text-gialoma-darkgray mb-4">
              Recabamos su información personal a través de diferentes medios, pero siempre será informado en el momento de la recogida 
              mediante cláusulas informativas sobre el responsable del tratamiento, la finalidad y la base legal del mismo, los destinatarios 
              de los datos y el periodo de conservación de su información, así como la forma en que puede ejercer los derechos que le asisten 
              en materia de protección de datos.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-gialoma-black">Información general que tratamos</h3>
                <p className="text-gialoma-darkgray mb-3">
                  En general, la información personal que tratamos se limita a:
                </p>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-2">
                  <li>Datos identificativos (nombre y apellidos, fecha de nacimiento, domicilio, DNI, teléfono y correo electrónico)</li>
                  <li>Servicios contratados y datos de pago y facturación</li>
                  <li>En casos de gestión y selección de personal: datos académicos y profesionales</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-gialoma-black">Redes sociales</h3>
                <p className="text-gialoma-darkgray mb-3">
                  Gialoma Life Solutions utiliza redes sociales y esta es otra forma de llegar a usted. La información recogida a través 
                  de los mensajes y comunicaciones que publica puede contener información personal que se encuentra disponible online y 
                  accesible al público.
                </p>
                <p className="text-gialoma-darkgray">
                  Estas redes sociales cuentan con sus propias políticas de privacidad donde se explica cómo utilizan y comparten su información, 
                  por lo que Gialoma Life Solutions le recomienda que las consulte antes de hacer uso de estas para confirmar que está de acuerdo 
                  con la forma en que su información es recogida, tratada y compartida.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Responsabilidad del usuario</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray mb-4">
                Al facilitarnos sus datos a través de canales electrónicos, el usuario garantiza que es mayor de 14 años y que los datos 
                facilitados a Gialoma Life Solutions son verdaderos, exactos, completos y actualizados.
              </p>
              <p className="text-gialoma-darkgray">
                A estos efectos, el usuario confirma que responde de la veracidad de los datos comunicados y que mantendrá convenientemente 
                actualizada dicha información de modo que responda a su situación real, haciéndose responsable de los datos falsos e inexactos 
                que pudiera proporcionar, así como de los daños y perjuicios, directos o indirectos, que pudieran derivarse.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">¿Cuánto conservamos su información?</h2>
            <p className="text-gialoma-darkgray mb-4">
              En Gialoma Life Solutions sólo conservamos su información por el periodo de tiempo necesario para cumplir con la finalidad 
              para la que fue recogida, dar cumplimiento a las obligaciones legales que nos vienen impuestas y atender las posibles 
              responsabilidades que pudieran derivar del cumplimiento de la finalidad por la que los datos fueron recabados.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Candidatos de empleo</h3>
                <p className="text-gialoma-darkgray">
                  Si quiere entrar a formar parte de nuestra plantilla y opta a uno de nuestros puestos de trabajo, los datos proporcionados 
                  pasarán a formar parte de nuestra bolsa de empleo y se conservarán mientras dure el proceso selectivo y por un máximo de 
                  2 años o hasta que Ud. ejerza su derecho de supresión.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Potenciales clientes</h3>
                <p className="text-gialoma-darkgray">
                  Si hemos recogido sus datos para dirigirnos a usted como potencial usuario de nuestros servicios o dar respuesta a una 
                  solicitud de información realizada por su parte, dichos datos serán conservados por un máximo de 3 años desde su recogida, 
                  pasando a eliminarse transcurrido dicho plazo si no se ha formalizado una relación contractual o en el momento en que así nos lo solicite.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Conservación general</h3>
                <p className="text-gialoma-darkgray">
                  En todo caso, y por regla general, mantendremos su información personal mientras exista una relación contractual que nos vincule 
                  o usted no ejerza su derecho de supresión y/o limitación del tratamiento, en cuyo caso, la información será bloqueada sin darle 
                  uso más allá de su conservación, mientras pueda ser necesaria para el ejercicio o defensa de reclamaciones o pudiera derivarse 
                  algún tipo de responsabilidad que tuviera que ser atendida.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">¿A quién comunicamos sus datos?</h2>
            <p className="text-gialoma-darkgray mb-4">
              En general, en Gialoma Life Solutions no compartimos su información personal, salvo aquellas cesiones que debemos realizar 
              en base a obligaciones legales impuestas.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Cesiones obligatorias</h3>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-2">
                  <li>Administración Tributaria (para cumplir obligaciones fiscales)</li>
                  <li>Administraciones Públicas, Jueces y Tribunales (para atender posibles responsabilidades)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Encargados del tratamiento</h3>
                <p className="text-gialoma-darkgray">
                  Para prestarle el servicio solicitado puede ser que terceras empresas, que actúan como proveedores nuestros, accedan a su 
                  información para llevar a cabo el servicio que les hemos contratado. Estos encargados acceden a sus datos siguiendo nuestras 
                  instrucciones y sin que puedan utilizarlos para una finalidad diferente y manteniendo la más estricta confidencialidad.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Transferencias internacionales de datos</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray">
                No existen transferencias internacionales de sus datos a países fuera del Espacio Económico Europeo (EEE), salvo las que 
                puedan realizarse a través de servicios como Google Analytics, que cuentan con las garantías adecuadas establecidas por la 
                Comisión Europea.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">¿Cuáles son sus derechos y cómo puede ejercerlos?</h2>
            <p className="text-gialoma-darkgray mb-4">
              La normativa en materia de protección de datos permite que pueda ejercer sus derechos de acceso, rectificación, supresión 
              y portabilidad de datos y oposición y limitación a su tratamiento, así como a no ser objeto de decisiones basadas únicamente 
              en el tratamiento automatizado de sus datos, cuando proceda.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Características del ejercicio</h3>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-2">
                  <li>Su ejercicio es <strong>gratuito</strong>, salvo solicitudes manifiestamente infundadas o excesivas</li>
                  <li>Puede ejercer los derechos <strong>directamente o por medio de representante</strong> legal o voluntario</li>
                  <li>Debemos responder en el <strong>plazo de un mes</strong>, prorrogable dos meses más según complejidad</li>
                  <li>Debe facilitarse por <strong>medios accesibles</strong> y preferiblemente electrónicos</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-3 text-gialoma-black">Sus derechos específicos</h3>
                <ul className="list-disc pl-6 text-gialoma-darkgray space-y-2">
                  <li><strong>Acceso:</strong> Conocer qué datos tratamos sobre usted</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                  <li><strong>Supresión:</strong> Solicitar la eliminación</li>
                  <li><strong>Oposición:</strong> Oponerse al tratamiento</li>
                  <li><strong>Limitación:</strong> Restringir el tratamiento</li>
                  <li><strong>Portabilidad:</strong> Recibir datos en formato estructurado</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium mb-3 text-gialoma-black">¿Cómo ejercer sus derechos?</h3>
              <p className="text-gialoma-darkgray mb-3">
                Para ejercer sus derechos Gialoma Life Solutions pone a su disposición los siguientes medios:
              </p>
              <ol className="list-decimal pl-6 text-gialoma-darkgray space-y-2">
                <li>Mediante solicitud escrita y firmada dirigida a <strong>Gialoma Life Solutions, Saco, 19 45220 Yeles Toledo</strong> Ref. Ejercicio de Derechos LOPD.</li>
                <li>Enviando formulario escaneado y firmado a la dirección de correo electrónico <strong>gialoma@gialoma.com</strong> indicando en el asunto <strong>Ejercicio de Derechos LOPD</strong>.</li>
              </ol>
              <p className="text-gialoma-darkgray mt-3">
                En ambos casos, deberá acreditar su identidad identificándose suficientemente por medios electrónicos o, en su defecto, 
                mediante solicitud debidamente firmada.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">¿Cómo protegemos su información?</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray mb-4">
                En Gialoma Life Solutions nos comprometemos a proteger su información personal.
              </p>
              <p className="text-gialoma-darkgray mb-4">
                Utilizamos medidas, controles y procedimientos de carácter físico, organizativo y tecnológico, razonablemente fiables y efectivos, 
                orientados a preservar la integridad y la seguridad de sus datos y garantizar su privacidad.
              </p>
              <p className="text-gialoma-darkgray mb-4">
                Además, todo el personal con acceso a los datos personales ha sido formado y tiene conocimiento de sus obligaciones con relación 
                a los tratamientos de sus datos personales.
              </p>
              <p className="text-gialoma-darkgray">
                Sin embargo, la seguridad absoluta no se puede garantizar y no existe ningún sistema de seguridad que sea impenetrable por lo que, 
                en el caso de cualquier información objeto de tratamiento y bajo nuestro control se viese comprometida como consecuencia de una 
                brecha de seguridad, tomaremos las medidas adecuadas para investigar el incidente, notificarlo a la Autoridad de Control y, 
                en su caso, a aquellos usuarios que se hubieran podido ver afectados.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Reclamaciones</h2>
            <p className="text-gialoma-darkgray mb-4">
              Especialmente si considera que no ha obtenido satisfacción plena en el ejercicio de sus derechos, le informamos que podrá 
              presentar una reclamación ante la autoridad nacional de control dirigiéndose a estos efectos a la Agencia Española de 
              Protección de Datos:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray mb-2"><strong>Agencia Española de Protección de Datos</strong></p>
              <p className="text-gialoma-darkgray mb-1">C/ Jorge Juan, 6</p>
              <p className="text-gialoma-darkgray mb-2">28001 Madrid</p>
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-gialoma-gold hover:underline">www.aepd.es</a>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Cookies</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray">
                Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Para información detallada sobre nuestro 
                uso de cookies, consulte nuestra <a href="/politica-cookies" className="text-gialoma-gold hover:underline">Política de Cookies</a>.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Cambios en esta política</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gialoma-darkgray">
                Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en nuestras prácticas o por otras 
                razones operacionales, legales o reglamentarias. Le notificaremos cualquier cambio importante y, cuando lo exija la ley, 
                buscaremos su consentimiento.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">Contacto</h2>
            <p className="text-gialoma-darkgray mb-4">
              Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de datos, contáctenos en:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <ul className="text-gialoma-darkgray space-y-1">
                <li><strong>Email:</strong> gialoma@gialoma.com</li>
                <li><strong>Teléfono:</strong> 605865631</li>
                <li><strong>Dirección:</strong> Saco, 19 45220 Yeles Toledo</li>
              </ul>
            </div>
          </section>
          
          <div className="bg-gialoma-beige p-6 rounded-lg">
            <p className="text-gialoma-darkgray text-sm italic">
              En cumplimiento del Reglamento (UE) 2016/679, General de Protección de Datos y de la Ley Orgánica 3/2018, 
              de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.
            </p>
          </div>
        </div>
      </main>
      <PolicyFooter />
    </div>
  );
};

export default PrivacyPolicy;