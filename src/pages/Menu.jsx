import { Link, useParams } from "react-router-dom";
import { menuItems } from "../data/menuItems";
import FoodItem from "../components/FoodItem";

export default function Menu() {
  const { category } = useParams();
  
  // If no specific category is selected, show all categories
  if (!category) {
    return (
      <div className="py-12 bg-[#f88c1f]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-black underline">Full Menu</h2>
          
          {/* Vertical list of categories */}
          <div className="space-y-12">


            {/* Burgers
            <div>
              <h3 className="text-2xl text-white font-bold mb-6 text-primary">Burgers</h3>
              <div className="relative">
                <div className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide">
                  {menuItems.burgers.map(item => (
                    <div key={item.id} className="flex-shrink-0 w-64">
                      <FoodItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            
            {/* Sandwiches */}
            <div>
              <h3 className="text-2xl text-white font-bold mb-6 ">Sandwiches</h3>
              <div className="relative">
                <div className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide">
                  {menuItems.sandwiches.map(item => (
                    <div key={item.id} className="flex-shrink-0 w-64">
                      <FoodItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Momos */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Momos</h3>
              <div className="relative">
                <div className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide">
                  {menuItems.momos.map(item => (
                    <div key={item.id} className="flex-shrink-0 w-64">
                      <FoodItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Drinks */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Drinks</h3>
              <div className="relative">
                <div className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide">
                  {menuItems.drinks.map(item => (
                    <div key={item.id} className="flex-shrink-0 w-64">
                      <FoodItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* French Fries */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">French Fries</h3>
              <div className="relative">
                <div className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide">
                  {menuItems.frenchfries.map(item => (
                    <div key={item.id} className="flex-shrink-0 w-64">
                      <FoodItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* Combo */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Combo Offer</h3>
              <div className="relative">
                <div className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide">
                  {menuItems.combo.map(item => (
                    <div key={item.id} className="flex-shrink-0 w-64">
                      <FoodItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>



        </div>

        </div>
      </div>
    );
  }


  
  // If a specific category is selected (keep existing behavior)
  const categoryItems = menuItems[category] || [];
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <Link to="/menu" className="text-white bg-black border hover:text-black hover:bg-white hover:font-medium rounded-lg px-3 py-1 hover:text-accent mb-4 inline-block" onClick={scrollTo(0,0)} >
          &larr;  Full Menu
        </Link>
        <h2 className="text-3xl font-bold mb-8">{categoryName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryItems.map(item => (
            <FoodItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}