import React from "react";
import './generalcontent.css'

export function Generalcontent({mainbase}){
    return(
        <section className="content">
            {mainbase.map(movie=>
            <article className="content__flip-movie" key={movie.id}>
            <div className="content__flip-1 content__flip-1--front">
                <img className="content__inner" src={movie.image} alt={movie.title} />
            </div>
            <div className="content__flip-1 content__flip-1--back">
                <p className="content__inner" >{movie.synopsis}</p>
            </div>
            </article>
            )}
            
        </section>
    );
}