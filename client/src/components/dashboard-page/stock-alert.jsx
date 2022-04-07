import { useEffect, useState } from "react";


 export  const StockAlert = (props)=>{
    const textColorClass ="px-6 py-2 text-xs font-semibold"
   
    const [stockAlertItems,setStockAlertItems] = useState(props.data)
    
    


    useEffect(()=>{
        
        setStockAlertItems(props.data.filter((product=>product.stock<20)))
    },[props.data])
    return(
        <div className={props.className} >
        <div className="flex flex-row gap-4 w-full h-full ">
            <div className="rounded-md shadow-lg bg-gray-50 w-1/3 h-full">

            </div>
            <div className="rounded-md shadow-lg bg-gray-50 w-1/3 h-full">

            </div>
            <div className="rounded-md shadow-lg bg-gray-50 w-1/3 h-full">

            </div>
       
        </div>
        </div>
      
        
    
    );

}

/* <table className=" w-full divide-y divide-gray-200   table-auto ">
            <thead className="bg-gray-700 font-bold text-xs text-left text-yellow-500">
            <tr>
                <th className="px-6 py-1 ">Id</th>
                <th className="px-6 py-1 ">Producto</th>
                <th className="px-6 py-1 ">Alerta Stock</th>
            </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 text-gray-500 text-xs  font-bold'>
            {stockAlertItems.map(item=> 
            <tr className={stockAlertItems.indexOf(item)%2===0?' bg-gray-100':'bg-gray-50'} key={item.id}>
                <td className="px-6 py-2  " >{item.id }</td>
                <td className="px-6 py-2  ">{item.descripcion}</td>
                <td className={item.stock <5 ? "px-6 py-2   text-red-500" :item.stock<10? textColorClass+" text-orange-500":item.stock<15?textColorClass+" text-yellow-500":item.stock<20? textColorClass+" text-gray-500":textColorClass+"text-green-500"}>{item.stock}</td>
          
              
            </tr>)}
            </tbody>
        </table>*/