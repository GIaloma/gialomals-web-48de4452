
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';

const CTA = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    employees: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    // Reset form after simulating submission
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        business: '',
        employees: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="get-started" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 gold-gradient opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to take back your time?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let us show you how our technology solutions can transform your business operations and free up your valuable time.
          </p>
          
          {!showForm && !submitted ? (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gialoma-black hover:bg-gialoma-darkgray text-white text-lg px-8 py-6">
                Schedule a Demo
              </Button>
              <Button 
                variant="outline" 
                className="border-transparent text-lg px-8 py-6 bg-black text-white hover:bg-gray-900"
                onClick={() => setShowForm(true)}
              >
                Digitalize Your Business
              </Button>
            </div>
          ) : submitted ? (
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gialoma-gold mb-2">Thank You!</h3>
              <p className="text-gray-700">
                We've received your request. Our team will analyze your business needs and contact you shortly.
              </p>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gialoma-gold">Business Digitalization Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Your Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full" 
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="business" className="text-gray-700">Business Type</Label>
                    <Input 
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees" className="text-gray-700">Number of Employees</Label>
                    <select 
                      id="employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="1-5">1-5</option>
                      <option value="6-20">6-20</option>
                      <option value="21-50">21-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">What processes would you like to digitalize?</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[100px]" 
                    required
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button 
                    type="submit"
                    className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
                  >
                    Submit Request
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
