import React from "react";
import { useState } from "react";
import { Generalcontent } from "./generalcontent";
import './content.css';
import { Filtercontent } from "./filtercontent";


export function Content({activeburger,handleburguerchange,mainbase,filterbase,seefilter}){


    return(
        <>
        {seefilter?<Filtercontent filterbase={filterbase}></Filtercontent>:<Generalcontent mainbase={mainbase}></Generalcontent>}
        
        {/************ burguer button *****************/}
        <button className={`hamburger hamburger--emphatic ${activeburger?'is-active':''}`} type="button" onClick={handleburguerchange}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
        </button>
        </>
    );
}