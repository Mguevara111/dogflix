import React from "react";
import './checkfilter.css';

export function Checkfilter({content,handleclickfilter,category}){
    // content es el elemento array filtrado, no todo el elemento de la base
    return(
        <label className="check" htmlFor={content}>
            <input id={content} type="checkbox" value={content} data-cat={category} onChange={handleclickfilter}/>
            {content}
        </label>
        
    );
}