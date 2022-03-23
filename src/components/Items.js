import React, {useEffect, useState} from "react";
import {getRates} from '../actions/getRates'
import { getItemArchive } from "../actions/getItemArchive";
import LoadingPage from "./Loader";
import Item from "./Item";
// import { Link } from "react-router-dom";

const Items =(props)=>{
console.log('props ==', props) //----------------
    const[data, setData] =useState(null)
    useEffect(() =>{
        if(props.all){
            getRates().then((res) =>{
            // console.log('res ==== ', res) //--------------
            const resArray =Object.values(res)
            console.log('resArray ==== ', resArray)  //-----------
            setData(resArray)
            })
        }else{
            const{CharCode} =props
            getItemArchive(CharCode).then((res) =>{
                // console.log('res ==== ', res) //--------------
                const resArray =Object.values(res)
                console.log('resArray ==== ', resArray)  //-----------
                setData(resArray)
            }) 
        }
        
    },[])

    let key =0

    if(!data){
        return <LoadingPage />
    }
    
   return (
       <div>
           <ul>
               {
                  props.all ? (
                      data.map((item) =>(
                       <li key={item.CharCode}>                         
                            <Item {...item}  />                                                   
                        </li>
                   ))
                  ):(
                    data.map((item) =>{
                        return(
                            <li key={key++}>                         
                                <Item {...item}  />                                                   
                            </li>
                        )
                    }
                    ))             
               }
                
           </ul>      
       </div>     
   )
}

export default Items