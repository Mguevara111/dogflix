import React from "react";
import { Header } from "./header";
import { Content } from "./content";
import { Filtermenu } from "./filtermenu";
import { useState } from "react";
import { movies } from "../base/movies";

export function Main(){
    const [mainbase,setMainbase]=useState(movies);
    const [activeburger,setActiveburger]=useState(false);
    const [filterbase,setFilterbase]=useState([]);
    const [seefilter,setSeefilter]=useState(false);

    const handleburguerchange=()=>{
        setActiveburger(!activeburger)
    }

    const handleclickfilter=(e)=>{
        //console.log(e.target.value)
        //console.log(e.target.dataset.cat)
        if(e.target.checked){
            setSeefilter(true);
            setFilterbase([...filterbase,e.target.value]);
        }else{
            const seefilter=filterbase.filter(el=>el != e.target.value);
            if(seefilter.length == 0){
                setFilterbase([]);
                setSeefilter(false)
            }else{
                setFilterbase(seefilter)
            }
            
        }
        
    }

    return(
        <>
            <Header></Header>
            <Content activeburger={activeburger} handleburguerchange={handleburguerchange} mainbase={mainbase} filterbase={filterbase} seefilter={seefilter}></Content>
            <Filtermenu activeburger={activeburger} handleclickfilter={handleclickfilter}></Filtermenu>
        </>
        
    );
}