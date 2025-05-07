import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'

function Home() {
    const [searchQuery, setSearchQuery] =useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The Matrix", release_date: "2000" }
    ];
    const handleSearch = () => {
        e.preventDefault()
        setSearchQuery()        
    };
    return (
        <div className='home'>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder='Search for movies...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </form>
            <button type='submit' className='search-button'>Search</button>
        <div className='movies-grid'>
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}
            />)}
        </div>
    </div >
        
        );
}

export default Home