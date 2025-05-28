import Hero from "../components/Hero";
import FoodCategory from "../components/FoodCategory";
import { menuItems } from "../data/menuItems";
import SpecialOffer from "../components/SpecialOffer";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import combo from '../assets/combo.jpeg';


export default function Home() {
  const categories = [
    // {
    //   name: "Burgers",
    //   image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    //   count: menuItems.burgers.length
    // },
    {
      name: "Sandwiches",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      count: menuItems.sandwiches.length
    },
    {
      name: "Momos",
      image: "https://plus.unsplash.com/premium_photo-1661600630493-a1dad6b9519b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      count: menuItems.momos.length
    },
    {
      name: "Drinks",
      image: "https://as1.ftcdn.net/jpg/04/14/65/14/1000_F_414651430_ww0X1GvrSOSFe2qQWXwSIVbR5oiH9ztv.jpg",
      count: menuItems.drinks.length
    },
    {
      name: "FrenchFries",
      image: "https://img.freepik.com/free-photo/delicious-fries-studio_23-2151846534.jpg?ga=GA1.1.1938277686.1739460710&semt=ais_hybrid&w=740",
      count: menuItems.frenchfries.length
    },
    {
      name: "Combo",
      image: combo,
      count: menuItems.combo.length
    },
    // {
    //   name: "Shakes",
    //   image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3NoYWtlfGVufDB8fDB8fHww",
    //   count: menuItems.drinks.length
    // },
    // {
    //   name: "Pizza",
    //   image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   count: menuItems.drinks.length
    // },
    
  ];

  return (
    <div  className="bg-[#f88c1f] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      
     
      <Hero />
      

      <SpecialOffer />
      <section id="menu" className="py-12  text-white">
        
        <div className="container mx-auto px-4 "> 
          <h2 className="text-3xl font-bold text-center mb-12">Our Menu Categories</h2>
          <div className="grid grid-cols-2 px-2 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:px-14 sm:px-10 sm:gap-10">
            {categories.map((category, index) => (
              <FoodCategory 
                key={index}
                category={category.name}
                image={category.image}
                count={category.count}
              />
            ))}
          </div>
        </div>

      </section>
      
      <Gallery />

      <Reviews />
    </div>
  );
}