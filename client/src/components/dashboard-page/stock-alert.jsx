import { useEffect, useState } from "react";
import fetchData from "../../customhooks/fetchData";

import ARSConverter from "../../customhooks/helperFunctions";
import { Icon } from "../common/Icon";



 export  const StockAlert = (props)=>{
    const textColorClass ="px-6 py-2 text-xs font-semibold"
   
    const [stockAlertItems,setStockAlertItems] = useState(props.data)
    
    


    useEffect(()=>{
        
        setStockAlertItems(props.data.filter((product=>product.stock<20)))
    },[props.data])
    return(
        <div className={props.className} >
        
        <table className=" w-full divide-y divide-gray-200   table-auto ">
            <thead className="bg-gray-100">
            <tr>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">Producto</th>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">Alerta Stock</th>
            </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 text-gray-600  font-medium'>
            {stockAlertItems.map(item=> 
            <tr key={item.id}>
                <td className="px-6 py-2 text-xs" >{item.id }</td>
                <td className="px-6 py-2 text-xs">{item.descripcion}</td>
                <td className={item.stock <5 ? "px-6 py-2 text-xs font-semibold text-red-500" :item.stock<10? textColorClass+" text-orange-500":item.stock<15?textColorClass+" text-yellow-500":item.stock<20? textColorClass+" text-gray-500":textColorClass+"text-green-500"}>{item.stock}</td>
          
              
            </tr>)}
            </tbody>
        </table>
  
        </div>
      
        
    
    );

}