import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";


function App() {
    const [movies, setMovies] = useState([
        {title: "Wall-E", year: 2008},
        {title: "Pulp Fiction", year: 1994},
        {title: "Matrix", year: 1999},
        {title: "1670", year: 2023},
    ]);

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <MoviesList movies={movies}/>
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>
        </div>
    );
}

export default App;
