import Navbar from "@/components/navbar/Navbar";
const aboutme = () => {
	return (
		<div>
			<div className="flex flex-col">
				<Navbar />
				<div className="flex flex-col items-center">
					<span className="text-white">about me</span>
				</div>
			</div>
		</div>
		
	)
}
export default aboutme;