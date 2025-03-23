// src/components/nav/nav-header.jsx
import { NavLink } from "react-router-dom";

export function NavHeader() {
  return (
    <>
      <header className="bg-[#F5F5F5] drop-shadow-lg">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <NavLink className="block text-teal-600" to="/">
            <span className="sr-only">Home</span>
            <img src="/chlartIcon.svg" alt="icon" className="h-24 w-24" />
          </NavLink>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center justify-end gap-6 text-sm">
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      console.log("Home isActive:", isActive); // Debug log
                      return `transition hover:text-[#3B82F6] font-bold ${
                        isActive ? "text-[#3B82F6]" : "text-gray-500"
                      }`;
                    }}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) => {
                      console.log("About isActive:", isActive); // Debug log
                      return `transition hover:text-[#3B82F6] font-bold ${
                        isActive ? "text-[#3B82F6]" : "text-gray-500"
                      }`;
                    }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) => {
                      console.log("Product isActive:", isActive); // Debug log
                      return `transition hover:text-[#3B82F6] font-bold ${
                        isActive ? "text-[#3B82F6]" : "text-gray-500"
                      }`;
                    }}
                    to="/product"
                  >
                    Product
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-[#7896f0] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#3B82F6]"
                  href="#"
                >
                  Login
                </a>

                <a
                  className="hidden rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-[#7896f0] transition hover:text-[#3B82F6] sm:block"
                  href="#"
                >
                  Register
                </a>
              </div>

              <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}