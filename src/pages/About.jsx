import React, { useState, useEffect } from "react";
import { ShieldCheck, ThumbsUp, Truck } from "lucide-react";
import Boy from "../assets/images/boy.jpg";
import Girl from "../assets/images/girl.jpg";
import Baby from "../assets/images/baby.jpg";
import CTASection from "../components/CTASection";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    if (images.length === 0) {
      setLoading(false);
      return;
    }

    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === images.length) setLoading(false);
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="bg-white text-gray-800 mt-14">
      {/* Intro Section */}
      <section className="py-12 px-6 text-center bg-pink-50">
        <h1 className="text-6xl font-bold mb-4">About Us</h1>
        <h4 className="max-w-4xl mx-auto text-2xl capitalize">
          We bring style and comfort to your little ones offering handpicked
          collections for boys, girls, and babies.
        </h4>
      </section>

      {/* Our Story */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Born out of a love for adorable fashion and quality fabrics, our
            store was created to help parents find stylish yet affordable
            clothing for their kids. We started as a small boutique in Lagos and
            have grown into a trusted online destination for children’s wear.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 px-6 bg-neutral-dark text-neutral-light">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <img
                src={Boy}
                alt="Boys"
                className="mx-auto h-auto rounded-2xl"
              />
              <h3 className="mt-4 font-semibold text-2xl">Boys</h3>
              <p className="text-md">Trendy and durable fashion picks</p>
            </div>
            <div>
              <img
                src={Girl}
                alt="Girl"
                className="mx-auto h-auto rounded-2xl"
              />
              <h3 className="mt-4 font-semibold text-2xl">Girls</h3>
              <p className="text-md">Chic and cute styles for every occasion</p>
            </div>
            <div>
              <img
                src={Baby}
                alt="Babies"
                className="mx-auto h-auto rounded-2xl"
              />
              <h3 className="mt-4 font-semibold text-2xl">Babies</h3>
              <p className="text-md">Soft, gentle clothing for little ones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col items-center justify-center">
              <ShieldCheck className="w-12 h-12 text-neutral-dark" />
              <h4 className="font-semibold text-primary mb-2 text-2xl">
                Affordable Quality
              </h4>
              <p>Top-notch products without breaking the bank.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Truck className="w-12 h-12 text-neutral-dark" />
              <h4 className="font-semibold text-primary mb-2 text-2xl">
                Fast Delivery
              </h4>
              <p>We ship quickly so your kids can rock their outfits ASAP.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ThumbsUp className="w-12 h-12 text-neutral-dark" />
              <h4 className="font-semibold text-primary mb-2 text-2xl">
                Parent Approved
              </h4>
              <p>Trusted by hundreds of happy parents nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection />
    </div>
  );
};

export default About;
