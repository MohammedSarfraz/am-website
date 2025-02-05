export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">SpareParts</h3>
          <p className="text-gray-400">Quality auto parts since 2023</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Contact", "Privacy Policy"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-red-500">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {["facebook", "instagram"].map((social) => (
              <a key={social} href="#" className="hover:text-red-500">
                <span className="sr-only">{social}</span>
                <img
                  src={`/icons/${social}.png`}
                  alt={`${social} icon`}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
