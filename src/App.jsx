import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home, { loader as homeLoader } from "./ui/Home";
import Movies, { loader as movieLoader } from "./aboutMovies/Movies";
import ErrorMessage from "./ui/ErrorMessage";
import MovieInfo, {
	loader as movieDetailsLoader,
} from "./aboutMovies/MovieInfo";
import { MovieProvider } from "./Contexts/MoviesContext";
import EmailInputProvider from "./Contexts/EmailInputContext";
import Login from "./login/Login";

const router = createBrowserRouter([
	{
		element: <AppLayout />, // Parent route
		errorElement: <ErrorMessage />,
		children: [
			{
				index: true,
				loader: homeLoader,
				errorElement: <ErrorMessage />,
				element: <Home />,
			},
			{
				path: "/movies",
				loader: movieLoader,
				errorElement: <ErrorMessage />,
				element: <Movies />,
			},
			{
				path: "/movielist/:id",
				loader: movieDetailsLoader,
				element: <MovieInfo />,
				errorElement: <ErrorMessage />,
			},

			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

function App() {
	return (
		<EmailInputProvider>
			<MovieProvider>
				<RouterProvider router={router} />
			</MovieProvider>
		</EmailInputProvider>
	);
}

export default App;
