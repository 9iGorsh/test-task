import React, {Fragment, useEffect, useState} from "react";
import {getRates} from '../actions/getRates'
import { getItemArchive } from "../actions/getItemArchive";
import LoadingPage from "./Loader";
import Item from "./Item";

const Items =(props)=>{
    const[data, setData] =useState(null)
    useEffect(() =>{
        if(props.all){
            getRates().then((res) =>{
            const resArray =Object.values(res)
            setData(resArray)
            })
        }else{
            const{CharCode} =props
            getItemArchive(CharCode).then((res) =>{
                const resArray =Object.values(res)
                setData(resArray)
            }) 
        }  
        // eslint-disable-next-line react-hooks/exhaustive-deps     
    },[])
   
    let key =0

    if(!data){
        return <LoadingPage />
    }
    
   return (
       <div className="content-container">         
            {
            props.all ? (
                <table>
                <thead>
                    <tr>
                        <th>
                            Валюта
                        </th>
                        <th>
                            Сейчас
                        </th>
                        <th>
                            Пред
                        </th>
                        <th>
                            Разница
                        </th>
                    </tr>
                    {data.map((item) =>(
                        <Item {...item} key={item.CharCode} all={props.all}/>                                                   
                    ))}
                 </thead>
                 </table> 
                ):(
                    <Fragment>
                    <h1>{data[0].Name}</h1>
                    <table>
                    <thead>
                        <tr>
                            <th>
                                Сейчас
                            </th>
                            <th>
                                Пред
                            </th>
                            <th>
                                Разница
                            </th>
                        </tr>
                    {data.map((item) =>(                       
                        <Item key={key++} {...item} all={props.all} />                                                   
                    ))}
                </thead>
                 </table> 
                 </Fragment>
                )           
            }           
       </div>     
   )
}

export default Items