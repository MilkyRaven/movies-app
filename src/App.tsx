import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import MoviesList from "./components/MoviesList'
import movies from './data/movies.json";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MoviesList movies={movies} />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <header>Header</header>
        <section>Body</section>
      </Modal>
    </>
  );
}

export default App;
