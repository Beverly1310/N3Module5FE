import React from "react";

const Header = () => {
  return (
    <header id="header" className="bg-white pl-4 pr-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div>
            <img
              className="w-32"
              src="https://static.vecteezy.com/system/resources/previews/010/074/323/non_2x/electricity-logo-electric-logo-design-template-vector.jpg"
              alt="Phone"
            />
          </div>

          <div className="nav__menu hidden md:flex text-gray-800">
            <ul className="nav__list flex space-x-6">
              <li className="nav__item">
                <a href="/" className=" hover:text-black hover:font-semibold">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className=" hover:text-black hover:font-semibold">
                  Products
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className=" hover:text-black hover:font-semibold">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className=" hover:text-black hover:font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__icons flex align-middle space-x-4">
            <div className="flex border-opacity-100 border-2 p-1">
              <input
                type="text"
                className="border-none pl-3 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <div className="flex">
              <a href="#" className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span
                  id="cart__total"
                  className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  0
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
