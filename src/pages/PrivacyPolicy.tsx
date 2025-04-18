
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gialoma-black">Privacy Policy</h1>
          <p className="text-gialoma-darkgray mb-6">Last Updated: April 18, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">1. Introduction</h2>
            <p className="text-gialoma-darkgray mb-4">
              We are committed to protecting your personal data and respecting your privacy. We collect and process personal data pursuant to Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation).
            </p>
            <p className="text-gialoma-darkgray mb-4">
              This privacy policy explains:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Why we process your data</li>
              <li>How we collect and process your data</li>
              <li>Who has access to your data</li>
              <li>How we protect your data</li>
              <li>Your rights as a data subject</li>
              <li>How long we keep your data</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">2. Why Do We Process Your Personal Data?</h2>
            <p className="text-gialoma-darkgray mb-4">
              We process your personal data to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Provide our services to you</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
              <li>Communicate with you about our services</li>
              <li>Handle your inquiries and requests</li>
              <li>Administer our website</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">3. Data Controller and Contact Information</h2>
            <p className="text-gialoma-darkgray mb-4">
              The Data Controller for the processing of your personal data is:
            </p>
            <address className="not-italic text-gialoma-darkgray mb-4">
              Gialoma Life Solutions<br />
              Email: gialomals@gmail.com<br />
              Phone: +34 605 865 631 / +39 320 070 8093
            </address>
            <p className="text-gialoma-darkgray mb-4">
              Data Protection Officer:<br />
              Email: gialomals@gmail.com
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">4. What Personal Data Do We Collect?</h2>
            <p className="text-gialoma-darkgray mb-4">
              Depending on your interaction with us, we may collect:
            </p>
            
            <h3 className="text-xl font-medium mb-2 text-gialoma-black">4.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Contact information (name, email address, telephone number)</li>
              <li>Account information (username, password)</li>
              <li>Communications with us (inquiries, feedback)</li>
              <li>Survey responses</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-2 text-gialoma-black">4.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>IP address (for security reasons)</li>
              <li>Device information</li>
              <li>Browser type and settings</li>
              <li>Date and time of your visit</li>
              <li>Pages you visit on our website</li>
              <li>Cookies and similar technologies (see our Cookie Policy)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">5. Legal Basis for Processing</h2>
            <p className="text-gialoma-darkgray mb-4">
              We process your personal data based on one or more of the following legal grounds:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Your consent</li>
              <li>Performance of a contract with you</li>
              <li>Compliance with a legal obligation</li>
              <li>Our legitimate interests (which do not override your fundamental rights and freedoms)</li>
              <li>Protection of your vital interests or those of another person</li>
              <li>Performance of a task carried out in the public interest</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">6. How Long Do We Keep Your Personal Data?</h2>
            <p className="text-gialoma-darkgray mb-4">
              We retain your personal data only for as long as necessary for the purposes for which it was collected, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>As long as needed to provide our services to you</li>
              <li>As required to comply with legal obligations</li>
              <li>As necessary to resolve disputes or enforce our agreements</li>
            </ul>
            <p className="text-gialoma-darkgray mb-4">
              When personal data is no longer necessary for these purposes, it is securely deleted or anonymized.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">7. Who Has Access to Your Personal Data?</h2>
            <p className="text-gialoma-darkgray mb-4">
              Access to your personal data is limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Authorized staff members who need it to perform their duties</li>
              <li>Service providers acting as processors, bound by contractual obligations to keep personal data confidential</li>
              <li>Public authorities, when required by law</li>
            </ul>
            <p className="text-gialoma-darkgray mb-4">
              We do not sell, rent, or lease your personal data to third parties.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">8. Transfer of Personal Data Outside the EU/EEA</h2>
            <p className="text-gialoma-darkgray mb-4">
              If we transfer your personal data outside the European Economic Area (EEA), we ensure that appropriate safeguards are in place to protect your data, such as:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Adequacy decisions by the European Commission</li>
              <li>Standard Contractual Clauses</li>
              <li>Binding Corporate Rules</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">9. Your Rights as a Data Subject</h2>
            <p className="text-gialoma-darkgray mb-4">
              Under the GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li><strong>Right to information:</strong> You have the right to be informed about how we process your personal data.</li>
              <li><strong>Right of access:</strong> You can request access to your personal data.</li>
              <li><strong>Right to rectification:</strong> You can request correction of inaccurate personal data.</li>
              <li><strong>Right to erasure:</strong> You can request deletion of your personal data under certain conditions.</li>
              <li><strong>Right to restriction of processing:</strong> You can request that we restrict processing of your data.</li>
              <li><strong>Right to data portability:</strong> You can request to receive your data in a structured, commonly used format.</li>
              <li><strong>Right to object:</strong> You can object to our processing of your personal data.</li>
              <li><strong>Rights related to automated decision-making:</strong> You have rights related to automated decision-making, including profiling.</li>
            </ul>
            <p className="text-gialoma-darkgray mb-4">
              To exercise these rights, please contact our Data Protection Officer at gialomals@gmail.com.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">10. Security of Your Personal Data</h2>
            <p className="text-gialoma-darkgray mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Encryption of personal data where appropriate</li>
              <li>Regular testing and evaluation of security measures</li>
              <li>Restricted access to personal data</li>
              <li>Staff training on data protection</li>
              <li>Secure servers and networks</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">11. Cookies and Similar Technologies</h2>
            <p className="text-gialoma-darkgray mb-4">
              Our website uses cookies and similar technologies to enhance your browsing experience. For detailed information, please see our <a href="/cookie-policy" className="text-gialoma-gold hover:underline">Cookie Policy</a>.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">12. Changes to This Privacy Policy</h2>
            <p className="text-gialoma-darkgray mb-4">
              We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes and, where required by law, seek your consent.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">13. Complaints</h2>
            <p className="text-gialoma-darkgray mb-4">
              If you have concerns about how we process your personal data, please contact us first at gialomals@gmail.com. You also have the right to lodge a complaint with your local data protection authority.
            </p>
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
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">14. Contact Us</h2>
            <p className="text-gialoma-darkgray mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <address className="not-italic text-gialoma-darkgray mb-4">
              Gialoma Life Solutions<br />
              Email: gialomals@gmail.com<br />
              Phone: +34 605 865 631 / +39 320 070 8093
            </address>
          </section>
        </div>
      </main>
      <PolicyFooter />
    </div>
  );
};

export default PrivacyPolicy;
