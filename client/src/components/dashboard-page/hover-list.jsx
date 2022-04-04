import { useEffect, useState } from "react";

import {ARSConverter} from "../../customhooks/helperFunctions";




 export  const HoverList = (props)=>{

    const [list,setList] = useState(false)
    
   

    useEffect(()=>{

        setList(props.hoverList)
    },[props.hoverList])
    return(
        
        <>
        {(list!==false)?(<div className={props.className}> <table className=" w-full divide-y divide-gray-200 table-auto" >
            <thead className="bg-gray-100 divide-y divide-gray-200 text-gray-600">
                <tr>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">Id</th>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">Descripcion</th>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">Cantidad</th>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">Descuento %</th>
                <th className="px-6 py-1 text-left  text-xs font-medium text-gray-500 uppercase">SubTotal</th>
                </tr>
                
            </thead>
            <tbody className='divide-y divide-gray-200 text-gray-600  font-medium'>
                {list.map((product)=> 
                <tr key={product.descripcion}>
                    <td className="px-6 py-2 text-xs">{product.id}</td>
                    <td className="px-6 py-2 text-xs">{product.descripcion}</td>
                    <td className="px-6 py-2 text-xs">{product.ProductList.quantity}</td>
                    <td className="px-6 py-2 text-xs">{product.ProductList.discount}</td>
                    <td className="px-6 py-2 text-xs">{ARSConverter(product.ProductList.subTotal)}</td>
                </tr>)}
            </tbody>
                </table></div> ):''}
        
                </>
    );

}