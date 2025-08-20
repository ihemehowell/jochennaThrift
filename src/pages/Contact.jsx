// src/pages/Contact.jsx
import { Facebook, Instagram } from 'lucide-react';
import React from 'react';

import { toast } from 'react-toastify';

const Contact = () => {

  const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form[0].value.trim();
  const email = form[1].value.trim();
  const message = form[2].value.trim();

  // Basic validation
  if (!name || !email || !message) {
    toast.error("All fields are required!");
    return;
  }

  // Simulate successful form submission
  toast.success("Thanks! We'll be in touch soon.");
  form.reset();
};
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto mt-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-500 mt-2 text-2xl">
          Have a question? Reach out and we’ll get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form  onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your name"
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="you@example.com"
              
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Type your message here..."
             
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-md  transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-between">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Store Location</h3>
            <p className="text-gray-600">30 Patrick Uwakwe Street, Liberty Estate, Okota, Lagos, Nigeria</p>
          </div>
         {/* Google Map */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Us on the Map</h2>
              <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.1671482882824!2d3.3350299999999997!3d6.520724999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d0feffb5877%3A0xd70a080f97bb7c6f!2sLiberty%20Estate%2C%20Okota%2C%20Lagos!5e0!3m2!1sen!2sng!4v1691585749819!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="fast"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>


          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Service</h3>
            <p className="text-gray-600">Phone: 07086076911</p>
            <p className="text-gray-600">Email: support@yourstore.com</p>
            <p className="text-gray-600">Hours: Mon - Sat, 9AM - 6PM</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-600 hover:underline"><Facebook/></a>
              <a href="#" className="text-blue-500 hover:underline"><Instagram/></a>
              <a href="#" className="text-blue-400 hover:underline">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
