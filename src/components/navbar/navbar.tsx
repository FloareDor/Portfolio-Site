import Link from "next/link";
import { useState } from "react";
import { twMerge } from 'tailwind-merge'

interface navbarProps{
  className?: string;
  titleStyle?: string;
}
const Navbar = ({className, titleStyle} : navbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={twMerge("bg-opacity-95 bg-black fixed top-0 left-0 right-0 z-20", className)}>
      <div className="flex flex-row items-center justify-between px-5 py-4 md:px-6 md:pt-10 lg:px-12 lg:pt-10">
        <span className="text-white text-2xl lg:text-3xl md:text-3xl sm:text-3xl font-bold">
          <div className="">
          <Link href={"/"}>
            <span className={twMerge("hidden lg:inline text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-500 to-purple-900 hover:from-white hover:via-gray-500 hover:to-purple-800 ", titleStyle)}>Sai Ravi Teja Gangavarapu</span>
            <span className="lg:hidden text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-500 to-purple-900 hover:from-white hover:via-gray-500 hover:to-purple-700">Ravi</span>
            </Link>
          </div>
        </span>

        <div className="hidden lg:flex md:flex flex-row gap-5 md:gap-3 lg:gap-5 sm:gap-3 items-center">
          <div className="transition duration-200 ease-in-out transform-gpu hover:scale-95 hover:shadow-lg">
            <Link href={"/left-brain"}><span className="text-white text-sm lg:text-base md:text-base font-semibold hover:text-gray-300  ">Left Brain</span></Link>
          </div>
          <div className="transition duration-200 ease-in-out transform-gpu hover:scale-95 hover:shadow-lg">
            <Link href={"/right-brain"}><span className="text-white text-sm lg:text-base md:text-base font-semibold hover:text-gray-300">Right Brain</span></Link>
            </div>
          <div className="transition duration-200 ease-in-out transform-gpu hover:scale-95 hover:shadow-lg">
            <Link href={"/"}><span className="text-white text-sm lg:text-base md:text-base font-semibold hover:text-gray-300">About Me</span></Link>
            </div>
          <div className="transition duration-200 ease-in-out transform-gpu hover:scale-95 hover:shadow-lg">
            <Link href={"/socials"}><span className="text-white text-sm lg:text-base md:text-base font-semibold hover:text-gray-300">Socials</span></Link>
            </div>
          <div className="transition duration-200 ease-in-out transform-gpu hover:scale-95 hover:shadow-lg">
            <Link href={"/resume.pdf"}><span className="text-white text-sm lg:text-base md:text-base font-semibold hover:text-gray-300">Resume</span></Link>
            </div>
        </div>
        {/* #005702 */}

        <div className="lg:hidden md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8 fill-current"
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
        <div className="gap-1 lg:hidden md:hidden px-5 py-4 flex flex-col items-end">
          <Link href={"/left-brain"}><span className="block text-white text-base font-semibold mb-2 focus:text-gray-300">Left Brain</span></Link>
          <Link href={"/right-brain"}><span className="block text-white text-base font-semibold mb-2 hover:text-gray-300">Right Brain</span></Link>
          <Link href={"/"}><span className="block text-white text-base font-semibold mb-2 hover:text-gray-300">About Me</span></Link>
          <Link href={"/socials"}><span className="block text-white text-base font-semibold mb-2 hover:text-gray-300">Socials</span></Link>
          <Link href={"/resume.pdf"}><span className="block text-white text-base font-semibold hover:text-gray-300">Resume</span></Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;