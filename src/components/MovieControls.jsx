import React,{useContext} from 'react'
import { MovieContext } from '../context/MovieState';

export const MovieControls = ({movie,type}) => {

    const {removeMovie,watchedMovie,moveToWatchList,removeFromWatched} = useContext(MovieContext);
    return (
        <div className='inner-card-controls'>
            {type=== 'watchlist' &&(
                <>
                 <button className="ctrl-btn"><i className="fas fa-eye" onClick={ ()=> watchedMovie(movie) } ></i></button>
                 
                 <button className="ctrl-btn"><i className="fas fa-times" onClick={ ()=> removeMovie(movie.id) } ></i></button>

                </>
            )}

            {type=== 'watched' &&(
                <>
                 <button className="ctrl-btn"><i className="fas fa-eye-slash" onClick={ ()=> moveToWatchList(movie) } ></i></button>

                 <button className="ctrl-btn"><i className="fas fa-times" onClick={ ()=> removeFromWatched(movie.id) } ></i></button>
                </>
            )}
            
        </div>
    )
}
