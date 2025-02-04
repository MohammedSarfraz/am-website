// app/page.js

import Image from 'next/image';
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar ............................................................................... */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center ">
              <span className="text-2xl font-bold text-red-600">SpareParts</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 ml-4" >
              <a href="#" className="text-gray-700 hover:text-red-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Products</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Brands</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Contact</a>
            </div>    

            <div className="flex w-full max-w-2xl mx-auto ml-4">
              <input 
                type="text" 
                placeholder="Search parts..." 
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 w-full md:w-auto flex-grow "
              />
              <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition whitespace-nowrap flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section ......................................................................................................*/}
      <div className="relative pt-16">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <Image
          src="/herobg.jpg" 
          alt="Car Workshop"
          width={1920}
          height={1080}
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Genuine Car Spare Parts
          </h1>
          <p className="text-xl text-white mb-8">Quality Parts for Smooth Rides</p>
          <div className="space-x-4 flex justify-center">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">
              Shop Now
            </button>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section ............................................................................................................*/}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {['Engine Parts', 'Brake System', 'Electrical', 'Suspension'].map((category) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-gray-100 h-48 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <button className="text-red-600 hover:text-red-700">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Promo  ..........................................................................................................*/}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Seasonal Sale!</h2>
          <p className="text-xl mb-8">Get up to 30% off on selected items</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            View Offers
          </button>
        </div>
      </div>

      {/* Footer........................................................................................................................... */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SpareParts</h3>
            <p className="text-gray-400">Quality auto parts since 2023</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
              <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor"  viewBox="0 0 24 24"><path d="/f1.svg" /></svg>
              </a>
              <a href="#" className="hover:text-red-500">
                <span className="sr-only">Whatsapp</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="/whatsapp.svg" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}