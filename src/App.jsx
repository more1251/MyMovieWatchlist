import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { WatchedPage } from './components/WatchedPage';
import { AddMovie } from './components/AddMovie';
import { WatchList } from './components/WatchList';
import { MovieProvider } from './context/MovieState';


function App() {
  return (
    
    <> 
      <MovieProvider>
      <Router>
          <Navbar/>

          <Routes>
            <Route exact path='/' element={<WatchList/>}></Route>
            <Route exact path='/watchedmovie' element={<WatchedPage/> }></Route>
            <Route exact path='/addmovie' element={<AddMovie/>}></Route>
          </Routes>
          
          
      </Router>
      </MovieProvider>
      
    </>
    
  );
}

export default App;
