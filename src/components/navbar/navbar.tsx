import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-opacity-80 bg-black lg:bg-transparent md:bg-transparent sm:bg-transparent fixed top-0 left-0 right-0 z-20">
      <div className="flex flex-row items-center justify-between px-5 py-4 md:px-12 md:pt-10 lg:px-12 lg:pt-10">
        <span className="text-white text-xl lg:text-2xl md:text-3xl sm:text-3xl font-bold">
          <Link href={"/"}>
            <span className="hidden lg:inline md:inline">Sai Ravi Teja Gangavarapu</span>
            <span className="lg:hidden md:hidden">Ravi</span>
          </Link>
        </span>

        <div className="hidden lg:flex md:flex flex-row gap-5 items-center">
          <Link href={"/left-brain"}><span className="text-white text-sm lg:text-base font-semibold">Left Brain</span></Link>
          <Link href={"/right-brain"}><span className="text-white text-sm lg:text-base font-semibold">Right Brain</span></Link>
          <Link href={"/about-me"}><span className="text-white text-sm lg:text-base font-semibold">About Me</span></Link>
          <Link href={"/contact"}><span className="text-white text-sm lg:text-base font-semibold">Contact</span></Link>
          <Link href={"/resume.pdf"}><span className="text-white text-sm lg:text-base font-semibold">Resume</span></Link>
        </div>
        {/* #005702 */}

        <div className="lg:hidden md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden md:hidden px-5 py-4 flex flex-col items-end">
          <Link href={"/left-brain"}><span className="block text-white text-sm font-semibold mb-2">Left Brain</span></Link>
          <Link href={"/right-brain"}><span className="block text-white text-sm font-semibold mb-2">Right Brain</span></Link>
          <Link href={"/about-me"}><span className="block text-white text-sm font-semibold mb-2">About Me</span></Link>
          <Link href={"/contact"}><span className="block text-white text-sm font-semibold mb-2">Contact</span></Link>
          <Link href={"/resume.pdf"}><span className="block text-white text-sm font-semibold ">Resume</span></Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;