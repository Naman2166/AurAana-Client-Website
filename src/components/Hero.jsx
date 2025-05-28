import { Link } from 'react-router-dom';  // Add this import at the top


// Hero.jsx
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#f88c1f] to-[#f88c1f] text-white">
      <div className="container flex justify-between mx-auto px-4 py-24 md:py-20 md:pt-20">

        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Delicious Street Food <br />
            <span className="text-orange-200">Some Steps Away</span>
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Authentic flavors served fresh from our food truck
          </p>
          <div className="flex space-x-4">
            <Link
              to="/menu"
              className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg 
                         font-bold text-lg shadow-lg transition-all hover:scale-105"
              onClick={() => scrollTo(0, 0)}
            >
              View Menu
            </Link>
            <Link
              to="/location"
              className="border-2 border-white text-white hover:bg-orange-700 px-6 py-3 
                         rounded-lg font-bold text-lg transition-all hover:scale-105"
              onClick={() => scrollTo(0, 0)}
            >
              Find Us
            </Link>
          </div>
        </div>





        {/* <div className="flex items-center max-md:hidden items-baseline group mr-40"> */}
          {/* Text Logo with Enhanced Styling */}
          {/* <div className=""> */}
            {/* Main Logo Text */}
            {/* <div className="flex items-baseline px-1 pl-4 border-green-600 rounded-tl-xl"> */}
              {/* <span className="text-7xl font-bold text-red-900 font-serif italic tracking-tight ">Aur</span>
              <span className="text-7xl font-bold text-yellow-300 font-serif italic tracking-tight">Aana</span> */}
            {/* </div> */}

            {/* Decorative Underline - Now animated continuously */}
            {/* <div className="h-2 w-full rounded-full bg-gradient-to-r from-orange-700 to-orange-950 animate-scaleInOut"></div> */}
          {/* </div> */}

          {/* Animated Food Icon - Now rotating continuously */}
          {/* <div className="ml-0 animate-spinSlow">
            <span className="text-9xl">🍔</span>
          </div> */}
        {/* // </div> */}


        <style jsx>{`
  @keyframes scaleInOut {
    0%, 100% {
      transform: scaleX(0);
      transform-origin: left;
    }
    50% {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  @keyframes spinSlow {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(90deg) scale(1.8);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
  
  .animate-scaleInOut {
    animation: scaleInOut 3s infinite ease-in-out;
  }
  
  .animate-spinSlow {
    animation: spinSlow 3.5s infinite linear;
  }
`}</style>


      </div>

    </section>
  );
}

