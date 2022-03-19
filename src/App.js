import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
// import * as actions from './components/actions/getRates'
import LoadingPage from './components/Loader';
import Items from './components/Items';

const App =() =>{

  const[isLoaded, setIsLoaded] =useState(false)

  useEffect(() =>{
    
    setIsLoaded(true)
  },[])

  if(!isLoaded) return <LoadingPage />
  
    return (
      <div className="App">
        <Header />
        <Items />
      </div>
    )  
}

export default App;
