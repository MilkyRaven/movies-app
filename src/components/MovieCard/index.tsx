import "./styles.css";

function MovieCard() {
    return (
        <div className="movie-card">
            {/* encabezado */}
            <div className="movie-header">
                <h2 className="movie-title">Star Wars: the Last Jedi</h2>
                <p className="movie-genre">Acción</p>
                <p className="movie-rating">8/10</p>
            </div>
            {/* imagen + descripción */}
            <div className="movie-body">
                <div className="movie-image">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg"
                        alt="Star Wars: The Last Jedi"
                    />
                </div>
                <div className="movie-description">
                    <h3>Sobre la película</h3>
                    <p>En "Star Wars: The Last Jedi", la lucha entre la Resistencia y la Primera Orden llega a un punto crítico. Rey continúa su entrenamiento con Luke Skywalker mientras descubre la fuerza dentro de sí misma. La película combina acción épica, efectos visuales impresionantes y profundiza en los dilemas morales de sus personajes.</p>
                </div>
            </div>
            {/* Accion de favoritos */}
            <div className="movie-footer">
                <button className="favorite-btn"> Marcar como favorita</button>
            </div>
        </div>
    )
}

export default MovieCard