import './App.css'
import MovieCard from "./components/MovieCard.jsx"

function App() {
  const movieNumber = 1;
  return (
    <>
      {movieNumber === 1 && <MovieCard movie={{ title: "Cagri's Film", release_date: "2025" }} />}
    </>
  )
}

export default App
