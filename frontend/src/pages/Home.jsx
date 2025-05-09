import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import '../css/Home.css'
import { getPopularMovies, searchMovies } from '../services/api';


function Home() {
    const [searchQuery, setSearchQuery] =useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (error) {
                setError("Failed to load movies...")
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = () => {
        e.preventDefault()
        setSearchQuery()        
    };
    return (
        <div className='home'>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder='Search for movies...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type='submit' className='search-button'>Search</button>
            </form>
        <div className='movies-grid'>
            {movies.map((movie) => 
            <MovieCard movie={movie} key={movie.id}
            />)}
        </div>
    </div >
        
        );
}

export default Home