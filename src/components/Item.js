import React from "react";
import { getPercentage } from "./actions/getPercentage";

const Item =({curr}) =>{
    const{CharCode, Value, Previous}=curr
    const percentage =getPercentage(Value, Previous).toFixed(2)
    return (
        <div>
            <p>
                {CharCode} | {Value} | {Previous}|{percentage}%
            </p>
        </div>
    )
}

export default Item