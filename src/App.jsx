import { useState,useEffect } from 'react'
import './App.css'
import { movies } from "./assets/base/movies";
import { Main } from './assets/components/main';
import { Header } from './assets/components/header';

function App() {
  const [mainbase,setMainbase]=useState(movies);
  const [router,setRouter]=useState('main');
  const [seecard,setSeecard]=useState('');     //muestra la card individual y toma valor del id
  const [searchinput,setSearchinput]=useState('');
  const [lightmode,setLightmode]=useState(false); //modo claro

  useEffect(()=>{
    if(document.body.classList.contains('body--lightmode')){
      document.body.classList.remove('body--lightmode')
    }else{
      document.body.classList.add('body--lightmode')
    }
    
  },[lightmode])

 const handleaddfavorites=(e)=>{
              //console.log(e.target.dataset.id)
              setMainbase(mainbase.map(el=>{
                  if(el.id == e.target.dataset.id){
                      return {...el,favorite:!el.favorite}
                  }else{
                      return el
                  }
              }))
}

const handleroutes=(e)=>{
  //console.log(e.target)
  //console.log(e.target.dataset.path)
  if(e.target.dataset.path){
    setRouter(e.target.dataset.path)
  }
  
  if(e.target.parentNode.dataset.id){
    //console.log(e.target.parentNode.dataset.id) 
    setSeecard(e.target.parentNode.dataset.id)  
  }
  setSearchinput('');
  
}

const handlesearch=(e)=>{
  setSearchinput(e.target.value)
  const searchmovie=mainbase.find(el=>el.title == e.target.value)
  if(searchmovie){
    //console.log('si hay peli')
    setRouter('card')
    setSeecard(searchmovie.id)
  }
}

const handlelightmode=()=>{
  console.log('light mode')
  setLightmode(!lightmode);
}
 /*falta responsive movie card***************************************************/

  return (
    <>
      <Header handleroutes={handleroutes} 
        mainbase={mainbase} 
        handlesearch={handlesearch} 
        searchinput={searchinput} 
        handlelightmode={handlelightmode}
        lightmode={lightmode}>
      </Header>
      <Main router={router} 
        mainbase={mainbase} 
        handleroutes={handleroutes} 
        seecard={seecard} 
        handleaddfavorites={handleaddfavorites}
        lightmode={lightmode}>
      </Main>
    </>
  )
}

export default App
