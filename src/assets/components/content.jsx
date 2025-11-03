import React from "react";
import './content.css';
import { Filtercontent } from "./filtercontent";


export function Content({activeburger,handleburguerchange,mainbase,filterbase,seefavorites,handleseecard,handleroutes,lightmode}){


    return(
        <>
        <Filtercontent filterbase={filterbase} 
            seefavorites={seefavorites} 
            mainbase={mainbase} 
            handleseecard={handleseecard} 
            handleroutes={handleroutes}
            lightmode={lightmode}>
        </Filtercontent>

        {/************ burguer button *****************/}
        <button className={`hamburger hamburger--emphatic ${activeburger?'is-active':''}`} type="button" onClick={handleburguerchange}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
        </button>
        </>
    );
}