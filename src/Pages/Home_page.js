/* eslint-disable react/jsx-no-comment-textnodes */
import React , {useState, useEffect} from "react";
import axios from "axios";
//cmp
import EntertainmentCardSlider from "../components/Entertainment/entertainment_card";
import Premier from "../components/Premier/premier";



const HomePage = () =>{
    const [popularMovies, setPopularMovies] =useState([]);
    useEffect(()=>{
    const requestPopularMovies =async()=>{
        const getPopularMovies =await axios.get("/movie/popular");
        setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
}, []);
console.log({popularMovies});
    return (
       
        <>
    <div className="flex flex-col gap-5">
        <div className="container mx-auto px-32 my-10">
        <h1 className="text-2xl font-bold text-gray-800  mx-3 ">The Best of Entertainment</h1>
        <EntertainmentCardSlider />
        
        </div>

    <div className="bg-bms-700 py-16">
        <div className="mx-auto px-32 container">
            <img 
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="premier-rupay"
                className="w-full h-full"
            />
        </div>
        {/* premier divsn */}
        <div className="mx-auto px-32 container">
        <Premier  PremierImages={popularMovies} />
        </div>
        
    </div>
        </div>
            
        </>
    )
}

export default HomePage;