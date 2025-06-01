
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Bot, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
New message from Gialoma Life Solutions website

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from: ${window.location.href}
Date: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Madrid' })}
      `;

      // Create mailto link
      const mailtoLink = `mailto:gialoma@gialoma.com?subject=${encodeURIComponent('New message: ' + formData.subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contacts</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Have questions or ready to start your journey with Gialoma Life Solutions? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                    Your Name *
                  </label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full border-gray-300 focus:border-gialoma-gold focus:ring-gialoma-gold"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                    Email Address *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full border-gray-300 focus:border-gialoma-gold focus:ring-gialoma-gold"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                  Subject *
                </label>
                <Input 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  className="w-full border-gray-300 focus:border-gialoma-gold focus:ring-gialoma-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                  Message *
                </label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..." 
                  rows={5}
                  className="w-full border-gray-300 focus:border-gialoma-gold focus:ring-gialoma-gold"
                  required
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Phone className="h-6 w-6 text-gialoma-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-gialoma-black mb-1">Call Us / WhatsApp</h4>
                  <p className="text-gialoma-darkgray">+34 605 865 631<br/>+39 320 070 8093</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Mail className="h-6 w-6 text-gialoma-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-gialoma-black mb-1">Email Us</h4>
                  <p className="text-gialoma-darkgray">gialoma@gialoma.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gialoma-black mb-3 text-center">Business Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gialoma-darkgray">Monday - Friday:</span>
                  <span className="text-gialoma-black">9:00 - 18:00 CET</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Saturday - Sunday:</span>
                  <span>Closed</span>
                </div>
                
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <Bot className="h-5 w-5 text-gialoma-gold mt-1" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gialoma-black">Virtual Support Available 24/7</h5>
                      <p className="text-sm text-gialoma-darkgray">
                        Our virtual assistant and support system is available around the clock to help with your inquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {isSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-4 text-center">
            <div className="mb-4">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Message Sent!</h3>
            <p className="text-gialoma-darkgray mb-4">
              Your message has been sent successfully. We will contact you back as soon as possible.
            </p>
            <Button 
              onClick={() => setIsSuccess(false)}
              className="bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
