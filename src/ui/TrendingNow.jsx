import Movies from "../aboutMovies/Movies";
import AccordionItems from "./AccordionItems";
import Cards from "./Cards";
import Footer from "./Footer";


export default function TrendingNow() {
	return (
		<>
			<div className="w-[24.375rem] min-h-[10rem] mobileMedium:w-[26.75rem] md:w-[48rem] bg-gradient-to-r from-gray-950 from-10% outline via-zinc-950 via-55% to-gray-950 to-30% bgScreen:w-[90rem] bgScreen:mb-[-3rem] bgScreen:pt-[3rem]">
				<h2 className=" font-semibold ml-3 pt-8 font-poppins text-white bgScreen:p-0 bgScreen:m-0 bgScreen:text-[1.5rem] bgScreen:pl-[7rem] bgScreen:ml-3">
					Trending Now
				</h2>
				<div className="w-[24.375rem] min-h-[8rem] flex flex-col mobileMedium:w-[26.75rem] md:w-[48rem] bgScreen:w-[90rem] bgScreen:flex-row bgScreen:gap-10 bgScreen:pl-[7rem] bgScreen">
					<div className="w-full mt-3 mobileMedium:w-[26.75rem] md:w-[48rem] bgScreen:w-[6.2rem] bgScreen:inline-block ">
						<select
							name=""
							id=""
							className="w-[22rem] min-h-[2.7rem] font-medium rounded font-poppins pl-1 border-1 ml-3 bg-zinc-900 outline border border-zinc-500 text-white outline-none focus:outline-slate-50 mobileMedium:w-[23.75rem] md:w-[43rem] bgScreen:w-[7.2rem] bgScreen:pt-[0.5rem] bgScreen:pb-[0.5rem] bgScreen:pl-[0.75rem]"
						>
							<option value="">Nigeria</option>
							<option value="">Global</option>
						</select>
					</div>

					<div className="w-full mt-3 mobileMedium:w-[26.75rem] md:w-[43rem] bgScreen:inline bgScreen:w-[6.2rem]">
						<select
							name=""
							id=""
							className="w-[22rem] min-h-[2.7rem] font-medium font-poppins border-1 rounded pl-1 ml-3  bg-zinc-900 border border-zinc-500 text-white mobileMedium:w-[23.75rem] outline-none focus:outline-slate-50 md:w-[43rem] bgScreen:w-[7.2rem] bgScreen:pt-[0.5rem] bgScreen:pb-[0.5rem] bgScreen:pl-[0.75rem]"
						>
							<option value="">Movies</option>
							<option value="">Tv Shows</option>
						</select>
					</div>
				</div>
			</div>

			<Movies />
			<Cards />
			<AccordionItems />
			<Footer />
		</>
	);
}
//-[#2D2D2D]