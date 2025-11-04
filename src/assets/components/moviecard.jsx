import React from "react";
import { useState } from "react";
import './moviecard.css';


export function Moviecard({movieinfo,mainbase,handleaddfavorites,handleroutes,lightmode}){
    //movieinfo es el id recibido
    const [seetrailer,setSeetrailer]=useState(false);
    if(!movieinfo){
        return;
    }

    const handleseetrailer=()=>{
        setSeetrailer(true)
    }

    const searchmovie=mainbase.find(el=>el.id == movieinfo)

    
    
    if(searchmovie){
        return(
            <>
            <div className="closebtn">
                <button data-path="main" onClick={handleroutes}>X</button>
            </div>
            <section className="moviecard-container">
                <article className="moviecard-container__header">
                <div className="moviecard-container__data">
                    <h2 className={lightmode?"lightletters":""}>{searchmovie.title}</h2>
                    <div className="moviecard-container__rating">
                        <svg className={`moviecard-container__star ${lightmode?"moviecard-container__star--light":""}`} xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="currentcolor">
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
                        <p className={lightmode?"lightb":""} >{searchmovie.rating}</p>
                    </div>
                    {searchmovie.favorite?
                    <svg className="moviecard-container__favorites" data-id={searchmovie.id} onClick={handleaddfavorites} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFF00">
                    <path data-id={searchmovie.id} onClick={handleaddfavorites} d="M480-340q63 0 112-39t63-101h-83q-12 27-37 43.5T480-420q-30 0-55-16.5T388-480h-83q14 62 63 101t112 39ZM370-540q21 0 35.5-14.5T420-590q0-21-14.5-35.5T370-640q-21 0-35.5 14.5T320-590q0 21 14.5 35.5T370-540Zm220 0q21 0 35.5-14.5T640-590q0-21-14.5-35.5T590-640q-21 0-35.5 14.5T540-590q0 21 14.5 35.5T590-540ZM480-120l-58-50q-101-88-167-152T150-437q-39-51-54.5-94T80-620q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 89T810-437q-39 51-105 115T538-170l-58 50Zm0-108q96-83 158-141t98-102.5q36-44.5 50-79t14-69.5q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100q0 35 14 69.5t50 79Q260-427 322-369t158 141Zm0-266Z"/></svg>
                    :<svg className="moviecard-container__favorites" data-id={searchmovie.id} onClick={handleaddfavorites} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor">
                    <path data-id={searchmovie.id} onClick={handleaddfavorites} d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                    }
                    <a href="#movietrailer"><button className="moviecard-container__trailerbtn" onClick={handleseetrailer} >Watch trailer</button></a>
                </div>
                <div className="moviecard-container__heroimage">
                    <img src={searchmovie.image} alt={searchmovie.title} />
                </div>
                </article>
                
                <article className="moviecard-synopsis">
                    <div className="moviecard__trailerdiv">
                        {seetrailer&&<iframe className="moviecard-synopsis__trailer" id="movietrailer" src={searchmovie.framever} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                    </div>
                    <span><b className={lightmode?"lightb":""}>Genre: </b></span>
                    {searchmovie.genre.map((el,index)=>
                        <span key={index} className={lightmode?"lightletters":""} >{el} </span>
                    )}
                    
                    <p className={lightmode?"lightletters":""}><b className={lightmode?"lightb":""}>Country: </b> {searchmovie.country}</p>
                    <p className={lightmode?"lightletters":""} ><b className={lightmode?"lightb":""}>Year: </b>{searchmovie.year}</p>
                    <p className={`moviecard-synopsis__synopsis ${lightmode?"lightletters":""}`}>{searchmovie.synopsis}</p>
                </article>
            </section>
            </>
    );
    }
    
}