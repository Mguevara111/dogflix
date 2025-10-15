import React from "react";
import { movies } from "../base/movies";

export function Filtercontent({filterbase}){
    //console.log(filterbase)
    if(!filterbase){
        return;
    }
    return(
        <section className="content">
            {movies.map(movie=>{
            for(let f=0;f<filterbase.length;f++){
                
                if(movie.year == Number(filterbase[f]) || movie.genre.includes(filterbase[f]) || movie.rating == Number(filterbase[f])){
                    return <article className="content__flip-movie" key={movie.id}>
                        <div className="content__flip-1 content__flip-1--front">
                            <img className="content__inner" src={movie.image} alt={movie.title} />
                        </div>
                        <div className="content__flip-1 content__flip-1--back">
                            <p className="content__inner" >{movie.synopsis}</p>
                        </div>
                    </article>
                
                }
           } 
        })}
        </section>
    );
}