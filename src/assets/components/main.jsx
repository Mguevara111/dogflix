import React from "react";
import { Content } from "./content";
import { Filtermenu } from "./filtermenu";
import { useState } from "react";
import { Moviecard } from "./moviecard";
import { Favoritescontent } from "./favoritescontent";

export function Main({handleroutes,router,mainbase,handleaddfavorites,seecard,lightmode}){
    const [activeburger,setActiveburger]=useState(false);
    const [filterbase,setFilterbase]=useState([]);  //array con valores de filtrado
    

    const handleburguerchange=()=>{
        setActiveburger(!activeburger)
    }

    const handleclickfilter=(e)=>{
        if(e.target.checked){
            setFilterbase([...filterbase,e.target.value]);
        }else{
            const seefilter=filterbase.filter(el=>el != e.target.value);
            if(seefilter.length == 0){
                setFilterbase([]);
                
            }else{
                setFilterbase(seefilter)
            }   
        }        
    }




    if(router == 'card'){
        return(
            <Moviecard movieinfo={seecard} 
                mainbase={mainbase}  
                handleaddfavorites={handleaddfavorites} 
                handleroutes={handleroutes}
                lightmode={lightmode}>  
            </Moviecard>
        );
    }

    if(router == 'main'){
        return(
            <>
            <Filtermenu activeburger={activeburger} handleclickfilter={handleclickfilter}  ></Filtermenu>
            <Content activeburger={activeburger} 
                handleburguerchange={handleburguerchange} 
                mainbase={mainbase} 
                filterbase={filterbase} 
                handleroutes={handleroutes}
                lightmode={lightmode}>
            </Content>
            
            </>
        );
    }

    if(router == 'favorites'){
       return(
        <Favoritescontent mainbase={mainbase} handleroutes={handleroutes} ></Favoritescontent>
       ); 
    }


}