import React from "react";
import { Link, useLocation } from "react-router-dom";
// import './App.css';

const Header =() =>{
const location =useLocation()
let style ='button'
if(location.pathname==='/'){style='button__none'}

return(
    <header className="header header__content">
        
        <button className={`${style}`}>
            <Link to={'/'}>Главная</Link>
        </button>
        <h1 className="header__title"> Курсы валют</h1>
    </header>
)
}
export default Header