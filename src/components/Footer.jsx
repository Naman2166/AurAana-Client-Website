import { Link } from 'react-router-dom';  // Add this import at the top


// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#f88c1f] text-white pt-16 pb-6">
      <hr className='mx-4 sm:mx-10 border border-t-2 border-white mt-5 mb-14'/>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">🍴</span> Aur Aana
            </h3>
            <p className="text-orange-100">
              Serving delicious street food since 2015
            </p>
          </div>
          
          <div className='hidden md:block'>
            <h4 className=" text-lg font-bold mb-1 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {['Menu', 'About Us', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-orange-100 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
       
          <div>
            <h4 className="text-lg font-bold mb-4 border-b-2-2">Opening Hours</h4>
            <ul className="space-y-2 text-orange-100">
              <li>Monday-Friday: 4PM-10PM</li>
              <li>Saturday-Sunday: 4PM-10PM</li>
              <li>Holidays: Special Hours</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4  pb-2">Contact</h4>
            <address className="not-italic text-orange-100">
              <p>In Front Of Bharat Petrol Pump,</p>
              <p>Near Buldhana Bank</p>
              <p>Barwaha (M.P.), 451115</p>
              <p className="mt-2">Phone: +91 7000069582</p>
            </address>
          </div>
        

        </div>
        
        <div className="border-t border-white pt-6 text-center text-orange-100">
          <p>© {new Date().getFullYear()} Aur Aana Food Truck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
