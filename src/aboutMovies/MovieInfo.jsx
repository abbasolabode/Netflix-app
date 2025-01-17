import { useLoaderData, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../servicesAPI/fetchMovies";
import { useMovies } from "../Contexts/MoviesContext";
import Button from "../button/Button";
import { useState } from "react";

export default function MovieInfo() {
	const navigate = useNavigate();//using the useNavigate hook to redirect to a different route
	const { movieResults } = useMovies(); //consuming context
	const data = useLoaderData(); //Extracting data from the loader
	const [isOpen, setIsOpen] = useState(false);

 //The handleIsOpenToggle function is used to execute the code within its body when it's being clicked i.e it the state is updated when it's toggled, and also the navigate function is also called
	function handleIsOpenToggle() {
		setIsOpen((isOpen) => !isOpen);//state is updated each time the handleIsOpenToggle() is clicked
		navigate("/");//Navigate to Homepage 
	}

   //In an event where there's no data fetched an empty array
	if (!data) return [];
    
	console.log(data)

	//Destructuring data from API
	const {
		title = "", //A defaultvalue of empty string is assigned to title if there's no title
		overView = "",
		release_date: date = "", //A defaultvalue of empty string is assigned to release date if there's no release date
		overview = "", //A defaultvalue of empty string is assigned to overView if there's no overView
		tagline = "",
		poster_path: poster = "", 
		genres = [],//An empty array is assigned to genres if genre holds no data 
	} = data;
   
	const year = date.slice(0, 4);// extracting the year using the slice method
	const API_BASE_URL = "https://image.tmdb.org/t/p/w500";//API URL

	//Destructuring the genre array
	const animationGenre = genres[0]?.name || "";
	const familyGenre = genres[1]?.name || "";
	const adventureGenre = genres[2]?.name || "";

	return (
		<div
			className="w-[24.375rem] min-h-[33rem] p-0 m-0 mx-auto border rounded-lg z-50 mt-[3rem] mobileMedium:w-[26.75rem] mobileMedium:min-h-[33rem] mobileMedium:py-3 md:w-[44rem] md:min-h-[30rem] bg-black shadow-2xl overflow-hidden transition-transform transform duration-500 bgScreen:p-0 bgScreen:m-0 bgScreen:mx-auto"
			style={{
				backgroundImage: `url(${API_BASE_URL}${poster})`,
				backgroundSize: "cover",
			}}
		>
			<span
				className="flex justify-end w-[24.375rem] text-white px-2 py-2  md:w-[43rem] overflow-hidden"
				onClick={handleIsOpenToggle}
			>
				<span className="w-[3.2rem] text-center text-[1.5rem] mobileMedium:w-[26.75rem] mobileMedium:flex mobileMedium:justify-end md:w-[40rem] md:flex cursor-pointer bgScreen:p-0 bgScreen:m-0">
					X
				</span>
			</span>
			<div className="w-[24.375rem] min-h-[20rem] p-0 m-0 flex flex-col justify-center mt-8 mobileMedium:w-[26.75rem] mobileMedium:min-h-[33rem] md:min-h-[30rem] bgScreen:p-0 bgScreen:m-0">
				<p className="font-poppins text-6xl font-semibold ml-2 text-white md:w-[45rem]">
					{title}
				</p>
				<div className="w-[24.375rem] ml-2 flex items-center gap-2 mt-3 md:w-[48rem] bgScreen:p-0 bgScreen:m-0">
					<span className="font-light text-sm font-poppins px-1 bg-gray-400">
						{year}
					</span>
					<span className="font-light text-sm  font-poppins px-1 bg-gray-400 bgScreen:ml-1">
						13+
					</span>
					<span className="font-light text-sm font-poppins  px-1 bg-gray-400">
						{adventureGenre}
					</span>
					<span className="font-light text-sm font-poppins  px-1 bg-gray-400">
						{familyGenre}
					</span>
					<span className="font-light text-sm font-poppins  px-1 bg-gray-400 bgScreen:ml-1">
						{animationGenre}
					</span>
				</div>
				<p className="w-[23.275rem] ml-2 font-normal font-poppins text-sm mt-6 text-white mobileMedium:w-[26rem] md:w-[40rem]">
					{overview}
				</p>
			</div>
			<div className="w-[24.375rem] min-h-[3rem] mt-[-1.5rem] md:mt-[-3rem]">
				<Button moveInfoBtnStyle="w-[23rem] min-h-[1.5rem] bg-[#E50914] text-[0.8rem] pl-[4.4rem] text-center flex justify-center py-[0.3rem] md:w-[10rem] md:ml-[1rem]bgScreen:p-0 bgScreen:m-0 md:mt-[-3rem] " />
			</div>
		</div>
	);
}

//Using the loader for asynchronous data fetching... The loader is provider by the React Router Dom
export async function loader({ params }) {
	//Using params to extract id of the clicked movie to get more information about the movie
	const { id } = params; //destructuring the params
	const dataDetails = await fetchMovieDetails(id); //Calling the fetchMovieDetails function with the ID from params
	return dataDetails || [];//Return dataDetails 
}
