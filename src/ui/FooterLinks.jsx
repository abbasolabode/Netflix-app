import { Link } from "react-router-dom";
import { IoLanguageSharp } from "react-icons/io5";
import Button from "../button/Button";
import Language from "./Language";


export default function FooterLinks() {  
	return (
		<div className="mobileMedium:w-[26.75rem] mobileMedium:ml-5 md:w-[48rem] md:h-auto bgScreen:w-[90rem]">
			<div className="w-[24.375rem] mt-[4rem] ml-6 overflow-hidden md:w-[48rem] bgScreen:w-[71.5rem]">
				<div className="w-full">
					<Link>
						<p className="font-poppins underline font-medium text-[1.1rem] text-sm text-stone-400 bgScreen:ml-[3.5rem]">
							Questions? Contact us.
						</p>
					</Link>
				</div>

				<div className="mt-[3rem] md:w-[48rem] bgScreen:w-[71.5rem]">
					<ul className="text-[#e5e5e5] font-poppins underline font-light text-sm md:grid md:grid-rows-2 md:grid-flow-col md:min-h-0 bgScreen:w-[71.5rem] bgScreen:flex bgScreen:justify-around">
						<li className="mb-4 bgScreen:w-[17.1875rem]">
							<Link>
								<p className="bgScreen:w-[1.6rem] bgScreen:ml-5">FAQ</p>
							</Link>
						</li>
						<li className="mb-4 bgScreen:w-[1.6rem]">
							<Link>
								<p className="bgScreen:w-[3.125rem] ">Account</p>
							</Link>
						</li>
						<li className="mb-4 md:ml-10">
							<Link className="">
								<p className="bgScreen:w-[7rem] bgScreen:ml-[7rem] bgScreen:whitespace-nowrap">
									Help Center
								</p>
							</Link>
						</li>
						<li className="mb-4 md:ml-10 bgScreen:w-[17.1875rem]">
							<Link>
								<p className="bgScreen:w-[4rem] bgScreen:ml-[9rem] bgScreen:whitespace-nowrap">
									Media Center
								</p>
							</Link>
						</li>
					</ul>

					<ul className="text-[#e5e5e5] font-poppins underline font-light text-[1.1rem] md:grid md:grid-rows-2 md:grid-cols-2 text-sm bgScreen:w-[77.5rem] bgScreen:flex bgScreen:justify-around">
						<li className="mb-4 bgScreen:w-[13rem]">
							<Link className="mb-4 ">
								<p className="bgScreen:ml-[-2.6rem] bgScreen:whitespace-nowrap">
									Investor Relations
								</p>
							</Link>
						</li>
						<li className="mb-4 bgScreen:w-[10rem] ">
							<Link className="">
								<p className="bgScreen:ml-[-7rem]">Jobs</p>
							</Link>
						</li>
						<li className="mb-4 bgScreen:w-[8rem]">
							<Link>
								<p className="bgScreen:ml-[-13.5rem] ">What to watch</p>
							</Link>
						</li>
						<li className="mb-4">
							<Link>
								<p className="bgScreen:ml-[-10.5rem] ">Terms of Use</p>
							</Link>
						</li>
					</ul>

					<ul className="text-[#e5e5e5] font-poppins underline font-light text-sm  md:grid md:grid-rows-2 md:grid-cols-2  bgScreen:w-[71.5rem] bgScreen:flex bgScreen:justify-around">
						<li className="mb-4 bgScreen:w-[17.1rem]">
							<Link className="mb-4 bgScreen:w-[2.6rem] bgScreen:text-inherit">
								<p className="bgScreen:ml-[-1.7rem]">Privacy</p>
							</Link>
						</li>
						<li className="mb-4">
							<Link>
								<p className="bgScreen:ml-[-8.5rem]">Cookie Preferences</p>
							</Link>
						</li>
						<li className="mb-4 bgScreen:w-[10rem]">
							<Link>
								<p className="bgScreen:ml-[-3.2rem]">Corporate Information</p>
							</Link>
						</li>
						<li className="mb-4">
							<Link>
								<p className="bgScreen:mr-[0.4rem]">Contact Us</p>
							</Link>
						</li>
					</ul>

					<ul className="text-[#e5e5e5] font-poppins underline font-light text-sm md:grid md:grid-rows-2 md:grid-cols-2 bgScreen:w-[71.5rem] bgScreen:flex bgScreen:justify-around">
						<li className="mb-4">
							<Link className="mb-4">
								<p className="bgScreen:ml-[-1.6rem]">Speed Test</p>
							</Link>
						</li>
						<li className="mb-4">
							<Link>
								<p className="bgScreen:ml-[6rem]">Legal Notices</p>
							</Link>
						</li>
						<li className="mb-4">
							<Link>
								<p className="bgScreen:w-[17rem] bgScreen:mr-[11rem]">Only on Netflix</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="w-[24.375rem] mt-[4.5rem] ml-3 mb-[5rem] bgScreen:w-[90rem] bgScreen:ml-[2.9rem]">
				<Language />

				<h4 className="text-stone-400 mt-[2rem] font-poppins ml-5 text-sm bgScreen:text-[1.1rem]">
					NetFlix Nigeria
				</h4>
			</div>

			<div className="flex items-end justify-center mt-12 mb-5 sticky bottom-0 md:hidden  mobileMedium:hidden">
				<Button bottomFooterBtn="w-[22rem] pl-[8rem]" />
			</div>
		</div>
	);  
}