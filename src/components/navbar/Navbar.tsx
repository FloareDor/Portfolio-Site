import Link from "next/link";
import { useState } from "react";
import { twMerge } from 'tailwind-merge'
import HamburgerIcon from "./Hamburger";

interface navbarProps{
  className?: string;
  titleStyle?: string;
}
const Navbar = ({className, titleStyle} : navbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScrollLock = () => {
    document.body.classList.toggle('no-scroll');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleScrollLock();
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
            <Link href={"/"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white">Home</span></Link>
            {/* <Link href={"/portfolio"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white  ">Portfolio</span></Link> */}
            <Link href={"/left-brain"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white  ">Left Brain</span></Link>
            <Link href={"/right-brain"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white">Right Brain</span></Link>
            <Link href={"/socials"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white">Socials</span></Link>
            <Link href={"/resume.pdf"}><span className="text-gray-300 text-sm lg:text-base md:text-base font-semibold hover:text-white">Resume</span></Link>
        </div>
        {/* #005702 */}

        <div className="lg:hidden md:hidden">
          <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {isOpen && (
        <div className="h-screen animate-in slide-in-from-right-full duration-300 gap-1 lg:hidden md:hidden px-5 py-4 flex flex-col items-end">
          <Link href={"/"}><span onClick={toggleScrollLock} className="block text-white text-base font-semibold mb-2 hover:text-gray-300">Home</span></Link>
          {/* <Link href={"/portfolio"}><span onClick={toggleScrollLock} className="block text-white text-base font-semibold mb-2 focus:text-gray-300">Portfolio</span></Link> */}
          <Link href={"/left-brain"}><span onClick={toggleScrollLock} className="block text-white text-base font-semibold mb-2 focus:text-gray-300">Left Brain</span></Link>
          <Link href={"/right-brain"}><span onClick={toggleScrollLock} className="block text-white text-base font-semibold mb-2 hover:text-gray-300">Right Brain</span></Link>
          <Link href={"/socials"}><span onClick={toggleScrollLock} className="block text-white text-base font-semibold mb-2 hover:text-gray-300">Socials</span></Link>
          <Link href={"/resume.pdf"}><span onClick={toggleScrollLock} className="block text-white text-base font-semibold hover:text-gray-300">Resume</span></Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;