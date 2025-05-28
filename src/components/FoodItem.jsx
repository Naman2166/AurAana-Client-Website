import { Link } from 'react-router-dom';  // Add this import at the top


// FoodItem.jsx
export default function FoodItem({ item }) {
  console.log("food item",item.name)
  return (
    <div className= "flex flex-col bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-0 right-0  bg-orange-800 rounded-bl-xl text-white px-3 py-1 font-bold">
          {item.price}
        </div>

      </div>



      <div className="relative p-5">

        {/* <div className="absolute bottom-0 right-0 rounded-tl-xl  bg-gray-700 text-white px-3 py-1 font-bold">
          {item.price}
        </div> */}

        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex items-center">
          {/* <div className="flex space-x-1 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>
          <span className="ml-2 text-sm text-orange-600">(25 reviews)</span> */}
        </div>
      </div>



    </div>
  );
}

// function StarIcon(props) {
//   return (
//     <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
//       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//     </svg>
//   );
// }