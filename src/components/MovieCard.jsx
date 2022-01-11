import React,{useContext} from 'react';
import { MovieContext } from '../context/MovieState';

export const MovieCard = (props) => {
   
    let {movie} = props;

    const {addMovie,watchlist,watched,watchedMovie} = useContext(MovieContext);
    
    let storedMovie = watchlist.find(o => o.id === movie.id);

    let storedMovieWatched = watched.find(o => o.id === movie.id);

    return (
        <div className='result-card'>
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                ): (
                  <div className="filler-poster"></div>
                )
                }
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">{ movie.release_date? movie.release_date.substring(0,4) : "-"   }</h4>
                </div>


                <div className="controls">
                  <button className="btn2" onClick={()=> addMovie(movie)} disabled= {storedMovie? true : storedMovieWatched? true : false} >Add to WatchList</button>

                  <button className="btn2" onClick={()=> watchedMovie(movie)} disabled= {storedMovieWatched? true : false} >Watched</button>
                </div>
            </div>

           
        </div>
    )
}
