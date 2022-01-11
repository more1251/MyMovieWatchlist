import React,{createContext, useReducer,useEffect} from 'react'
import AppReducer from './AppReducer';


//INITIAL STATE
const initialState = {
    watchlist: localStorage.getItem("watchlist")? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched")? JSON.parse(localStorage.getItem("watched")) : [],
}

//create context
export const MovieContext = createContext(initialState);
    
//provider components
export const MovieProvider = (props) =>{

    const [state, dispatch] = useReducer(AppReducer,initialState); 
    
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
 
        localStorage.setItem('watched', JSON.stringify(state.watched));
         
    }, [state])

    
    //actions

    //add to watchlist
    const addMovie =(movie)=>{
       dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})  
    }
   
    //remove from watchlist
    const removeMovie =(id)=>{
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})  
    }
    
    //add movie from watchlist to watched
    const watchedMovie =(movie)=>{
        dispatch({type: "ADD_MOVIE_TO_WATCHED_PAGE", payload: movie})  
    }


    //move to watchlist from watched
    const moveToWatchList =(movie)=>{
        dispatch({type: "MOVE_TO_WATCHLIST", payload: movie})  
    }

    //remove from watched

    const removeFromWatched =(id)=>{
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHED", payload: id})  
    }

    return(
        <MovieContext.Provider value={{watchlist: state.watchlist , watched: state.watched, addMovie, removeMovie,watchedMovie,moveToWatchList,removeFromWatched }}>                         
          {props.children}
        </MovieContext.Provider>
    )
}