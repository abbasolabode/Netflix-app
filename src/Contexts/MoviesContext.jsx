import { createContext, useContext } from "react";
import { useState } from "react";

//Create a context
const MoviesContext = createContext();

function MovieProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [movieResults, setMoviesResults] = useState();

	function handleToggle() {
		setIsOpen((isOpen) => !isOpen);
	}

	return (
		<MoviesContext.Provider
			value={{
				setIsOpen,
				isOpen,
				handleToggle,
				movieResults,
				setMoviesResults,
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
}

//custom hook
function useMovies() {
	const context = useContext(MoviesContext);
	if (context === undefined)
		throw new Error("MovieContext was used outside of the movie provider");
	return context;
}

export { MovieProvider, useMovies };
