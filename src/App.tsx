import './App.css'
import MoviesList from './components/MoviesList'
import movies from './data/movies.json'

function App() {
  return (
    <>
      <MoviesList movies={movies} />
    </>
  )
}

export default App
