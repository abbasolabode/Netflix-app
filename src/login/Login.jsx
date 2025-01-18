import { Link } from "react-router-dom";
//import lgScreenHero from "../assets/netflix-wallpaper.jpg";
import loginLogo from "../assets/netflix-logo-svg.png";
import Language from "../ui/Language";

export default function Login() {
	//const isLargeScreen = window.innerWidth >= 768; //if the width is greater or equal to 1440px
	return (
		<div
			className="w-[24.375rem] min-h-[100vh] mobileMedium:w-[26.75rem] p-0 overflow-hidden bg-[#000] md:w-[48rem] md:flex md:justify-center md:justify-items-stretch bgScreen:w-[90rem] bgScreen:flex"
			/* 			style={{
				backgroundImage: `url(${isLargeScreen ? lgScreenHero : ""})`,
			}} */
		>
			<div className="md:w-[48rem]  md:flex md:flex-col md:items-center  bgScreen:w-[90rem] bgScreen:flex bgScreen:flex-col bgScreen:justify-between bgScreen:h-[158.75rem] backdrop-filter backdrop-blur-[2px] ">
				<Link
					to="/"
					className="block mt-4 mobileMedium:w-[26.75rem] md:mt-8 md:w-[48rem] md:ml-4  "
				>
					<img
						src={loginLogo}
						className="w-[6rem] min-h-[2rem] ml-4 bgScreen:w-[9.25rem] bgScreen:min-h-[2.5rem]"
					/>
				</Link>

				<form className="w-[24.375rem] py-3 md:w-[48rem] md:flex md:ml-[20rem]  md:flex-col md:mt-[2rem] md:justify-self-center bgScreen:self-justify-self">
					<div className="w-[24.375rem] md:mt-4">
						<h2 className="w-[17rem] font-poppins rounded text-white font-semibold text-[1.9rem] mt-3 ml-4">
							Sign In
						</h2>
					</div>

					<div className="w-[22.375rem] mt-5 mobileMedium:w-[26.75rem]">
						<input
							type="text"
							placeholder="Email or mobile number"
							className="w-[22rem] border py-4 ml-4 border-stone-700 mobileMedium:w-[24.7rem] text-white bg-[#171717] focus:outline-white pl-2 placeholder:text-stone-300 placeholder:font-light placeholder:font-poppins placeholder:pl-3 md:w-[21rem]"
						/>
						<input
							type="password"
							placeholder="Password"
							className="w-[22rem] border border-stone-700 mobileMedium:w-[24.7rem] py-4 ml-4 pl-2 text-white focus:outline-white bg-[#171717] placeholder:text-stone-300 placeholder:font-poppins placeholder:pl-3  mt-4  md:w-[21rem]"
						/>
					</div>

					<div className="w-[22.375rem] mt-3 ">
						<div className="w-[22.375rem] mt-4 flex flex-col">
							<button
								type="button"
								className="w-[22rem] py-2 ml-4 rounded text-white mobileMedium:w-[24.7rem] bg-[#E50914] font-medium placeholder:text-white pl-2 placeholder:text-[1.1rem] placeholder:font-poppins placeholder:pl-3 placeholder:font-medium  md:w-[21rem]"
							>
								Send Sign-In Code
							</button>
							<small className="text-center font-poppins font-medium text-base mt-3 mb-3 mobileMedium:w-[24.7rem] mobileMedium:ml-5 text-stone-400 md:w-[20rem]">
								OR
							</small>
							<button
								type="button"
								className="w-[22rem] py-2 ml-4 rounded text-white  bg-stone-700 font-medium mobileMedium:w-[24.7rem] placeholder:text-white pl-2 placeholder:text-[1.1rem] placeholder:font-poppins placeholder:pl-3 placeholder:font-medium  md:w-[21rem]"
							>
								Use a Sign-In Code
							</button>
							<button
								type="button"
								className="font-poppins mt-4 ml-8  text-stone-100 mobileMedium:w-[26rem] mobileMedium:ml-5 md:w-[22rem]"
							>
								Forgot Password?
							</button>
						</div>

						<div className="flex mt-7 gap-3 ml-4 mobileMedium:w-[26.75rem] mobileMedium:ml-5">
							<input type="checkbox" className="w-5" />
							<p className="font-poppins text-white ">Remember me</p>
						</div>

						<div className="flex mt-4 gap-2 ml-4 items-center mobileMedium:ml-5 mobileMedium:w-[26.75rem]">
							<p className="font-poppins font-light text-sm text-stone-200 ">
								New to Netflix?
							</p>
							<Link to="/">
								<button className="font-poppins font-medium text-white">
									Sign up now.
								</button>
							</Link>
						</div>

						<p className="w-[22rem] text-[0.8rem] ml-4 mt-5 text-stone-400 font-poppins  font-light  mobileMedium:px-2  mobileMedium:text-[0.75rem] mobileMedium:w-[25.75rem] md:w-[21rem]">
							This page is protected by Google reCAPTCHA to ensure you're not a
							bot.
							<span>
								<Link to="#" className="font-poppins text-blue-600">
									Learn more.
								</Link>
							</span>
						</p>
					</div>
				</form>

				<footer className="text-white mt-[15rem]  w-[24.375rem] mobileMedium:w-[26.75rem] mobileMedium:mb-[3rem] md:w-[48rem] md:mt-[9rem] md:justify-self-start md:ml-[2rem]">
					<hr className="border-t border-stone-500 mobileMedium:hidden" />
					<div className="w-[20rem] font-poppins text-stone-300 ml-5 mt-8 font-light">
						<h2 className="font-poppins">Questions? contact us.</h2>
					</div>

					<ul className="grid grid-cols-2 gap-4  font-poppins text-stone-300 ml-5 mt-7 underline text-[0.8rem]  mobileMedium:w-[26.75rem] mobileMedium:ml-5  bgScreen:w-[69.75rem]">
						<li className="">
							<Link>FAQ</Link>
						</li>
						<li className="md:ml-[7rem]">
							<Link>Help Center</Link>
						</li>
						<li>
							<Link>Terms of Use</Link>
						</li>
						<li className="md:ml-[7rem]">
							<Link>Privacy</Link>
						</li>

						<li>
							<Link>Cookie Preference</Link>
						</li>
						<li className="whitespace-nowrap md:ml-[7rem]">
							<Link>Corporate Information</Link>
						</li>
					</ul>
					<Language />
				</footer>
			</div>
		</div>
	);
}
