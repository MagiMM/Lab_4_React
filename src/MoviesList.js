import Movie from "./Movie";

export default function MoviesList(props) {
    return (
        <div>
            <h2>Titles</h2>
            <ul>
                {props.movies.map(movie => <Movie key={movie.title} title={movie.title} year={movie.year}/>)}
            </ul>
        </div>
    );
}
