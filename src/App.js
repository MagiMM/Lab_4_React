import './App.css';
import {useState} from "react";
import "milligram";


function App() {
    const [title, setTitle] = useState('Wall-E');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([
        {title: "Wall-E", year: 2008},
        {title: "Pulp Fiction", year: 1994},
        {title: "Matrix", year: 1999},
        {title: "1670", year: 2023},
    ]);

    let message;
    if (title.length < 5) {
        message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;
    } else if (title.length < 15) {
        message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
    } else {
        message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    }

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function addMovie() {
        const newMovie = { title: title, year: parseInt(year) || 0 };
        setMovies([...movies, newMovie]);
        setTitle('');
        setYear('');
    }

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>

            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
            </ul>
            <h2>My favourite movie for today is {title}</h2>
            {title.length > 0 && <div>{message}</div>}
            <label>
                Tytuł:
                <input type="text" value={title} onChange={handleChange}/>
            </label>
            <label>
                Rok wydania:
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)}/>
            </label>
            <button onClick={addMovie}>Dodaj film</button>
        </div>
    );
}

export default App;
