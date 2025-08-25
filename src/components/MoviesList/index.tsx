import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import MovieCard from "../MovieCard";
import type { Movie } from "../../types/Movie";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./styles.css";

interface MovieListProps {
    movies: Movie[];
}

function MoviesList({ movies }: MovieListProps) {
    const glideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (glideRef.current) {
            const glide = new Glide(glideRef.current, {
                type: "carousel",
                startAt: 0,
                perView: 3,
                gap: 20,
                // autoplay: 3000,
                hoverpause: true,
                focusAt: "center",
                animationDuration: 800,
            });

            glide.mount();
        }
    }, []);

    return (
        <div className="glide" ref={glideRef}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {movies.map((movie) => (
                        <li className="glide__slide" key={movie.id}>
                            <MovieCard movie={movie} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><IoIosArrowBack /></button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><IoIosArrowForward /></button>
            </div>
        </div>
    );
}

export default MoviesList