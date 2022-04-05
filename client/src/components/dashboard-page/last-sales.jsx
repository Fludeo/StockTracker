import { useEffect, useState } from "react";

import {ARSConverter, sortByDate } from "../../customhooks/helperFunctions";
import { Icon } from "../common/Icon";

const listIcon = { type: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", color: '#A3E635' }

 export  const LastSales = (props)=>{

   
    const [ventas,setVentas] = useState(null)
    
    useEffect(()=>{

        const sortedData = sortByDate(props.data)

        setVentas(sortedData.filter((a=>sortedData.indexOf(a)<11)))
       
        
    },[props.data])

    
    
    return(
        <div className={props.className} >
    
        <table className=" w-full divide-y divide-gray-200   table-auto ">
            <thead className="bg-gray-700 text-left text-xs font-bold text-yellow-500 ">
            <tr>
            
                <th className="px-6 py-1 ">Id</th>
                <th className="px-6 py-1 ">Últimas ventas</th>
                <th className="px-6 py-1 ">Ganancia</th>
                <th className="px-6 py-1 ">Lista</th>
            </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 text-gray-500 text-xs font-bold'>
            {ventas!=null&&ventas.map(venta=> 
            <tr className={ventas.indexOf(venta)%2===0?' bg-gray-100':'bg-gray-50'} key={venta.id}>
                
                <td className="px-6 py-2 " >{venta.id }</td>
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
        </table>
  
        </div>
      
        
    
    );

}