import React from "react";
import './search.css';

export function Search({handleroutes,mainbase,handlesearch,searchinput,handlelightmode,lightmode}){

    //const createdatalist=mainbase.map(el=>el.title);
    //console.log(createdatalist)

    return(
        <section className="search">
            <input className={`search__input ${lightmode?"search__input--light":""}`} onChange={handlesearch} type="text" list="options" placeholder="title" value={searchinput}/>
                <datalist id="options">
                    {mainbase.map(el=><option key={el.id} data-search={el.id} data-path="card">{el.title}</option>)}
                </datalist>
            <div className="search__logos">
            <svg  className="search__lightlogo"  onClick={handlelightmode} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor">
            <path  onClick={handlelightmode} d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
            <svg className="search__favoritelogo" data-path="favorites" onClick={handleroutes} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor">
            <path data-path="favorites" onClick={handleroutes} d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            </div>
        </section>
        
    );
}