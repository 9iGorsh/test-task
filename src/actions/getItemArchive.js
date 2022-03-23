import axios from "axios";
import moment from "moment";

let prevItemDate =''
let archive10 =[]
let dateOfValue =''
let currentItemDate =''

export const getItemArchive =async(id) =>{
    prevItemDate =''
    currentItemDate =''
    archive10 =[]
    dateOfValue =''

    await getLastCurrencyData(id, false)
    await getLastCurrencyData(id, true)
    await getLastCurrencyData(id, true)
    await getLastCurrencyData(id, true)
    await getLastCurrencyData(id, true) 
    await getLastCurrencyData(id, true)
    await getLastCurrencyData(id, true)
    await getLastCurrencyData(id, true)
    await getLastCurrencyData(id, true)
    await getLastCurrencyData(id, true)

        return archive10
}

const getLastCurrencyData =async(CharCode, isArchive) =>{

    let archive ='archive/'
    if(!isArchive){archive=''}

    const current_Data =await axios.get(`https://www.cbr-xml-daily.ru/${archive}${prevItemDate}/daily_json.js`)

    const currentDate =await current_Data.data.Timestamp

    //set previous date:
    const prevDate = await current_Data.data.PreviousDate
    const prevDateMoment = moment(prevDate, "YYYY-MM-DD")
    prevItemDate =prevDateMoment.format('YYYY')+'/'+prevDateMoment.format('MM')+'/'+prevDateMoment.format('DD')

    //set currentCurrency data and date to array:
    const lastData =await current_Data.data.Valute[CharCode]

    if(!isArchive){
        const currentDateMoment = moment(currentDate, "YYYY-MM-DD")
        currentItemDate =currentDateMoment.format('YYYY')+'/'+currentDateMoment.format('MM')+'/'+currentDateMoment.format('DD')
        dateOfValue =currentItemDate
    }else{
        dateOfValue =prevItemDate
    }
    archive10.push({...lastData, dateOfValue})
}