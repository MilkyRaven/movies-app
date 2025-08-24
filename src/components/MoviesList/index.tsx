import MovieCard from "../MovieCard"
import type { Movie } from "../../types/Movie"
import './styles.css'

interface MovieListProps {
    movies: Movie[]
}
function MoviesList({ movies }: MovieListProps) {
    console.log(movies);
    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MoviesList