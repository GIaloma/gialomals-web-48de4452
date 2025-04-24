
import React, { useEffect } from 'react';
import PolicyNavbar from '../components/PolicyNavbar';
import PolicyFooter from '../components/PolicyFooter';

const TermsOfService = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" id="terms-of-service-top">
      <PolicyNavbar />
      <main className="flex-grow pt-36 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gialoma-black">Terms of Service</h1>
          <p className="text-gialoma-darkgray mb-6">Last Updated: April 24, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">1. Introduction</h2>
            <p className="text-gialoma-darkgray mb-4">
              Welcome to Gialoma Life Solutions. These Terms of Service ("Terms") govern your use of our website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use our Services.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              These Terms constitute a legally binding agreement between you and Gialoma Life Solutions ("we," "us," or "our"). These Terms comply with applicable European Union laws, including but not limited to the Consumer Rights Directive (2011/83/EU), the E-Commerce Directive (2000/31/EC), and the General Data Protection Regulation (GDPR).
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">2. Service Description</h2>
            <p className="text-gialoma-darkgray mb-4">
              Gialoma Life Solutions provides technology solutions, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Process automation</li>
              <li>Web design and development</li>
              <li>AI virtual assistants and chatbots</li>
              <li>Personalized tech consulting</li>
              <li>Business optimization and reporting</li>
              <li>Digital visibility services</li>
            </ul>
            <p className="text-gialoma-darkgray mb-4">
              The specific features, functionalities, and deliverables will be detailed in a separate agreement for each project or service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">3. User Eligibility</h2>
            <p className="text-gialoma-darkgray mb-4">
              To use our Services, you must:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Be at least 18 years old or the age of majority in your jurisdiction, whichever is greater</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using our Services under applicable laws</li>
            </ul>
            <p className="text-gialoma-darkgray mb-4">
              If you are accessing or using our Services on behalf of a business or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">4. User Accounts</h2>
            <p className="text-gialoma-darkgray mb-4">
              Some of our Services may require you to create an account. When you create an account, you must provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We cannot be held liable for any loss or damage arising from your failure to comply with these requirements.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">5. Intellectual Property Rights</h2>
            <p className="text-gialoma-darkgray mb-4">
              5.1 <strong>Our Intellectual Property:</strong> All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the design, selection, and arrangement thereof, are owned by us, our licensors, or other providers and are protected by copyright, trademark, patent, and other intellectual property laws.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              5.2 <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for their intended purposes in accordance with these Terms. This license does not include the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Modify, reproduce, distribute, publicly display, publicly perform, or create derivative works based on our Services or their content</li>
              <li>Use any data mining, robots, or similar data gathering and extraction methods</li>
              <li>Use our Services for any commercial purpose without our prior written consent</li>
              <li>Remove any copyright, trademark, or other proprietary notices</li>
            </ul>
            <p className="text-gialoma-darkgray mb-4">
              5.3 <strong>Your Content:</strong> Any content you submit to our Services remains your property. By submitting content, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your content in connection with providing and promoting our Services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">6. User Conduct</h2>
            <p className="text-gialoma-darkgray mb-4">
              When using our Services, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe the intellectual property rights of others</li>
              <li>Transmit any material that is defamatory, offensive, harassing, or otherwise objectionable</li>
              <li>Interfere with or disrupt the integrity or performance of our Services</li>
              <li>Attempt to gain unauthorized access to our Services or related systems</li>
              <li>Use our Services to distribute malware, viruses, or other malicious code</li>
              <li>Collect or harvest any information from our Services without our consent</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">7. Fees and Payments</h2>
            <p className="text-gialoma-darkgray mb-4">
              7.1 <strong>Pricing:</strong> Fees for our Services will be specified in a separate agreement or on our website. All fees are quoted in euros (EUR) unless otherwise stated.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              7.2 <strong>Payment:</strong> Payment terms will be outlined in the relevant service agreement. You agree to provide accurate billing information and authorize us to charge the designated payment method for all fees incurred.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              7.3 <strong>Taxes:</strong> All fees are exclusive of applicable taxes (including VAT or sales tax), which you are responsible for paying.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              7.4 <strong>Refunds:</strong> Our refund policy will be specified in the relevant service agreement. For digital products, you acknowledge that the statutory right of withdrawal (cooling-off period) may not apply once delivery has begun, in accordance with Article 16(m) of the Consumer Rights Directive.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">8. Termination</h2>
            <p className="text-gialoma-darkgray mb-4">
              8.1 <strong>By You:</strong> You may terminate your use of our Services at any time by discontinuing use or by following the termination procedures specified in the relevant service agreement.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              8.2 <strong>By Us:</strong> We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              8.3 <strong>Effect of Termination:</strong> Upon termination, your right to use our Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">9. Disclaimers and Warranties</h2>
            <p className="text-gialoma-darkgray mb-4">
              9.1 <strong>Service Warranty:</strong> We warrant that our Services will be performed with reasonable skill and care. If we fail to comply with this warranty, we will, at our option, either (a) re-perform the relevant Services at no additional cost to you or (b) refund the portion of the fees attributable to the non-conforming Services.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              9.2 <strong>As-Is Provision:</strong> Except as expressly provided in these Terms, our Services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              9.3 <strong>Disclaimer:</strong> We do not warrant that our Services will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected. We cannot guarantee specific results from the use of our Services.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              Nothing in these Terms excludes or limits our liability for death or personal injury arising from our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by applicable law.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">10. Limitation of Liability</h2>
            <p className="text-gialoma-darkgray mb-4">
              To the fullest extent permitted by applicable law, in no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Your access to or use of, or inability to access or use, our Services</li>
              <li>Any conduct or content of any third party on our Services</li>
              <li>Any content obtained from our Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="text-gialoma-darkgray mb-4">
              Our total liability to you for any and all claims arising under these Terms or your use of our Services shall not exceed the amount paid by you for the Services giving rise to the claim during the twelve (12) months preceding the event giving rise to the claim.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">11. Indemnification</h2>
            <p className="text-gialoma-darkgray mb-4">
              You agree to indemnify, defend, and hold harmless Gialoma Life Solutions and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gialoma-darkgray space-y-2">
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights, including intellectual property rights</li>
              <li>Any content submitted by you</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">12. Governing Law and Dispute Resolution</h2>
            <p className="text-gialoma-darkgray mb-4">
              12.1 <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of Spain, without regard to its conflict of law principles.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              12.2 <strong>EU Consumer Rights:</strong> If you are a consumer residing in the European Union, you will benefit from any mandatory provisions of the law of the country in which you reside. Nothing in these Terms affects your rights as a consumer to rely on such mandatory provisions of local law.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              12.3 <strong>Dispute Resolution:</strong> Any dispute arising out of or in connection with these Terms shall be subject to the non-exclusive jurisdiction of the courts of Spain. EU consumers may also bring proceedings in their country of residence.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              12.4 <strong>Alternative Dispute Resolution:</strong> In accordance with the EU Directive on consumer ADR and the Regulation on consumer ODR, we inform EU consumers that they can use the European Commission's Online Dispute Resolution platform for resolving disputes: <a href="https://ec.europa.eu/consumers/odr" className="text-gialoma-gold hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">13. Changes to Terms</h2>
            <p className="text-gialoma-darkgray mb-4">
              We reserve the right to modify these Terms at any time. If we make material changes, we will provide notice through our Services or by other means. Your continued use of our Services after the effective date of the revised Terms constitutes your acceptance of them.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              For changes to these Terms that materially affect your rights or obligations, we will provide at least 30 days' notice before the changes take effect. If you do not agree to the modified Terms, you should discontinue your use of our Services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">14. Miscellaneous</h2>
            <p className="text-gialoma-darkgray mb-4">
              14.1 <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding your use of our Services and supersede all prior agreements and understandings.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              14.2 <strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              14.3 <strong>No Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              14.4 <strong>Assignment:</strong> You may not assign or transfer these Terms without our prior written consent, but we may assign or transfer these Terms without restriction.
            </p>
            <p className="text-gialoma-darkgray mb-4">
              14.5 <strong>Force Majeure:</strong> We shall not be liable for any failure to perform our obligations where such failure is a result of events beyond our reasonable control (including but not limited to natural disasters, acts of terrorism, civil unrest, governmental action, or internet disturbance).
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">15. Contact Information</h2>
            <p className="text-gialoma-darkgray mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic text-gialoma-darkgray mb-4">
              Gialoma Life Solutions<br />
              Email: gialomals@gmail.com<br />
              Phone: +34 605 865 631 / +39 320 070 8093
            </address>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-gialoma-black">16. Acknowledgment</h2>
            <p className="text-gialoma-darkgray mb-4">
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </section>
        </div>
      </main>
      <PolicyFooter />
    </div>
  );
};

export default TermsOfService;
