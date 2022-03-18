import axios from "axios";

// https://www.cbr-xml-daily.ru/
// https://www.cbr-xml-daily.ru/daily_json.js
// https://www.cbr-xml-daily.ru/archive/2022/02/11/daily_json.js

export const getCurrent =async() =>{
    const result =await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    return result
}

// export const getPrev =async() =>{
//     const result =await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
//     return result
// }