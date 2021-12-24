import React from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="z-20 relative">
        <nav className="flex justify-between px-4 py-5 mx-auto bg-[#3331C4] ">
          <div>
            <img
              src="./assets/navbar/nav-logo.svg"
              className="p-3"
              alt="logo"
            />
          </div>
          <div className="flex space-x-8">
            <div className="flex space-x-8">
              <Link href="/">
                <a className="p-3 text-white lg:block hidden uppercase">Home</a>
              </Link>
              <Link href="/about">
                <a className="p-3 text-white lg:block hidden uppercase">
                  About
                </a>
              </Link>
              <Link href="/members">
                <a className="p-3 text-white lg:block hidden uppercase">
                  Members
                </a>
              </Link>
              <Link href="/projects">
                <a className="p-3 text-white lg:block hidden uppercase">
                  Projects
                </a>
              </Link>
              <Link href="https://forms.gle/W4JgHYBjw9U9WmrCA">
                <a
                  target="_blank"
                  className="text-[#3331C4] hidden md:block"
                >
                  <button className="p-3 bg-yellow-500 rounded-full">
                    Join The Community
                  </button>
                </a>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button className="block" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <img
                    src="./assets/navbar/nav-menu-icon-close.svg"
                    className="p-auto"
                    alt="menu"
                  />
                ) : (
                  <img
                    src="./assets/navbar/nav-menu-icon-open.svg"
                    className="p-auto"
                    alt="menu"
                  />
                )}
              </button>
            </div>
          </div>
        </nav>

        {isOpen && (
          <div className="none -mt-5 bg-[#3331C4] flex lg:hidden">
            <div className="mx-2 w-screen flex-col divide-y divide-white">
              <Link href="/">
                <a className="p-5 w-full float-left text-white uppercase">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="p-5 w-full float-left text-white uppercase">
                  About
                </a>
              </Link>
              <Link href="/members">
                <a className="p-5 w-full float-left text-white uppercase">
                  Members
                </a>
              </Link>
              <Link href="/projects">
                <a className="p-5 w-full float-left text-white uppercase">
                  Projects
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
