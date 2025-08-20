import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Clothes', image: '/clothes.jpg' },
  { name: 'Shoes', image: '/shoes.jpg' },
  { name: 'Feeding Bottles', image: '/bottles.jpg' },
  { name: 'Walkers', image: '/walker.jpeg' },
  { name: 'Toys', image: '/toys.jpg' },
  { name: 'Blankets', image: '/blankets.jpg' },
];

const FeaturedProducts = () => {
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <section className="py-16 px-6 bg-primarylight">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        <h2
          className="text-3xl font-baloo text-primary tracking-wide"
         
        >
          Shop by Category
        </h2>
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="text-sm px-4 py-2 border-2 border-primary text-primary rounded-md hover:bg-primarylight transition focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-pressed={autoPlay}
          aria-label={`Toggle auto-scroll, currently ${autoPlay ? 'On' : 'Off'}`}
        >
          Auto-Scroll: <span className="font-semibold">{autoPlay ? 'On' : 'Off'}</span>
        </button>
      </div>

      <div className=" mx-auto relative">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay={autoPlay}
          interval={4000}
          showStatus={false}
          showArrows
          centerMode
          centerSlidePercentage={33.33}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute left-[-10px] z-50 top-1/2 -translate-y-1/2 bg-neutral-light border border-primary rounded-full p-2 shadow-md hover:bg-primarylight focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Previous category"
              >
                <ChevronLeft className="w-3 h-3 text-primary" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute right-[-10px] top-1/2 -translate-y-1/2 bg-neutral-light border border-primary rounded-full p-2 shadow-md hover:bg-primarylight focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Next category"
              >
                <ChevronRight className="w-3 h-3 text-primary" />
              </button>
            )
          }
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="mx-3 bg-neutral-light rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl focus-within:shadow-xl focus-within:outline-none"
              tabIndex={0}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover object-center"
                loading="lazy"
              />
              <h3 className="text-center text-secondary font-nunito font-semibold py-4 text-lg select-none">
                {cat.name}
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProducts;
