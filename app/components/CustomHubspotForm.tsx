"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomHubspotForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    company: '',
    jobtitle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Create the payload in the format HubSpot expects
      const payload = {
        fields: [
          { name: 'email', value: formData.email },
          { name: 'firstname', value: formData.firstname },
          { name: 'lastname', value: formData.lastname },
          { name: 'company', value: formData.company },
          { name: 'jobtitle', value: formData.jobtitle }
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      };

      // Send the form submission to your API route
      const response = await fetch('/api/hubspot-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitted(true);
      // Close the form after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Join the Beta</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium mb-1">First Name *</label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                required
                value={formData.firstname}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium mb-1">Last Name *</label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                value={formData.lastname}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            />
          </div>
          <div>
            <label htmlFor="jobtitle" className="block text-sm font-medium mb-1">Job Title</label>
            <input
              id="jobtitle"
              name="jobtitle"
              type="text"
              value={formData.jobtitle}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-[#1DB954] text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Join Beta'}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="mt-4 text-lg">Thank you for joining our beta!</p>
          <p className="mt-2">We'll be in touch soon.</p>
        </div>
      )}
    </div>
  );
}