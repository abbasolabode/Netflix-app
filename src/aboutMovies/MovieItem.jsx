import { Link, useFetcher } from "react-router-dom";
import logoIcon from "../assets/Netflix-logo.png";
import { useEffect } from "react";
import { useMovies } from "../Contexts/MoviesContext";

export default function MovieItem({ movie, index }) {
	const fetcher = useFetcher();
	const { setMoviesResults } = useMovies();

	
	useEffect(() => {
		if (!fetcher.data && fetcher.state === "idle") {
			fetcher.load("/movies");
		}
	}, [fetcher]);

	useEffect(() => {
		if (fetcher.data) {
			setMoviesResults(fetcher.data.results);
		}
	}, [fetcher.data, setMoviesResults]);


const {
	title,
	overview,
	release_date,
	poster_path: poster,
	backdrop_path: backdrop,
	id,
} = movie;
const imgUrl = poster
	? `https://image.tmdb.org/t/p/w500${poster}`
	: "/path/to/default/image.jpg";
const movieIndex = index + 1;



	

	return (
		<div className="w-[24.375rem] min-h-[5rem] relative md:w-[48rem] bgScreen:p-0 bgScreen:m-0">
			<Link to={`/movielist/${id}`}>
				<div className="relative transition-transform duration-500 transform hover:scale-105 md:w-[48rem] bgScreen:p-0 bgScreen:m-0">
					<div className="ml-3 mr-3 w-[7rem] bgScreen:w-[11.75rem] bgScreen:p-0 bgScreen:m-0">
						<img src={imgUrl} alt={title} className="rounded-lg" />
					</div>
				</div>

				{/*If the Index is below 10, show 10 of the movies with icons and number   */}
				{movieIndex <= 10 && (
					<>
						<img
							className="absolute inset-4 w-3 min-h-6 bgScreen:min-h-9 "
							src={logoIcon}
							alt="Netflix logo"
						/>
						<div className="absolute bottom-[-0.7rem] flex flex-col items-left bgScreen:top-[10rem] bgScreen:p-0 bgScreen:m-0">
							<span className="text-7xl font-bold font-poppins text-stone-600 bgScreen:text-[7rem] bgScreen:text-stone-600">
								{movieIndex}
							</span>
							<span className="bg-red-600 px-1 py-1 ml-5 text-white text-[0.7rem] font-normal font-poppins bgScreen:text-[1.1rem] bgScreen:font-medium bgScreen:w-[10rem] bgScreen:px-2 bgScreen:rounded">
								Recently Added
							</span>
						</div>

						<div className="w-[1.5rem] text-center absolute top-0 left-[6.25rem] font-poppins rounded-tr-lg font-semibold bg-red-600 text-white bgScreen:w-[1.7rem] bgScreen:relative bgScreen:top-[-17.5rem] bgScreen:left-[10rem]">
							<p className="text-[0.6rem]">Top</p>
							<p>10</p>
						</div>
					</>
				)}
			</Link>
		</div>
	);
}
