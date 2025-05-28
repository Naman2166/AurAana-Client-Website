import { Link } from 'react-router-dom';  // Add this import at the top


// FoodCategory.jsx
export default function FoodCategory({ category, image, count }) {
  console.log('test',category)
  return (

    <Link 
      to={`/menu/${category.toLowerCase()}`} 
      className="block group overflow-hidden rounded-lg  shadow-lg hover:shadow-xl transition"
      onClick={()=>scrollTo(0,0)}
    >

  

    <div onClick={()=>scrollTo(0,0)} className="relative group  overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
      <img 
        src={image} 
        alt={category}  
        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 ">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{category}</h3>
          <p className="text-orange-100">{count} delicious options</p>
          {/* <div className="mt-3 w-full bg-orange-200/30 h-1.5 rounded-full"> */}
            {/* <div className="bg-orange-400 h-1.5 rounded-full" style={{width: `${Math.min(count*20, 100)}%`}}></div> */}
          {/* </div> */}
        </div>
      </div>
      {/* <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
        Popular
      </div> */}
    </div>

    </Link>
  );
}