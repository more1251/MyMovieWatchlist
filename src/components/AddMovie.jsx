import React,{useState} from 'react';
import { MovieCard } from './MovieCard';


export const AddMovie = () => {

    const [mname, setMname] = useState("");
    const [results, setResults] = useState([]);


    const onChange = (e)=>{
        e.preventDefault();
        setMname(e.target.value);


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&langauge=en-US&page=1&include_adult=false&query=${e.target.value}`
        ).then((res) => res.json())
        .then((data)=>{
           
            if (!data.errors) {
                setResults(data.results);
            }
            else{
                setResults([]);
            }
            
        })
    }

    return (
        <div className="add-page"> 
    
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                       <input type="text" name="moviename" id="moviename" placeholder='Search for You Movie' value={mname} onChange={onChange}/>
                    </div>

                    {results.length>0 && (
                        <ul className="results">
                            {results.map((movie)=>(
                                <li key={movie.id}>
                                    <MovieCard movie={movie} />

                                </li>
                            
                            ))}
                        </ul>
                    )}
                </div>
            </div>
          
        </div>
    )
}
