import { useEffect, useState } from "react";
import React from "react";

import ReactApexChart from "react-apexcharts";
import { prepareGraphData } from "../../customhooks/helperFunctions";


export const HeatMap =(props) =>{
  


 
  const [series,setSeries] = useState()
  const [numMultiplier,setNumMultiplier] = useState(0)
  const [graphRange, setGraphRange] = useState('WEEK')

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
  from.setDate(from.getDate() -numMultiplier*7)
  to.setDate(from.getDate()-7)
 
  let dataFilteredByDate = props.data.filter((sale) => (new Date(sale.createdAt)>to)&&(new Date(sale.createdAt)<from))
  
  

  let graphData = prepareGraphData(dataFilteredByDate)
   

 setSeries(graphData)

},[numMultiplier,props.data])

 
    return (
      

<div className={props.className} id="chart">
 
{series!=null&&<ReactApexChart options={options} series={series} type="heatmap" height={350} />}
<div className="flex flex-row">
  <button onClick={()=>setNumMultiplier(numMultiplier+1)} className="bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold  py-1 px-4 rounded-l">
    Ant
  </button>
  {numMultiplier!==0&&<button onClick={()=>setNumMultiplier(numMultiplier-1)} className="bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold py-1 px-4 rounded-r">
    Sig
  </button>}
  <div className="flex flex-row justify-around text-gray-800">
      <button className="w-20 py-1  font-bold rounded-md bg-gray-300 hover:bg-blue-400">Semana</button>
      <button className="w-20 py-1  font-bold rounded-md bg-gray-300 hover:bg-blue-400">Mes</button>
      <button className="w-20 py-1  font-bold rounded-md bg-gray-300 hover:bg-blue-400">Año</button>
    </div>
</div>
     
</div>)
}
