import loginLogo from "./assets/netflix-logo-svg.png";
import { IoIosLaptop } from "react-icons/io";
import { SlScreenDesktop } from "react-icons/sl";
import { BsTablet } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";


function Settings() {
	return (
		<div className="w-[24.375rem] min-h-[100vh] overflow-hidden">
			<div>
				<div className="w-[24.375rem] min-h-[2.875rem] flex justify-between items-center ">
					<img
						src={loginLogo}
						alt="Logo"
						className="w-[4.5rem] ml-[0.725rem] "
					/>
					<Link
						to="/login"
						className="w-[2.8rem] font-poppins mx-[0.625rem] font-semibold text-[0.8rem] text-[#333333]"
					>
						Sign in
					</Link>
				</div>
				<hr className="border border-t-stone-200 font-light" />
			</div>

			<div className="w-[24.375rem] min-h-[24.66rem] flex flex-col justify-center mt-16">
				<span className="flex justify-center items-center w-[20.375rem] ">
					<span className="w-[16.25rem] min-h-[5.625rem] flex items-center gap-4">
						<IoIosLaptop className="w-[5rem] min-h-[6rem] text-red-500 mt-7" />
						<SlScreenDesktop className="w-[6rem] min-h-[6rem] text-red-500" />
						<span className="flex items-center">
							<BsTablet className="w-[3rem] min-h-[6rem] text-red-500" />
							<BsPhone className="w-[2rem] min-h-[6rem] text-red-500 mt-3" />
						</span>
					</span>
				</span>
				<span className="w-[20.375rem] min-h-[1.2875rem]  font-light font-poppins ml-9">
					Step <span className="font-semibold ">1</span> of
					<span className="font-semibold"> 3</span>
				</span>

				<div className="w-[22.375rem] min-h-[5.125rem] flex flex-col justify-center ml-[2rem] flex">
					<h1 className=" w-[22.375rem] text-[1.8rem] font-poppins font-semibold  min-h-full text-[#333333]">
						Finish setting up your account
					</h1>

					<p className="w-[18.75rem] font-medium text-[1.125rem] leading-6 text-[#333333] mt-4">
						Netflix is personalized for you. Create a password to watch on any
						device at any time.
					</p>
				</div>

				<div className="w-[20.375rem] min-h-[4.5rem] border mx-auto mt-8 flex items-center justify-center bg-red-600 rounded-md">
					<button className="text-[1.5rem] font-poppins font-medium text-white cursor-pointer">
						NEXT
					</button>
				</div>
			</div>
		</div>
	);
}

export default Settings;
