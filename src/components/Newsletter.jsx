import React, { useState } from 'react';
import { toast } from 'react-toastify';


const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Simulate a successful subscription
    toast.success('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold font-baloo text-gray-900 dark:text-white sm:text-3xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 font-baloo">
          Stay updated with our latest offers, trends, and new arrivals.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full sm:w-2/3 px-4 py-3  border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dark transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
