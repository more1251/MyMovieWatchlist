import React,{useContext} from 'react'
import { MovieContext } from '../context/MovieState';
import { MovieList } from './MovieList';


export const WatchedPage = () => {

    const {watched} = useContext(MovieContext);

    return (
        <div className="movie-page">
        <div className="container">
            <div className="header">
               <h1 className="heading">Watched Movies</h1>
               <span className="count-pill">{watched.length} {watched.length===1?  "Movie" : "Movie's"}</span>
             </div>
      
      
            {watched.length>0? (
               
               <div className="movie-grid">
               {watched.map((movie)=>{
                   return (
                    <div key={movie.id}> 
                     <MovieList movie={movie} type="watched"/>
                    </div>
                   )
               })}
           </div>

            ):
            <h2 className="no-movies">No Movies to Display, add Some ?</h2>
            }
           

        </div>
    </div>
    )
}
