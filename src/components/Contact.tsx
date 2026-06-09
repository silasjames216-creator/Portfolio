'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's talk about everything</h3>
            <p className="text-gray-600 mb-4">
              Feel free to reach out if you're interested in collaborating or just want to say hi.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900">Email</h4>
                <p className="text-gray-600">
                  <a href="mailto:Silasjames216@gmail.com" className="text-blue-600 hover:text-blue-800">
                    Silasjames216@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Phone</h4>
                <p className="text-gray-600">
                  <a href="tel:08100126860" className="text-blue-600 hover:text-blue-800">
                    08100126860
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Location</h4>
                <p className="text-gray-600">Adamawa, Yola Nigeria</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Social Media</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/silasjames216" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                  <a href="https://github.com/silasjames216-creator" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
