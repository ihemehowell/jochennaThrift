// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    review: 'Absolutely love the quality! My baby looks adorable and comfy!',
    avatar: '/assets/testimonials/mom1.jpg',
  },
  {
    name: 'Uche N.',
    review: 'Fast delivery and cute products. Highly recommend!',
    avatar: '/assets/testimonials/dad1.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">What Parents Are Saying</h2>
      <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <div key={i} className="p-6 border rounded-lg shadow">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
              </div>
            </div>
            <p className="text-neutral-600 italic">“{item.review}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
