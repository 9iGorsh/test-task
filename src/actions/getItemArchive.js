import axios from "axios";
import moment from "moment";

let prevItemDate =''
let archive10 =[]

export const getItemArchive =async(id) =>{
    
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

    const currentData =await axios.get(`https://www.cbr-xml-daily.ru/${archive}${prevItemDate}/daily_json.js`)

    //set previous date:
    const prevDate = await currentData.data.PreviousDate
    const prevDateMoment = moment(prevDate, "YYYY-MM-DD")
    prevItemDate =prevDateMoment.format('YYYY')+'/'+prevDateMoment.format('MM')+'/'+prevDateMoment.format('DD')

    //set currentCurrency data to array:
    const lastData =currentData.data.Valute[CharCode]
    archive10.push(lastData)
}