import React from "react";
import logodark from '../images/Dogflixlogo.png';
import logowhite from '../images/DoGFlixwhite.png';
import { Search } from "./search";
import './header.css';

export function Header({handleroutes,mainbase,handlesearch,searchinput,handlelightmode,lightmode,scroll}){
    return(
        <section className={`header ${lightmode?"header--lightmode":""} ${scroll?"header--hidden":""}`}>
            {lightmode?
            <a href="#"><img className="header__logowhite" data-path="main" onClick={handleroutes} src={logowhite} alt="logo" /></a>
            :
            <a href="#"><img className="header__logowhite" data-path="main" onClick={handleroutes} src={logodark} alt="logo" /></a>
            }
            
            <Search handleroutes={handleroutes} 
            mainbase={mainbase} 
            handlesearch={handlesearch} 
            searchinput={searchinput} 
            handlelightmode={handlelightmode}
            lightmode={lightmode}>   
            </Search>
        </section>
    );
}