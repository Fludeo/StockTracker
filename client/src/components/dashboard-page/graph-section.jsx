import { useEffect, useState } from "react";
import React from "react";

import ReactApexChart from "react-apexcharts";
import { prepareWeekData } from "../../customhooks/helperFunctions";


export const HeatMap =(props) =>{
  


 
  const [series,setSeries] = useState()
  const [numWeeks,setNumWeeks] = useState(0)

 const [options,setOptions] = useState({
  chart: {
    reDrawOnParentResize: true,
    height: 350,
    type: 'heatmap',
    zoom:{enabled:false},
    toolbar:{show:false},
  },
  dataLabels: {
    enabled: false
  },
  
 
  colors: ["#6d28d9"],
 
},)




  
  
 

useEffect(()=>{


  const from = new Date();
  const to = new Date();
  from.setDate(from.getDate() -numWeeks*7)
  to.setDate(from.getDate()-7)
 
  let dataFilteredByDate = props.data.filter((sale) => (new Date(sale.createdAt)>to)&&(new Date(sale.createdAt)<from))
  
  

   let graphData = prepareWeekData(from,to,dataFilteredByDate)
   

 setSeries(graphData)

},[numWeeks,props.data])

 
    return (
      

<div className={props.className} id="chart">

{series!=null&&<ReactApexChart options={options} series={series} type="heatmap" height={350} />}
<div className="flex flex-row">
  <button onClick={()=>setNumWeeks(numWeeks+1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold  py-2 px-4 rounded-l">
    Ant
  </button>
  <button onClick={()=>setNumWeeks(numWeeks-1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    Sig
  </button>
</div>
</div>)
}
