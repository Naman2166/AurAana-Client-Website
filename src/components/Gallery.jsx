import React from "react";

// components/Gallery.jsx
export default function Gallery() {
    const images = [
      // Food truck exterior
      "https://images.unsplash.com/photo-1565524622405-171b921788ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",      
      // Food preparation
      "https://images.unsplash.com/photo-1620589125156-fd5028c5e05b?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,     
      // Serving customers
      "https://plus.unsplash.com/premium_photo-1683141398969-4ce2f7ec9c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",      
    ];
  
    return (
      <div className="py-12 mt-16 px-5 sm:px-20 mb-8">
        <h2 className="text-3xl text-white font-bold text-center mb-14 white">Our Food Truck Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={img} 
                alt={`Aur Aana Food Truck ${index + 1}`} 
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">View Image {index + 1}</span>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    );
  }
