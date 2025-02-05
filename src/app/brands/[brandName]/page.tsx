// app/brands/[brandName]/page.tsx
'use client';

import { useParams } from "next/navigation";
import Navbar from "../../../../Components/Navbar";
import Footer from "../../../../Components/Footer";
import Button from "../../../../Components/Button";
import {  ArrowRight } from "../../../../Components/Icons";

const categories = ["Engine Parts", "Brake System", "Electrical", "Suspension"];
const parts = [
  { name: "Oil Filter", price: "$49.99", category: "Engine" },
  { name: "Brake Pads", price: "$89.99", category: "Brake System" },
  { name: "Spark Plug", price: "$12.99", category: "Engine" },
  { name: "Shock Absorber", price: "$129.99", category: "Suspension" },
];

const BrandPage = () => {
  const params = useParams();
  const brandName = params.brandName as string;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
            {brandName} Parts
          </h1>
          <p className="text-xl text-gray-600">Authentic components for optimal performance</p>
        </div>
        
        {/* Categories Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div 
                key={category} 
                className="group relative bg-blue-100  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-red-50 to-gray-100 rounded-t-2xl flex items-center justify-center">
                  {/* Category Image */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">
                    {category}
                  </h3>
                  <Button 
                    text="View Products"
                    variant="text"
                    className="text-red-600 pl-0 group-hover:pl-2 transition-all"
                    icon={<ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parts List */}
        <div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Featured Parts</h2>
            <select className="bg-white px-4 py-2 rounded-lg border border-gray-200">
              <option>Sort by Price</option>
              <option>Sort by Popularity</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parts.map((part, index) => (
              <div 
                key={index}
                className="bg-blue-100  rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-60 bg-gray-100 rounded-t-xl overflow-hidden">
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{part.name}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">In Stock</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">{part.price}</span>
                    <Button 
                      text="Add to Cart"
                      variant="primary"
                      className="px-6 py-3"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrandPage;