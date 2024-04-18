import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
const contact = () => {
	return (
		<div>
			<div className="flex flex-col bg-black">
				<Navbar />
				<div className="flex flex-col items-center gap-2 pt-28 lg:pt-60 md:pt-60 sm:pt-60">
					<span className="text-white font-sans">gangavarapus@ufl.edu</span>
					<Link href={"https://github.com/FloareDor"}><span className="text-white font-sans">GitHub</span></Link>
					<Link href={"https://www.linkedin.com/in/sai-ravi-teja-gangavarapu/"}><span className="text-white font-sans">Linkedin</span></Link>
					<Link href={"https://soundcloud.com/raven-714331711"}><span className="text-white font-sans">SoundCloud</span></Link>
					<Link href={"https://www.instagram.com/floare_dor/"}><span className="text-white font-sans">Instagram</span></Link>
					<Link href={"https://leetcode.com/Sai_Ravi_Teja/"}><span className="text-white font-sans">Leetcode? Seriously?</span></Link>
				</div>
			</div>
		</div>
		
	)
}
export default contact;