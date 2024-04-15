import Link from "next/link";

const Navbar = () => {
	return (
		<div>
			<div className="flex flex-row gap-12 items-center justify-between px-5 lg:px-10 lg:pt-2">
				<span className="text-[#41B06E] text-xl lg:text-3xl md:text-3xl sm:text-3xl font-bold">
					<Link href={"/"}><span className="hidden lg:inline md:inline">Sai Ravi Teja Gangavarapu</span></Link>
					<span className="lg:hidden md:hidden">Ravi</span>
				</span>
				<div className="flex flex-row gap-5 items-center">
					<Link href={"/left-brain"}><span className="text-[#8DECB4] text-sm lg:text-base font-semibold">Left Brain</span></Link>
					<Link href={"/right-brain"}><span className="text-[#8DECB4] text-sm lg:text-base font-semibold">Right Brain</span></Link>
					<Link href={"/about-me"}><span className="text-[#8DECB4] text-sm lg:text-base font-semibold">About Me</span></Link>
					<Link href={"/contact"}><span className="text-[#8DECB4] text-sm lg:text-base font-semibold">Contact</span></Link>
					<Link href={"/resume.pdf"}><span className="text-[#8DECB4] text-sm font-semibold">Resume</span></Link>
				</div>
			</div>
		</div>
	)
	
}

export default Navbar;