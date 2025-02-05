import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-red-600">SpareParts</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 ml-4">
            {["Home", "Products", "Brands", "Services", "Contact"].map((item) => (
              <Link key={item} href="#" className="text-gray-700 hover:text-red-600">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex w-full max-w-2xl mx-auto ml-4">
            <input
              type="text"
              placeholder="Search parts..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 w-full md:w-auto flex-grow"
            />
            <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
