import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
}


const moviesSlice = createSlice({
    name: "movieList",
    initialState,
    reducer:{
        updateMovie(state, action){
            state.movies.push(action.payload)
        }
    }
})

export const {updateMovie} = moviesSlice.actions;

export default moviesSlice.reducer;