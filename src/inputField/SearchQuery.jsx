import { useState } from "react";
import { useDispatch } from "react-redux";
import { getEmail } from "../login/loginSlice";
import { useEmailContext } from "../Contexts/EmailInputContext";
import { useNavigate } from "react-router-dom";

export default function SearchQuery({ mobileMedium, md, mdTablet, bgScreen }) {
	//Input state
	const [input, setInput] = useState("");
	const navigate = useNavigate(); //useDispatch hook for update the state in Redux
	const dispatch = useDispatch();
	const { handleEmail } = useEmailContext(); //consuming the useEmailContext

	function handleGetInput(e) {
		e.preventDefault();
		if (!input) return null; //If there's no input it returns null
		handleEmail(input); //update the emailContext
		dispatch(getEmail(input)); //update the email state in redux
		navigate("/settings"); //navigate to the setting route if the condition is met
		setInput(""); //reset state
	}

	if (bgScreen) {
		return (
			<form onSubmit={handleGetInput}>
				<input
					className={`w-[22rem] min-h-[3rem] placeholder:text-white rounded-md bg-[#2D2D2D] text-white font-poppins pl-3 outline-none focus:outline-slate-50 opacity-90 border ${bgScreen} border-[#F4F4F4] `}
					placeholder="Email address"
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>
		);
	}

	if (mdTablet) {
		return (
			<form onSubmit={handleGetInput}>
				<input
					className={`w-[22rem] min-h-[3rem] placeholder:text-white rounded-md bg-[#2D2D2D] text-white font-poppins pl-3 outline-none focus:outline-slate-50 opacity-90 border ${mdTablet} border-[#F4F4F4] `}
					placeholder="Email address"
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>
		);
	}

	if (md) {
		return (
			<form onSubmit={handleGetInput}>
				<input
					className={`w-[22rem] min-h-[3rem] placeholder:text-white rounded-md bg-[#2D2D2D] text-white font-poppins pl-3 outline-none focus:outline-slate-50 opacity-90 border ${md} border-[#F4F4F4] `}
					placeholder="Email address"
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>
		);
	}

	if (mobileMedium) {
		return (
			<form className="mobileMedium:w-[26rem]" onSubmit={handleGetInput}>
				<input
					className={`w-[22rem] min-h-[3rem] placeholder:text-white rounded-md bg-[#2D2D2D] text-white font-poppins pl-3 outline-none focus:outline-slate-50 opacity-90 border ${mobileMedium} border-[#F4F4F4] `}
					placeholder="Email address"
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</form>
		);
	}

	return (
		<form onSubmit={handleGetInput}>
			<input
				className=" w-[22rem] min-h-[3rem] placeholder:text-white rounded-md bg-[#2D2D2D] text-white font-poppins pl-3 outline-none focus:outline-slate-50 opacity-90 border border-[#F4F4F4] "
				placeholder="Email address"
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</form>
	);
}
