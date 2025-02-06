// Updated Footer.tsx
export default function Footer() {
  return (
    <footer className=" bg-slate-500 border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="flex justify-between gap-8 ">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              SpareParts
            </h3>
            <p className="text-gray-600 text-sm ">
              Premium automotive parts and accessories for enhanced performance
              and style.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-gray-800 font-semibold mb-3">Quick Links</h4>
            {["About Us", "Services", "Brands", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-red-600 block text-sm transition-colors duration-200 flex"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Support */}
          <div className="space-y-2">
            <h4 className="text-gray-800 font-semibold mb-3">Support</h4>
          <div className="inline-block">
          {["Help Center", "Shipping Info", "Returns", "Warranty"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-red-600 flex space-x-3 text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-gray-800 font-semibold">Stay Connected</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1877F2] transition-colors duration-200"
              >
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
</svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#E4405F] transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-8 border-t border-gray-200 text-center text-sm text-gray-600 ">
          <p>
            &copy; {new Date().getFullYear()} SpareParts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
