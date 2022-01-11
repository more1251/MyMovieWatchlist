import React,{useContext} from 'react'
import { MovieContext } from '../context/MovieState'
import { MovieList } from './MovieList';


export const WatchList = () => {

    const {watchlist} = useContext(MovieContext);
    return (

        <div className="movie-page">
            <div className="container">
                <div className="header">
                   <h1 className="heading">My Watchlist</h1>
                   <span className="count-pill">{watchlist.length} {watchlist.length===1?  "Movie" : "Movie's" }</span>
                 </div>
                {watchlist.length>0? (
                   
                   <div className="movie-grid">
                   {watchlist.map((movie)=>{
                       return (
                        <div key={movie.id}> 
                         <MovieList movie={movie} type="watchlist"/>
                        </div>
                       )
                   })}
               </div>
  
                ):
                <h2 className="no-movies">No Movies to Display, add Some ?</h2>
                }
               

            </div>
        </div>


        // <div>
        //     {watchlist.map((movie)=>{

        //         return <h1>{movie.title}</h1>
        //     })}
        // </div>
    )
}
