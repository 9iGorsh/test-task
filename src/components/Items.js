import React, {useEffect, useState} from "react";
import {getCurrent} from '../components/actions/getRates'
import LoadingPage from "./Loader";
import Item from "./Item";

const Items =()=>{

    const[data, setData] =useState(null)
    useEffect(() =>{
        getCurrent().then((res) =>{
            console.log('res ==== ', res)
            const resArray =Object.values(res)
            console.log('resArray ==== ', resArray)
            setData(resArray)
        })
    },[])

    if(!data){
        return <LoadingPage />
    }
    
   return (
       <div>
           <ul>
               {
                   data.map((curr) =>(
                       <li key={curr.ID}><Item curr={curr}  /></li>
                   ))
               }
                
                
           </ul>
           
           
       </div>
       
   )
}

export default Items