export default function Location() {
  return (
    <div className="py-12 bg-[#f88c1f]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center underline mb-12">Find Us</h2>
        <div className="max-w-4xl mx-auto bg-[#fab46d]  p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl text-black font-bold text-primary mb-4">Location</h3>
              <p className="text-gray-950 mb-4">
                In Front Of Bharat Petrol Pump,<br />
                Near Buldhana Bank<br />
                Barwaha (M.P.), 451115
              </p>
              <p className="text-gray-950">
                Look for our bright orange food truck!
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-black  font-bold text-primary mb-4">Hours</h3>
              <ul className="text-gray-950 space-y-2">
                <li><strong>Monday-Friday:</strong> 4:00 PM - 10:00 PM</li>
                <li><strong>Saturday-Sunday:</strong> 4:00 PM - 10:00 PM</li>
                <li><strong>Holidays:</strong> Open unless announced</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with your actual Google Maps embed code */}
            <iframe
              title="Location Map"
              width="100%"
              height="100%"
              loading="lazy"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps?q=22.2552706,76.0365635&hl=en&z=20&output=embed"
            ></iframe>

          </div>
        </div>
      </div>
    </div>
  );
}
