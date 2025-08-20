import React, { useState } from "react";
import { Link } from "react-router-dom";
import footerData from "../data/footerData.json";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with your newsletter subscription logic/API call
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4"> 
    {/* Newsletter Signup */}
      <div className="max-w-md mx-auto mb-10 text-center">
        <h4 className="text-lg font-semibold mb-3">Subscribe to our Newsletter</h4>
        {submitted ? (
          <p className="text-green-400 mb-4">Thanks for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex justify-center gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-l-md px-4 py-2 w-full max-w-xs text-gray-900"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-primary px-6 py-2 rounded-r-md font-semibold text-white hover:bg-primarylight transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      <div className="max-w-8xl mx-auto items-end justify-content-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4">
        {footerData.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, i) => {
                if (link.external) {
                  return (
                    <li key={i}>
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-primary transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                } else {
                  return (
                    <li key={i}>
                      <Link
                        to={link.to}
                        className="text-sm hover:text-primary transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        ))}
      </div>

      

     
      {/* Social Icons & Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        {/* Tagline */}
        <p className="text-gray-400 text-sm mb-4">
          Empowering Little Steps, Every Day.
        </p>

        <div className="flex justify-center gap-5 mb-4">
          <a
            href="https://www.instagram.com/yourbrand"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://www.facebook.com/yourbrand"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition transform hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href="https://www.tiktok.com/@yourbrand"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-700 transition transform hover:scale-110"
            aria-label="TikTok"
          >
            <FaTiktok size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
