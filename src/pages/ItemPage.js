import React from "react";
import Items from "../components/Items";
import { useParams } from "react-router-dom";

const ItemPage =(props) =>{
    let params = useParams();
console.log("id = ", params.id) ///-----------------
    return(
        <div>
            <Items all={false} CharCode={params.id} />
        </div>   
    )
}

export default ItemPage