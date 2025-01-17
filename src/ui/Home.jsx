//import mobileBgImage from "../assets/netflix-mobile.jpg";
import lgScreenHero from "../assets/netflix-wallpaper.jpg";
import Navbar from "./Navbar";
import SearchQuery from "../inputField/SearchQuery";
import Button from "../button/Button";
import TrendingNow from "../ui/TrendingNow";
import { fetchMovies } from "../servicesAPI/fetchMovies";
//import { useMovies } from "../Contexts/MoviesContext";

export default function Home() {
	//const {isOpen} = useMovies();
	
	const isLargeScreen = window.innerWidth >= 1440; //if the width is greater or equal to 1440px
	return (
		<>
			<div
			
				className={`w-[24.375rem] h-[32rem] bg-cover bg-center overflow-hidden mobileMedium:w-[26.75rem] md:w-[48rem] bgScreen:min-w-[90rem]  bgScreen:min-h-[45rem]`}
				style={{
					backgroundImage: `url(${
						isLargeScreen ? lgScreenHero : lgScreenHero
					})`,
				}}
			>
				<div className="">
					<Navbar />
				</div>
				<div className="w-[24.375rem] min-h-[18rem] mobileMedium:w-[26.75rem] tablet:w-[76.75rem] md:w-[48rem] bgScreen:w-[90rem] bgScreen:min-h-[45rem]">
					<div className="w-full min-h-[18rem] flex flex-col items-center justify-center font-poppins text-white bgScreen:w-[90rem] bgScreen:min-h-[38rem] bgScreen:mt-">
						<h1 className="font-bold text-[1.8rem] text-center tracking-wide w-[23rem] bgScreen:w-[45.75rem] bgScreen:min-h-[3.75rem] bgScreen:text-[3.5rem] bgScreen:font-poppins bgScreen:font-black">
							Unlimited movies, TV shows, and more
						</h1>
						<p className="font-medium md:text-sm bgScreen:text-[1.2rem] bgScreen:font-medium">
							Starts at &#8358;2,200. Cancel anytime.
						</p>
						<p className="text-center w-[22rem] mt-3 font-medium md:w-[30rem] bgScreen:text-base bgScreen:bgScreen:w-[37rem] bgScreen:mr-[0.9rem] bgScreen:font-normal bgScreen:whitespace-nowrap bgScreen:leading-[1.5]">
							Ready to watch? Enter your email to create or restart your
							membership.
						</p>
					</div>

					<div className="relative text-center w-[24.375rem] mt-[-2.9rem] mobileMedium:overflow-hidden mobileMedium:w-[26.75rem] md:w-[48rem] md:min-h-[7rem] md:mt-[-5rem] md:flex md:justify-center md:items-center md:gap-2 bgScreen:mx-auto bgScreen:mt-[-13rem] bgScreen:w-[45.25rem]">
						<SearchQuery
							mobileMedium="mobileMedium:w-[24rem] mobileMedium:ml-[3rem]"
							md="md:w-[16.5rem] md:rounded md:py-4 md:text-sm md:font-light"
							bgScreen="bgScreen:w-[27.5rem] bgScreen:py-4"
						/>
						<Button
							md="w-[11rem] md:py-[0.6rem]  md:mt-[-0.2rem] min-h-[2.9rem]"
							bgScreen="bgScreen:w-[16.7rem] bgScreen:rounded bgScreen:px-[3rem]"
						/>
					</div>
				</div>
				
			</div>

			<TrendingNow />

		</>
	);
}

export async function loader() {
	const movies = await fetchMovies();
	return movies || [];
}
