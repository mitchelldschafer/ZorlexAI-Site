import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mldnpokp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Discuss Your AI Project
          </h2>
          
          <p className="text-neutral mb-8 max-w-lg">
            Whether you're looking to automate processes, implement AI solutions, or simply explore the possibilities, we're here to help. Let's connect and discuss how we can transform your business.
          </p>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={20} />
              <span className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center">
              <AlertCircle className="text-red-600 mr-2" size={20} />
              <span className="text-red-800">Sorry, there was an error sending your message. Please try again.</span>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-1">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary flex items-center justify-center w-full sm:w-auto ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="ml-2" />
                </>
              )}
            </button>
          </form>

          {/* LinkedIn Connection */}
          <div className="mt-8 pt-8 border-t border-neutral-light/30 text-center">
            <p className="text-neutral mb-4">
              Or connect with us directly on LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/mitchell-schafer-4972a615b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#0077B5] text-white px-6 py-3 rounded-md font-medium hover:bg-[#005885] transition-colors duration-300"
            >
              <Linkedin size={20} className="mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;