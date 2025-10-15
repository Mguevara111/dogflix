import React from "react";
import logowhite from '../images/Dogflixlogo.png';
import { Search } from "./search";
import './header.css';

export function Header(){
    return(
        <section className="header">
            <img className="header__logowhite" src={logowhite} alt="logo" />
            <Search></Search>
        </section>
    );
}