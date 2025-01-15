import { Link, useNavigate } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import LoaderUi from "../ui/LoaderUi";
import { useSelector } from "react-redux";
import { useEmailContext } from "../Contexts/EmailInputContext";

export default function Button({ moveInfoBtnStyle, bottomFooterBtn, md, bgScreen }) {
	const navigation = useNavigation();
	const isLoading = navigation.state === "isLoading";
	//If navigation state is matches isLoading
	//const { email } = useEmailContext();
	//const navigate = useNavigate();

	/* 	if (!email) return;
	function handleEmailAddress() {
		navigate("/login");
	} */

	if (md)
		return (
			<div>
				<Link>
					<button
						className={`flex items-center mx-auto w-[11.4rem] min-h-[3.2rem] px-6 mt-5 bg-[#E50914] rounded-md font-semibold whitespace-nowrap text-[1.2rem] ${bottomFooterBtn} ${md}  text-white ${moveInfoBtnStyle}`}
					>
						Get Started
						<span className="w-[5rem] text-[1.8rem] flex items-center ml-3 md:w-[5rem] md:flex md:justify-start">
							{isLoading ? <LoaderUi /> : <IoIosArrowForward />}
						</span>
					</button>
				</Link>
			</div>
		);

	if (bottomFooterBtn)
		return (
			<div>
				<Link>
					<button
						className={`flex items-center mx-auto w-[11.4rem] min-h-[3.2rem] px-6 mt-5 bg-[#E50914] rounded-md font-semibold whitespace-nowrap text-[1.2rem] ${bottomFooterBtn}  text-white ${moveInfoBtnStyle}`}
					>
						Get Started
						<span className="w-[5rem] text-[1.8rem]  flex items-center ml-3">
							{isLoading ? <LoaderUi /> : ""}
						</span>
					</button>
				</Link>
			</div>
		);

	if (bgScreen)
		return (
			<div>
				<Link>
					<button
						className={`flex items-center mx-auto w-[11.4rem] min-h-[3.2rem] px-6 mt-5 bg-[#E50914] rounded-md font-semibold whitespace-nowrap text-[1.2rem] ${bgScreen}  text-white ${moveInfoBtnStyle}`}
					>
						Get Started
						<span className="w-[5rem] text-[1.8rem]  flex items-center ml-3">
							{isLoading ? <LoaderUi /> : ""}
						</span>
					</button>
				</Link>
			</div>
		);

	return (
		<div>
			<Link>
				<button
					className={`flex items-center  mx-auto w-[11.4rem] min-h-[3.2rem] px-6 mt-6 bg-[#E50914] rounded-md font-semibold whitespace-nowrap text-[1.2rem] ${bottomFooterBtn}  text-white ${moveInfoBtnStyle}`}
				>
					Get Started
					<span className="w-[5rem] text-[1.8rem] flex items-center ml-3  md:w-[5rem] md:mr-6 md:pr-2 md:flex md:justify-start">
						{isLoading ? <LoaderUi /> : <IoIosArrowForward />}
					</span>
				</button>
			</Link>
		</div>
	);
}
