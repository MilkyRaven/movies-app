import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import MovieCard from "./components/MovieCard";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MovieCard />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <header>Header</header>
        <section>Body</section>
      </Modal>
    </>
  );
}

export default App;
