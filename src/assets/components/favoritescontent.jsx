import React from "react";
import './favoritecontent.css';

export function Favoritescontent({mainbase,handleroutes}){
   // console.log('entra en componente favorites',mainbase)
if(!mainbase){
    return;
}

const favorites=mainbase.filter(el=>el.favorite)

if(favorites.length == 0){
    return(
        <section className="favorite-noinfo-container">
        <h2 className="favorite-noinfo" >There's no favorites yet</h2>
        <button className="favorite-return"  data-path="main" onClick={handleroutes}>Return to the list</button>
        </section>
    );
}else{
    return(
        <section>
            <div>
                <button data-path="main" onClick={handleroutes} >Return</button>
            </div>
        {favorites.map(movie=>
            <article className="content__flip-movie" key={movie.id} data-id={movie.id}>
                <div className="content__flip-1 content__flip-1--front" data-id={movie.id}>
                    <img className="content__inner" data-path='card' src={movie.image} alt={movie.title} onClick={handleroutes}/>
                </div>
                <div className="content__flip-1 content__flip-1--back">
                    <p className="content__inner" data-path='card' onClick={handleroutes} >{movie.synopsis}</p>
                </div>
            </article>
        )}
        </section>
    );
}

    
}