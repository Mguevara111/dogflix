import React from "react";
import './filtercontent.css';

export function Filtercontent({filterbase,mainbase,handleroutes,lightmode}){
    //console.log(filterbase)
    if(!mainbase){
        return;
    }

   

    const fm=mainbase.filter(el=>{
        if(filterbase.length==0){
            return el
        }else{
            return filterbase.some(ele=>{
                    return el.year == ele || el.genre.includes(ele) || (el.rating >= Number(ele) && el.rating < Number(ele)+1)
                })
        }
           
    })
    //console.log(fm)
    return(
        <section className="content">
        {fm.map(movie=>
            <article className={`content__flip-movie ${lightmode?"content__flip-movie--light":""}`} key={movie.id} data-id={movie.id}>
                <div className="content__flip-1 content__flip-1--front" data-id={movie.id}>
                    <img className="content__inner" src={movie.image} alt={movie.title} data-path="card" onClick={handleroutes}/>
                </div>
                <div className="content__flip-1 content__flip-1--back" data-id={movie.id}>
                    <p className={`content__inner ${lightmode?"content__inner--light":""}`} data-path="card" onClick={handleroutes}>{movie.synopsis}</p>
                </div>
            </article>
        )}

        </section>
        
    );
}