//import { useMovies } from "../Contexts/MoviesContext";
import { fetchMovies } from "../servicesAPI/fetchMovies";
import { useLoaderData } from "react-router-dom";
import LoaderUi from "../ui/LoaderUi";
import Slider from "react-slick";
import MovieItem from "./MovieItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Movies() {
	//const { isOpen, handleToggle } = useMovies();
	const movies  = useLoaderData();//Retrieve data 
	

	//If there's no movies render a loading spinner
	if (!movies) return <LoaderUi />;
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 390,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 428,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
		],
	};

	return (
		<div className=" bg-gradient-to-r from-gray-950 from-10% via-zinc-950 via-55% to-gray-950 to-30% bgScreen:w-[90rem]">
			<div  className="w-[24.375rem] overflow-hidden min-h-[13rem] mobileMedium:w-[26.75rem] items-center justify-center md:mx-auto md:gap-2 md:w-[48rem] md:mr-[4rem] bg-gradient-to-r from-gray-950 from-10% via-zinc-950 via-55% to-gray-950 to-30% bgScreen:w-[67rem] bgScreen:mr-[14rem]">
				<Slider {...settings}>
					{/*The results array is looped over and passed each of the movies to the movieItem component  */}
					{movies?.results.map((movie, i) => (
						<div
							key={movie.id}
							className="flex items-center justify-center gap-2  "
						>
							<MovieItem movie={movie} index={i} />
						</div>
					))}
				</Slider>
				
			</div>
		</div>
	);
}



//Calling the fetchMovies function from the Movies component
export async function loader() {
	try {
		const movies = await fetchMovies();//The result of the API call is returned by the fetchMovies function 
		return movies || [];//return movies is exist or return an empty array if there's no data 
	} catch (err) {
		console.error(err.message);//Catch error from the try block
		throw new Error("Bad request");
	}
};