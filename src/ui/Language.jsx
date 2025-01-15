import { IoLanguageSharp } from "react-icons/io5";

export default function Language() {
	return (
		<div className="w-full relative mt-8">
			<select
				name=""
				id=""
				className="min-h-[2rem] w-[8rem] border-stone-500 border-2 ml-5 text-sm text-white outline bg-neutral-900 rounded font-poppins font-light outline-none pl-10"
			>
				<option value="" className="">
					English
				</option>
			</select>
			<span className="absolute left-2 top-1/2 transform font-roboto pl-4 text-white font-medium text-[1.3rem] ml-2 -translate-y-1/2">
				<IoLanguageSharp />
			</span>
		</div>
	);
}
