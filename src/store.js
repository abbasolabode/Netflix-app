import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./aboutMovies/movieSlice"
import emailReducer from "./login/loginSlice"


const store = configureStore({
    reducer: {
        movieList: movieReducer,
        receiveEmail: emailReducer
        ,
    }
})


export default store;