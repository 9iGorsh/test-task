export const getPercentage =(current, previous) =>{
        return (((current - previous) / previous) * 100)
}