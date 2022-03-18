import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import * as actions from './components/actions/getRates'

const App =() =>{

  const data =actions.getCurrent().then((res) =>{
    console.log('res.data.Valute == ', res.data.Valute)
    const dataObject =res.data.Valute
    
  })

  return (
    <div className="App">
      <Header />
      <p>data</p>
    </div>
  );
}

export default App;
