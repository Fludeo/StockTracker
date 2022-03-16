import { useEffect, useState } from "react";

import {ARSConverter, sortByDate } from "../../customhooks/helperFunctions";
import { Icon } from "../common/Icon";



 export  const LastSales = (props)=>{

    const listIcon = { type: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", color: '#A3E635' }

    const [ventas,setVentas] = useState(null)
    
    useEffect(()=>{

        const sortedData = sortByDate(props.data)

        setVentas(sortedData.filter((a=>sortedData.indexOf(a)<11)))
       
        
    },[props.data])

    
    
    return(
        <div className={props.className} >
    
        <table className=" w-full divide-y divide-gray-200   table-auto ">
            <thead className="bg-gray-100  ">
            <tr>
            
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">id</th>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">últimas ventas</th>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">Ganancia</th>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">Lista</th>
            </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 text-gray-600  font-medium'>
            {ventas!=null&&ventas.map(venta=> 
            <tr key={venta.id}>
                
                <td className="px-6 py-2 text-xs" >{venta.id }</td>
                <td className="px-6 py-2 text-xs">{ARSConverter(venta.totalVenta)}</td>
                <td className="px-6 py-2 text-xs">{ARSConverter(venta.ganancia)}</td>
                <td className="px-6 py-2 text-xs flex flex-row " >{venta.listaProductos.length}
                <Icon onMouseLeave={()=>props.setHoverList(false)} onMouseEnter={()=>props.setHoverList(venta.listaProductos)} type={listIcon.type} color={listIcon.color} className="ml-2 w-4 h-4  cursor-pointer" ></Icon>
                </td>
            </tr>)}
            </tbody>
        </table>
  
        </div>
      
        
    
    );

}