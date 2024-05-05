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
            <Link href={"/left-brain"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white  ">Left Brain</span></Link>
            <Link href={"/right-brain"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white">Right Brain</span></Link>
            <Link href={"/"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white">About Me</span></Link>
            <Link href={"/socials"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white">Socials</span></Link>
            <Link href={"/resume.pdf"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white">Resume</span></Link>
        </div>
        {/* #005702 */}

        <div className="lg:hidden md:hidden">
          <button
            className="text-white w-10 h-10 relative focus:outline-none bg-transparent"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="animate-in slide-in-from-right-full duration-300 gap-1 lg:hidden md:hidden px-5 py-4 flex flex-col items-end">
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