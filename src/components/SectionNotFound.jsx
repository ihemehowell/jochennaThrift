// src/components/SectionNotFound.jsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const SectionNotFound = ({ message }) => {
  return (
    <div className="flex flex-col items-center text-center text-gray-700 py-12">
      <AlertTriangle className="w-12 h-12 text-pink-400 mb-4" />
      <h2 className="text-2xl font-bold mb-2">Oops!</h2>
      <p className="text-lg">{message || "We couldn't find what you were looking for."}</p>
    </div>
  );
};

export default SectionNotFound;
