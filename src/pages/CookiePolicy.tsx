
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-36 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gialoma-black">Cookie Policy</h1>
          <p className="text-gialoma-darkgray mb-6">Last Updated: April 18, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">1. Introduction</h2>
            <p className="text-gialoma-darkgray mb-4">
              This Cookie Policy explains how Gialoma ("we," "us," or "our") handles cookies and similar technologies on our website 
              (the "Website"). We believe in transparency regarding data practices, which is why we're providing this policy even though 
              we currently do not use cookies on our Website. This policy has been developed in strict compliance with applicable European, 
              Spanish, and Italian regulations.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">2. Our No-Cookie Approach</h2>
            <p className="text-gialoma-darkgray mb-4">
              We have designed our Website to function without the use of cookies or similar tracking technologies. This means:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>We do not place any cookies on your device when you visit our Website</li>
              <li>We do not use similar technologies such as web beacons, pixels, or local storage to collect or store information about your browsing behavior</li>
              <li>We do not use third-party services that may place cookies on your device</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">3. Regulatory Framework</h2>
            <p className="text-gialoma-darkgray mb-4">
              This Cookie Policy complies with the following regulations:
            </p>
            
            <h3 className="text-xl font-medium mb-2 text-gialoma-black">3.1 European Union Regulations</h3>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>General Data Protection Regulation (GDPR) (EU) 2016/679</li>
              <li>ePrivacy Directive 2002/58/EC (as amended by Directive 2009/136/EC)</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-2 text-gialoma-black">3.2 Spanish Regulations</h3>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE)</li>
              <li>Organic Law 3/2018, of December 5, on Personal Data Protection and Guarantee of Digital Rights (LOPDGDD)</li>
              <li>Guidelines from the Spanish Data Protection Agency (AEPD)</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-2 text-gialoma-black">3.3 Italian Regulations</h3>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Legislative Decree 196/2003 (Italian Privacy Code) as amended by Legislative Decree 101/2018</li>
              <li>Guidelines from the Italian Data Protection Authority (Garante per la protezione dei dati personali)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">4. What Are Cookies?</h2>
            <p className="text-gialoma-darkgray mb-4">
              For informational purposes: Cookies are small text files that websites typically store on a user's device 
              (computer, tablet, or mobile) when they visit. They allow websites to recognize devices and remember certain 
              information about visits, such as user preferences and actions. While many websites rely on cookies for 
              functionality, analytics, and advertising purposes, our Website has been designed to provide a complete 
              experience without them.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">5. Data Controller Information</h2>
            <p className="text-gialoma-darkgray mb-4">
              The Data Controller for any personal information that may be processed through other means on our Website is:
            </p>
            <address className="not-italic text-gialoma-darkgray mb-4">
              Gialoma Life Solutions<br />
              Email: gialomals@gmail.com<br />
              Phone: +34 605 865 631 / +39 320 070 8093
            </address>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">6. Your Rights Under Data Protection Regulations</h2>
            <p className="text-gialoma-darkgray mb-4">
              Even though we do not use cookies, we respect and uphold your data protection rights under the GDPR, LOPDGDD, 
              and Italian Privacy Code, including the rights to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Access personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-gialoma-darkgray">
              To exercise any of these rights regarding any personal data we may collect through other means, 
              please contact us at gialomals@gmail.com.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">7. Browser Settings</h2>
            <p className="text-gialoma-darkgray mb-4">
              Since our Website does not use cookies, you do not need to adjust your browser settings to block cookies 
              when visiting our site. However, for your general browsing experience on other websites, most web browsers 
              allow you to manage cookie preferences through their settings.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">8. Future Changes</h2>
            <p className="text-gialoma-darkgray mb-4">
              While we currently do not use cookies, we may introduce them in the future if needed to improve our Website's 
              functionality or services. Should this occur:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>We will update this Cookie Policy accordingly</li>
              <li>We will implement a compliant cookie consent mechanism that meets the specific requirements of European, 
                  Spanish, and Italian regulations, including:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Clear and visible "Accept," "Reject," and "Configure" buttons of equal prominence</li>
                  <li>No pre-checked boxes for non-essential cookies</li>
                  <li>No "cookie walls" that block access to content without consent</li>
                  <li>No implied consent through continued browsing</li>
                  <li>Layered information as recommended by both the AEPD and the Garante</li>
                </ul>
              </li>
              <li>We will notify visitors of the change through a prominent notice on our Website</li>
              <li>We will obtain appropriate consent before placing any non-essential cookies</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">9. Additional Information for Spanish Users</h2>
            <p className="text-gialoma-darkgray mb-4">
              In accordance with Article 22.2 of the LSSI-CE, we inform you that even though we do not currently use cookies, 
              we remain committed to providing transparent information about our data practices. We acknowledge the specific 
              requirements established by the Spanish Data Protection Agency (AEPD) regarding cookie management and will 
              implement them should we use cookies in the future.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">10. Additional Information for Italian Users</h2>
            <p className="text-gialoma-darkgray mb-4">
              In accordance with the guidelines issued by the Italian Data Protection Authority (Garante per la protezione dei 
              dati personali), we confirm that we do not use profiling tools or analytics technologies that would require 
              specific user consent. We adhere to the principles of data minimization and privacy by design as required by 
              Italian privacy legislation.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">11. Contact Us</h2>
            <p className="text-gialoma-darkgray mb-4">
              If you have any questions about this Cookie Policy or our data practices, please contact us at:
            </p>
            <address className="not-italic text-gialoma-darkgray mb-4">
              Gialoma Life Solutions<br />
              Email: gialomals@gmail.com<br />
              Phone: +34 605 865 631 / +39 320 070 8093
            </address>
            <p className="text-gialoma-darkgray mb-4">
              You have the right to lodge a complaint with the competent supervisory authority:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>In the European Union: Your national Data Protection Authority</li>
              <li>In Spain: The Spanish Data Protection Agency (www.aepd.es)</li>
              <li>In Italy: The Italian Data Protection Authority (www.garanteprivacy.it)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">12. Policy Updates</h2>
            <p className="text-gialoma-darkgray">
              This Cookie Policy may be updated periodically to reflect changes in legal requirements or our practices. 
              The latest version will always be available on our Website, with the "Last Updated" date at the top of the policy.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
