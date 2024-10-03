import React, { useState } from "react";

function Appbar() {
  const [bar, setBar] = useState(true);

  function handleClick() {
    setBar((prevState) => !prevState);
  }

  return (
    <>
      <nav className=" w-full  py-3 px-6">
        <div className=" flex justify-between items-center">
          <h2 className="logo-color-primary">Eco.</h2>
          <div className="flex gap-5 items-center">
            {/* cart */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hover:animate-shake"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>

            {/* bar */}
            <div
              className="md:hidden cursor-pointer hover:text-gray-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 "
              onClick={handleClick}
            >
              {/* cross */} {/* bars */}
              {!bar ? (
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.9}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/* after opening hamburger */}
        {!bar && (
          <div className=" md:hidden w-full  py-2 transition ease-in-out delay-150 duration-300 ">
            <ul className="text-base text-gray-500 py-1 font-medium ">
              <li className="hover:text-gray-400 cursor-pointer transition ease-in-out duration-300 ">
                Shop all
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                About
              </li>
              <li className="hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Contact
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Appbar;
