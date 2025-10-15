import React from "react";
import { Checkfilter } from "./checkfilter";
import { useState } from "react";
import { movies } from "../base/movies";
import './filtermenu.css';

//funcion para crear filtros de los generos
const initgenres=[];
movies.forEach(movie=>{
    movie.genre.forEach(genre=>{
        if(!initgenres.includes(genre)){
            initgenres.push(genre)
        }
    })
})
//console.log(initgenres)

const createfilters=(key)=>{
    //crea los filtro para rating y año
    const newfilter=movies.map(el=>el[key])
    const value=new Set(newfilter)
   const newvalue=[...value]
   return newvalue;
}
const newfilteryear=createfilters('year');
const newfilterrating=createfilters('rating');
//console.log(newfilteryear)

export function Filtermenu({activeburger,handleclickfilter}){
    const [genrelist,setGenrelist]=useState(initgenres); //genera lista filtor para menu filter
    const [yearlist,setYearlist]=useState(newfilteryear);
    const [ratinglist,setRatinglist]=useState(newfilterrating);

    return(
        <section className={`filtermenu ${activeburger?"filtermenu--show":""}`}>
            <h2 className="filtermenu__title">Filter Genre</h2>
            {genrelist.map((el,index)=>
                <Checkfilter key={index} content={el} category="genre" handleclickfilter={handleclickfilter}></Checkfilter>
            )}
            <h2 className="filtermenu__title">Filter Year</h2>
            {yearlist.map((el,index)=>
                    <Checkfilter key={index} content={el} category="year" handleclickfilter={handleclickfilter}></Checkfilter>
            )}
            <h2 className="filtermenu__title">Filter Rating</h2>
            {
            ratinglist.map((el,index)=>
                <Checkfilter key={index} content={el} category="rating" handleclickfilter={handleclickfilter}></Checkfilter>
            )}
        </section>
    );
}