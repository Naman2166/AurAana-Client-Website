// components/SpecialOffer.jsx
import React from 'react';

export default function SpecialOffer() {
  return (
    <div className="bg-orange-200 border-orange-500 p-3 my-6 overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="flex items-center justify-center lg:animate-marquee lg:whitespace-nowrap">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
            <span className='hidden sm:inline'>Special</span> Offer
          </span>
          <p className="text-orange-800 font-medium inline-block">
            Get a Free Regular French Fries Coupon on order above <strong>₹150</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
