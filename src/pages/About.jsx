export default function About() {
    return (
      <div className="py-12 bg-[#f88c1f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12 underline">About Aur Aana</h2>
          <div className="max-w-3xl mx-auto bg-orange-300 p-8 rounded-lg shadow-md">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Story</h3>
              <p className="text-gray-900">
                Aur Aana started as a small food cart in 2015 with a simple mission: to serve delicious, 
                affordable street food made with fresh ingredients. What began as a humble venture has 
                now become a beloved local favorite, known for our flavorful burgers, sandwiches, and momos.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Philosophy</h3>
              <p className="text-gray-900">
                We believe in keeping it simple and doing it right. Every dish is prepared with care, 
                using quality ingredients and traditional recipes with a modern twist. No shortcuts, 
                no compromises - just great food you can taste in every bite.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Meet the Team</h3>
              <p className="text-gray-900">
                Our team consists of passionate food enthusiasts dedicated to bringing you the best 
                street food experience. From our chefs who craft each recipe with precision to our 
                friendly staff who ensure you have a great experience, we're all united by our love 
                for good food.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }