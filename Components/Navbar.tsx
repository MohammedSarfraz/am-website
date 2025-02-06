import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { SearchIcon } from './Icons';
export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-600 shrink-0">
            SpareParts
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-sm md:text-base lg:gap-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-bold text-lg">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-bold text-lg">
              Products
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-bold text-lg">
              Brands
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-bold text-lg">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-bold text-lg">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl min-w-[200px]">
            <div className="relative flex items-center ">
              <input
                type="text"
                placeholder="Search parts..."
                className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Button variant='primary' icon={<SearchIcon />} />
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}