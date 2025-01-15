import { useMovies } from "../Contexts/MoviesContext";
import { fetchMovies } from "../servicesAPI/fetchMovies";
import { useLoaderData } from "react-router-dom";
import LoaderUi from "../ui/LoaderUi";
import Slider from "react-slick";
import MovieItem from "./MovieItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieInfo from "./MovieInfo";

export default function Movies() {
	const { isOpen, handleToggle } = useMovies();
	const movies = useLoaderData();

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
			<div onClick={handleToggle} className="relative w-[24.375rem] overflow-hidden min-h-[13rem] mobileMedium:w-[26.75rem] items-center justify-center md:mx-auto md:gap-2 md:w-[48rem] md:mr-[4rem] bg-gradient-to-r from-gray-950 from-10% via-zinc-950 via-55% to-gray-950 to-30% bgScreen:w-[67rem] bgScreen:mr-[14rem]">
				<Slider {...settings}>
					{movies?.results.map((movie, i) => (
						<div
							key={movie.id}
							className="flex items-center justify-center gap-2  "
						>
							<MovieItem movie={movie} index={i} />
						</div>
					))}
				</Slider>

				<div
					className={
						isOpen
							? "absolute  inset-0 bg-black bg-opacity-50 backdrop-blur-3xl z-50 shadow-2xl"
							: ""
					}
				>
				
				</div>
			</div>
		</div>
	);
}


//	{<MovieInfo />}
//Calling the fetchMovies function from the Movies component
export async function loader() {
	try {
		const movies = await fetchMovies();
		return movies || [];
	} catch (err) {
		console.error(err.message);
	}
}
