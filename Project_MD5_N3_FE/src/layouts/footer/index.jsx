import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="footer__top grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-top__box">
            <h3 className="text-lg font-semibold mb-4">EXTRAS</h3>
            <a href="#" className="block hover:text-gray-300">Brands</a>
            <a href="#" className="block hover:text-gray-300">Gift Certificates</a>
            <a href="#" className="block hover:text-gray-300">Affiliate</a>
            <a href="#" className="block hover:text-gray-300">Specials</a>
            <a href="#" className="block hover:text-gray-300">Site Map</a>
          </div>
          <div className="footer-top__box">
            <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
            <a href="#" className="block hover:text-gray-300">About Us</a>
            <a href="#" className="block hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="block hover:text-gray-300">Terms & Conditions</a>
            <a href="#" className="block hover:text-gray-300">Contact Us</a>
            <a href="#" className="block hover:text-gray-300">Site Map</a>
          </div>
          <div className="footer-top__box">
            <h3 className="text-lg font-semibold mb-4">MY ACCOUNT</h3>
            <a href="#" className="block hover:text-gray-300">My Account</a>
            <a href="#" className="block hover:text-gray-300">Order History</a>
            <a href="#" className="block hover:text-gray-300">Wish List</a>
            <a href="#" className="block hover:text-gray-300">Newsletter</a>
            <a href="#" className="block hover:text-gray-300">Returns</a>
          </div>
          <div className="footer-top__box">
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <div className="flex items-center mb-2">
              <span className="mr-2">
                <svg className="w-5 h-5">
                  <use xlinkHref="./images/sprite.svg#icon-location"></use>
                </svg>
              </span>
              42 Dream House, Dreammy street, 7131 Dreamville, USA
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">
                <svg className="w-5 h-5">
                  <use xlinkHref="./images/sprite.svg#icon-envelop"></use>
                </svg>
              </span>
              company@gmail.com
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">
                <svg className="w-5 h-5">
                  <use xlinkHref="./images/sprite.svg#icon-phone"></use>
                </svg>
              </span>
              456-456-4512
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <svg className="w-5 h-5">
                  <use xlinkHref="./images/sprite.svg#icon-paperplane"></use>
                </svg>
              </span>
              Dream City, USA
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom mt-8">
        <div className="footer-bottom__box text-center py-4">
          {/* Add any footer bottom content here */}
        </div>
        <div className="footer-bottom__box text-center py-4">
          {/* Add any footer bottom content here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
