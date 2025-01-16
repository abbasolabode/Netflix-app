import { createBrowserRouter, RouterProvider } from "react-router-dom";
//AppLayout component as the parent route/component
import AppLayout from "./ui/AppLayout";

//Import the loader function to connect to the Home component
import Home, { loader as homeLoader } from "./ui/Home";
import Movies, { loader as movieLoader } from "./aboutMovies/Movies";//Import the loader function to connect to the Movies component
import ErrorMessage from "./ui/ErrorMessage";

import MovieInfo, {
	loader as movieDetailsLoader,
} from "./aboutMovies/MovieInfo";
//Context API to share data globally
import { MovieProvider } from "./Contexts/MoviesContext";
import EmailInputProvider from "./Contexts/EmailInputContext";
import Login from "./login/Login";



const router = createBrowserRouter([
	{
		element: <AppLayout />, //This is the parent route nesting other routes as children route
		errorElement: <ErrorMessage />,
		children: [
			{
				index: true,
				loader: homeLoader, //The loader function is provided here to link the Home component in order to call the loader function defined in the Home component
				errorElement: <ErrorMessage />,
				element: <Home />,
			},
			{
				path: "/movies", //If this path matches it renders the Movies component
				loader: movieLoader, //The loader function is provided here to link the Movies component in order to call the loader function defined in the Movies component
				element: <Movies />,
				errorElement: <ErrorMessage />, //If there's error during fetching of data the ErrorMessage component is rendered
			},
			{
				path: "/movielist/:id", //This path actually provides the ID of the clicked movie, and if the path matches the ID of the clicked movie it renders the movieInfo component. With params the ID can easily be retrieved.
				loader: movieDetailsLoader, //The loader function is provided here to link the Movies component in order to call the loader function defined in the Movies component
				element: <MovieInfo />,
				errorElement: <ErrorMessage />, //If there's error during fetching of data the ErrorMessage component is rendered
			},

			{
				path: "/login", //Login path
				element: <Login />,
			},
		],
	},
]);

function App() {
	return (
		//Context API to share data globally
		//EmailInput Provider context
		<EmailInputProvider>
			{/*Movie Provider context*/}
			<MovieProvider>
				<RouterProvider router={router} />
			</MovieProvider>
		</EmailInputProvider>
	);
}

export default App;
