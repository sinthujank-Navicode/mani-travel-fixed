export default function Footer() {
    return (
      <footer className="bg-white text-black px-4 md:px-16 py-8 ">
        <div className="max-w-12xl mx-auto grid gap-12 md:grid-cols-5 sm:grid-cols-2 text-sm">
          
          <div>
            <h2 className="text-2xl font-bold">Mani Travel World</h2>
            <p className="mt-2 text-gray-600">
              We provide reliable travel services including flights, visas, hotels, and more to make your journey safe, smooth, and memorable.
            </p>
            <div className="flex gap-4 mt-4 text-3xl">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Air Ticketing</li>
              <li>Online visa services</li>
              <li>Hotel booking</li>
              <li>Visa consulting</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Online appointments</li>
              <li>Airport transportation</li>
              <li>Travel insurance</li>
              <li>Translation</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="text-gray-700 space-y-1">
              <li>commani187@gmail.com</li>
              <li>+94 774 725 978</li>
              <li>011 239 144 6</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-700">
              NO 312 Sea Street, <br /> Colombo – 11
            </p>
          </div>
        </div>
  
        <hr className="my-6 border-gray-900" />
        <div className="text-center text-sm text-gray-600">
          2025 Copyright : navicode@gmail.com
        </div>
      </footer>
    );
  }
  