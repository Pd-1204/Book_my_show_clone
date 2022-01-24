import {Route, Routes} from "react-router-dom";
import './App.css';
import axios from "axios";
//hoc
import DefaultHOC from "./HOC/default.hoc";
import MovieHOC from "./HOC/movie.hoc";
//components
import Temp from "./components/temp";

//pages
import HomePage from "./Pages/Home_page";
import Movie from "./Pages/Movie.page";

//axios default settings

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie} />
    
     
    </>
  );
}
// / , /movie
export default App;

//(from inner to outer) temp.js -> default layout -> defualt hoc -> app.js -> index.js