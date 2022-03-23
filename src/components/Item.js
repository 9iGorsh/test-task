import React, { Fragment } from "react";
import { getPercentage } from '../actions/getPercentage'
import { Link } from 'react-router-dom';

const Item =({CharCode, dateOfValue:Date, Value, Previous, Name, all}) =>{
    
    const percentage =getPercentage(Value, Previous).toFixed(2)
  console.log('date == ', Date)
    
    return (
       
       <Fragment>  
            {all ? (               
                 <tr data-tip={`${Name}`}>                   
                    <td>
                    <Link to={`/archive/${CharCode}`} >
                        {CharCode}
                    </Link>
                    </td>
                    <td>
                    <Link to={`/archive/${CharCode}`}>
                        {Value.toFixed(2)}
                    </Link>
                    </td>
                    <td>
                    <Link to={`/archive/${CharCode}`}>
                        {Previous.toFixed(2)}
                    </Link>
                    </td>
                    <td>
                    <Link to={`/archive/${CharCode}`}>
                        {percentage}%
                    </Link>
                    </td>                  
                </tr>                
            ) :(
                <tr>                   
                    <td>
                        {Date}
                    </td>
                    <td>
                        {Value.toFixed(2)}
                    </td>
                    <td>
                        {Previous.toFixed(2)}
                    </td>
                    <td>
                        {percentage}%
                    </td>                  
                </tr>     
            ) }          
        </Fragment>
    )
}

export default Item