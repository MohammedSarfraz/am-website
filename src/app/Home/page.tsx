
import Image from "next/image";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import Button from "../../../Components/Button";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "../../../Components/Icons";

const brands = ["Audi", "BMW", "Mercedes", "Lamborghini", "Ferrari", "Porsche"];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-16 h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <Image
          src="/hero.jpg"
          alt="Car Workshop"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Genuine Car Parts
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Premium quality parts for enhanced performance and lasting durability
          </p>
          <div className="flex gap-6">
            <Button 
              text="Explore" 
              variant="primary" 
              className="hover:scale-105 transition-transform px-8 py-4 w-15"
            />
            <Button 
              text="Latest Offers" 
              variant="secondary" 
              className="group hover:bg-white/20 px-8 py-4 max-w-15"
              icon={<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />}
            />
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
           Top Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div 
              key={brand} 
              className="group relative bg-blue-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gray-100/50 h-40 rounded-xl mb-4 flex items-center justify-center animate-pulse">
                <Image 
                  src={`/brands/${brand.toLowerCase()}.svg`}
                  alt={brand}
                  width={120}
                  height={80}
                  className="opacity-90 grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 group-hover:text-red-600 transition-colors">
                {brand}
              </h3>
              <Link href={`/brands/${brand.toLowerCase()}`}>
                <Button 
                  text="Explore Parts"
                  variant="text" 
                  className="mt-4 text-red-600 hover:text-red-700 group"
                  icon={<ChevronRight className="group-hover:translate-x-1 transition-transform" />}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/carbon-fiber.png')] bg-cover"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-yellow-300">Seasonal Special:</span> Up to 35% Off
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Limited-time offers on premium parts - Upgrade your ride without breaking the bank
          </p>
          <Button 
            text="Shop Deals Now"
            variant="secondary"
            className="hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 text-lg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}