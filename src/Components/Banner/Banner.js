import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movieIndex, setMovieIndex] = useState(0);  // Initialize with 0
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`
    ).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });

    // Update movie index every 2 seconds
    const interval = setInterval(() => {
      setMovieIndex((prevIndex) => (prevIndex + 4) % movies.length);
    }, 2000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [movies.length]);  // Include movies.length as a dependency

  const movie = movies[movieIndex];

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='banner'
    >
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}
        </h1>
        <div className='banner_button'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h4 className='description'>{movie ? movie.overview : ""}</h4>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;
