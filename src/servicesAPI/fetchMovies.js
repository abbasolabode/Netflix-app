import { API_URL, apiKey } from "./apiUrl";
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmZkNTdkYjQ4NzlhOTQ3ODczNWRlNzJhZjEwODNmMiIsIm5iZiI6MTczNjM2OTk5Ny4xODIwMDAyLCJzdWIiOiI2NzdlZTc0ZGM1ZDJlOTZlMjY3YWY5MmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sv_NOUcjs28rXGhDxYC3mreHandLS6y8we00rJEOOOU",
	},
};

export async function fetchMovies() {
	const res = await fetch(API_URL, options);
	if (!res.ok) throw new Error("Unable to make a network request");
	const data = await res.json();
	console.log("Data fetched", data);
	return data || [];
}

export async function fetchMovieDetails(movieId) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`, options);
	if (!res.ok) throw new Error("Unable to make a network request");
	const data = await res.json();
	console.log("Fetching data", data);
	return data || [];
}
