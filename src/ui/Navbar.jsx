import { Link } from "react-router-dom";
import netFlixLogo from "../assets/netflix-logo-svg.png";

export default function Navbar() {
	return (
		<div className="w-[24.375rem] mobileMedium:w-[26.75rem] mobileMedium:overflow-hidden mt-[-1.4rem] md:w-[48rem] bgScreen:w-[90rem]">
			<div className="w-[24.375rem] flex justify-between items-center mobileMedium:w-[26.75rem] mobileMedium:overflow-hidden md:w-[48rem] bgScreen:w-[90rem] ">
				<Link
					to="/"
					className="w-[10rem] min-h-[6rem] mr-3 mobileMedium:ml-4 bgScreen:w-[9.25rem] bgScreen:flex bgScreen:items-center bgScreen:justify-center bgScreen:ml-[6rem]"
				>
					<img
						className="w-[5rem] min-h-[2rem] mt-8 ml-3 mobileMedium:w-[5.5rem] bgScreen:w-full bgScreen:min-h-[2.5rem]"
						src={netFlixLogo}
						alt="Netflix Logo"
					/>
				</Link>

				<Link
					to="/login"
					className="bgScreen:w-[4.65rem] bgScreen:min-h-[2rem]  bgScreen:ml-[17rem] bgScreen:mr-[10rem] bgScreen:mt-4"
				>
					<button className="mr-3 w-[5rem] min-h-[1.8rem] rounded-md bg-[#E50914] py-[0.4625rem] px-3 text-white whitespace-nowrap text-[0.8rem] font-semibold font-poppins mobileMedium:mr-[2.2rem] bgScreen:min-h-[2rem] bgScreen:mr-[3rem]  bgScreen:w-[5.25rem] ">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
}
