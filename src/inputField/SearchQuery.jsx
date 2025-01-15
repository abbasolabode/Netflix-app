import { useState } from "react";
import { useDispatch } from "react-redux";
import { getEmail } from "../login/loginSlice";
import { useEmailContext } from "../Contexts/EmailInputContext";


export default function SearchQuery({ mobileMedium, md, mdTablet, bgScreen }) {
	const [input, setInput] = useState("");
	//const dispatch = useDispatch()
	const {handleEmail } = useEmailContext(); 

    function handleGetInput(e){
		e.preventDefault()
       if(!input) return null;
	   handleEmail(input)
	   setInput("")
	  //dispatch(getEmail(input))
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



