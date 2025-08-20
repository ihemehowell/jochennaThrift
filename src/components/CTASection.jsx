import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-12 px-6 text-center rounded-lg shadow-md my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Discover the Perfect Outfit for Your Little One!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
        Shop the latest trends in kids' fashion. Clothes, shoes, and accessories for boys, girls, and babies—all in one place.
      </p>
      <Link
        to="/shop"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Shop Now
      </Link>
    </section>
  );
};

export default CTASection;
