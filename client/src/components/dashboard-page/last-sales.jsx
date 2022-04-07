import { useEffect, useState } from "react";

import {ARSConverter, getNumberOfDaysBetween, sortByDate } from "../../customhooks/helperFunctions";
import { Icon } from "../common/Icon";

const listIcon = { type: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", color: '#A3E635' }


const dateText = (days)=>{
    let result;
    switch(days){
        case 0:
            result ='Hoy'
            return result
         case 1:
            result ='Ayer'
            return result

        default:
            result = `Hace ${days} días`
            return result
                

    }

}

const topSeller = (sales)=>{
   
    let products = sales.map((item)=>(item.listaProductos))
   const finalList = products.flat()
    const top = finalList.map(item => finalList.filter((it)=>(item.id===it.id)).length)
    const result = finalList[top.indexOf(Math.max.apply([], top))].descripcion
    console.log(finalList)
    return result
}
 export  const LastSales = (props)=>{

   
    const [ventas,setVentas] = useState(null)
    const [todaySales,setTodaySales] = useState(null)
    const[gananciasHoy,setGananciasHoy] =useState(null)
    
    useEffect(()=>{

        const today = new Date()
        const sortedData = sortByDate(props.data)
        const todayFilteredSales = props.data.filter((sale)=>(new Date(sale.createdAt).getFullYear()===today.getFullYear()
                                                    &&new Date(sale.createdAt).getMonth()===today.getMonth()
                                                    &&new Date(sale.createdAt).getDate()===today.getDate()))
        setTodaySales(todayFilteredSales)

        setVentas(sortedData.filter((sale=>sortedData.indexOf(sale)<11)))

        const total =  {  ganancias:todayFilteredSales.reduce((prevSale,currentSale)=>{
  
                                                 let result = {ganancia: prevSale.ganancia + currentSale.ganancia}
  
                                                return result;
                                                },{ganancia:0}).ganancia,
                            ventas: todayFilteredSales.length
                         }
       setGananciasHoy(total)
        
    },[props.data])

   
    
    return(
        <div className={props.className} >
        <div className="flex flex-row  gap-4 h-full w-full ">
            <div className=" overflow-auto rounded-md justify-between flex flex-col bg-gray-50 w-1/2 shadow-lg p-4">
                <p className="font-bold md:text-sm text-xs text-gray-500">Ventas hoy</p>
                <p className="font-bold text-right md:text-xl text-xl text-gray-500">{gananciasHoy!=null&&gananciasHoy.ventas}</p>
                <p className="font-bold md:text-sm text-xs text-gray-500">Ganancia de hoy</p>
                <p className="font-bold text-right text-3xl text-yellow-500">{gananciasHoy!=null&&ARSConverter(gananciasHoy.ganancias)}</p>
                <p className="font-bold md:text-sm text-xs text-gray-500">Mas vendido hoy</p>
                <p className="font-bold text-right  md:text-xl text-sm text-gray-500">{todaySales!=null&&topSeller(todaySales)}</p> 
            </div>
            <div className=" h-full rounded-md   w-1/2 flex flex-row flex-shrink-0 gap-4 overflow-auto  ">
            {ventas!=null&&ventas.map((venta =>
            <div key={venta.id} className="md:p-4 p-2  rounded-md bg-gray-50 shadow-lg flex flex-col flex-shrink-0 overflow-auto  md:gap-0 gap-2 h-5/6   w-1/2 ">
                <div className="flex flex-row md:gap-2 justify-between">
                        <p className="font-bold  md:text-sm text-sm text-gray-500" >Items</p>
                        <p className="font-bold text-right md:relative md:bottom-1  md:text-lg text-sm text-gray-500">{venta.listaProductos.length}</p>
                    </div>

                    <div className="flex  flex-row md:gap-3 gap-0">
                         <Icon onMouseLeave={()=>props.setHoverList(false)} 
                                 onMouseEnter={()=>props.setHoverList(venta.listaProductos)} 
                                  type={listIcon.type} color={listIcon.color} 
                                 className="  relative bottom-1 md:right-3 right-1 flex-shrink-0 md:w-16 md:h-16 w-10 h-10 hover:bg-blue-400 rounded-md cursor-pointer" ></Icon>
                      <p className="font-bold relative top-2  text-right md:text-sm text-xs text-gray-500">{dateText(getNumberOfDaysBetween(new Date(venta.createdAt),new Date()))}</p>
                    </div>
                      <p className="font-bold  md:text-sm text-sm text-gray-500" >Total</p>
                      <p className="font-bold text-right  md:text-sm text-sm  text-yellow-500" >{ARSConverter(venta.totalVenta)}</p>
                
            </div>))}
      
        </div>
        </div>
        </div>
      
        
    
    );

}

/*<table className=" w-full h-full divide-y divide-gray-200  table-auto ">
<thead className="bg-gray-700 text-left text-xs font-bold text-yellow-500 ">
<tr>
    <th className="px-6 py-1 ">Últ. ventas</th>
    <th className="px-6 py-1 ">Ganancia</th>
    <th className="px-6 py-1 ">Lista</th>
</tr>
</thead>
<tbody className='divide-y divide-gray-200 text-gray-500 text-xs font-bold'>
{ventas!=null&&ventas.map(venta=> 
<tr className={ventas.indexOf(venta)%2===0?' bg-gray-100':'bg-gray-50'} key={venta.id}>
    
    <td className="px-6 py-2 ">{ARSConverter(venta.totalVenta)}</td>
    <td className="px-6 py-2 ">{ARSConverter(venta.ganancia)}</td>
    <td className="px-6 py-2 flex flex-row " >{venta.listaProductos.length}
    <Icon onMouseLeave={()=>props.setHoverList(false)} 
    onMouseEnter={()=>props.setHoverList(venta.listaProductos)} 
    type={listIcon.type} color={listIcon.color} 
    className="ml-2 w-4 h-4  cursor-pointer" ></Icon>
    </td>
</tr>)}
</tbody>
</table>*/