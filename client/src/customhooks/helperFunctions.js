export  function ARSConverter(amount){
    const result = Intl.NumberFormat('es-AR', {
        currencyDisplay: 'symbol',
        style: 'currency',
        currency: 'ARS'
      }).format(amount)
return result;
}

export function sortByDate (arr){
 const result = arr.sort((previousSale,nextSale)=>{
    const sortedData = new Date(nextSale.createdAt) - new Date(previousSale.createdAt)
    return sortedData
  })
  return result
}


export const prepareGraphData = (data)=>{
   
  const seriesData = []
  const date = new Date()
  const today = date.getDay()
  
  for(let i = 9;i<23;i++){
    let entry ={
      name:i,
      data:[]
    }
      let filteredByHour = data.filter(sale=>new Date(sale.createdAt).getHours()===i)
   for(let j=0;j<7;j++){
    let filteredByDay = filteredByHour.filter(sale=> 
      new Date(sale.createdAt).getDay() === j+1&& j+1 <=today)
      
    let l = filteredByDay.length
    
    let dayName = dayNameFromNumber(j+1)

    entry.data.push({x:dayName,y:l})
  }
  seriesData.push(entry)
  }
  seriesData.sort((a,b)=>(b.name-a.name))
  
  seriesData.forEach((entry => entry.name=entry.name+":00 hs"))
  
  return seriesData
}

const dayNameFromNumber=(int)=>{
  switch (int) {
    case 1:
      return "Lunes"
     
      case 2:
        return "Martes"
       
        case 3:
          return "Miércoles"
         
          case 4:
            return "Jueves"
          
            case 5:
              return "Viernes"
              
              case 6:
                return "Sábado"
                case 7:
      return "Domingo"  
    default:
      return"default"
     
  }
}


export const getNumberOfDaysBetween = (date1,date2)=>{

  

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;

}