import React from "react";
import { getPercentage } from '../actions/getPercentage'
// import { History } from "history";
import { Link } from 'react-router-dom';

const Item =({CharCode, Value, Previous, ID}) =>{
    // const{CharCode, Value, Previous}=item
    const percentage =getPercentage(Value, Previous).toFixed(2)
  
    return (
        <div>
            <Link to={`/archive/${CharCode}`}>
            <p>
                {CharCode} | {Value} | {Previous}|{percentage}%
            </p>
            </Link>
        </div>
    )
}

export default Item