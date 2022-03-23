import axios from "axios";
// import moment from "moment";

// https://www.cbr-xml-daily.ru/
// https://www.cbr-xml-daily.ru/daily_json.js
// https://www.cbr-xml-daily.ru/archive/2022/02/11/daily_json.js

export const getRates =async() =>{
    const result =await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    const dataObject = await result.data.Valute

    // const prevDate = await result.data.PreviousDate
    // const prevDateMoment = moment(prevDate, "YYYY-MM-DD")
    // const prevItemDate =prevDateMoment.format('YYYY')+'/'+prevDateMoment.format('MM')+'/'+prevDateMoment.format('DD')

    // console.log("prevItemDate ==  ", prevItemDate)
        return dataObject
}
