import { Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../servicesAPI/fetchMovies";

export default function AppLayout() {
	return (
		<div className="w-[24.375rem] mx-auto mobileMedium:mr-[2.5rem] md:w-[48rem] mobileMedium:mx-auto bgScreen:w-[90rem] bgScreen:mx-auto">
			{<Outlet />}
		</div>
	);
}

export async function loader({ params }) {
	//Since I can not use the useParams outside of a functional component, I use params to get the ID of the clicked or element
	const { movieId } = params;

	console.log(movieId);
	const dataDetails = await fetchMovieDetails(movieId); //Calling the fetchMovieDetails with an ID
	return dataDetails || [];
}
