import { API_URL, apiKey} from "./apiUrl";
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmZkNTdkYjQ4NzlhOTQ3ODczNWRlNzJhZjEwODNmMiIsIm5iZiI6MTczNjM2OTk5Ny4xODIwMDAyLCJzdWIiOiI2NzdlZTc0ZGM1ZDJlOTZlMjY3YWY5MmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sv_NOUcjs28rXGhDxYC3mreHandLS6y8we00rJEOOOU",
	},
};

//The fetchMovies function fetches data from an API 
export async function fetchMovies() {
	const res = await fetch(API_URL, options);
	if (!res.ok) throw new Error("Unable to make a network request");
	const data = await res.json();//Converting the response fetched to a JavaScript readable format and then the result is then stored into data
	return data || [];// Data is return if exist otherwise an empty array is returned
}



//The fetchMovies function fetches data from an API 
export async function fetchMovieDetails(movieId) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`, options);//This fetches data of the clicked or selected movie using the ID
	if (!res.ok) throw new Error("Unable to make a network request");//If the response is not OK throws an error
	const data = await res.json();//converts the response to a JavaScript readable format and stores the result into data variable
	return data || [];
}

