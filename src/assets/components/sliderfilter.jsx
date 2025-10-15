import React from "react";



export function Sliderfilter(){
    // no estoy usandolo**************************
    return(
        <>
        <label htmlFor="range">
            <input  id="range" type="range" min="0" max="10" step="5" list="rangeopt"/>
            {/* verificar los min y max de los sliders */}
        </label>
       
        </>
    );
}