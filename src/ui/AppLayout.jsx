import { Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../servicesAPI/fetchMovies";


export default function AppLayout() {
	return (
		<div className="w-[24.375rem] mx-auto mobileMedium:mr-[2.5rem] md:w-[48rem] mobileMedium:mx-auto bgScreen:w-[90rem] bgScreen:mx-auto">
			{<Outlet />}
		</div>
	);
}



export async function loader({params}){
  const {movieId} = params;

  console.log(movieId)
  const dataDetails = await fetchMovieDetails(974453);
  return dataDetails || [];
}