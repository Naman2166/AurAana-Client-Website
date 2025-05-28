import { useState, useEffect } from 'react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      comment: "Best burgers in town! The patties are always juicy and the buns are so fresh.",
      photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      comment: "The momos with schezwan sauce are addictive! Perfect street food at reasonable prices.",
      photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Vikram Singh",
      rating: 5,
      comment: "Found my new lunch spot. Their grilled sandwiches remind me of homemade food.",
      photo: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 4,
      name: "Ananya Gupta",
      rating: 5,
      comment: "The cold coffee is the perfect pick-me-up. Love the food truck aesthetics too!",
      photo: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return; // Stop auto-slide on hover

    const interval = setInterval(() => {
      nextReview();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <section className="py-12 pt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          What Our Customers Say
        </h2>

        {/* Reviews Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-full px-2 sm:px-4"
                onMouseEnter={() => index === currentIndex && setIsHovered(true)}
                onMouseLeave={() => index === currentIndex && setIsHovered(false)}
              >
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
                  <div className="flex items-center mb-6">
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-orange-200"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{review.name}</h3>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 sm:h-5 sm:w-5 ${i < review.rating ? 'text-orange-500' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-base sm:text-lg">"{review.comment}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition duration-300 ${currentIndex === index ? 'bg-orange-600 w-6' : 'bg-orange-300 w-3'}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
