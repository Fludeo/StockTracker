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
            <thead className="bg-gray-700 divide-y divide-gray-200 text-left text-xs font-bold text-yellow-500">
                <tr>
                <th className="px-6 py-1 ">Id</th>
                <th className="px-6 py-1 ">Descripcion</th>
                <th className="px-6 py-1 ">Cantidad</th>
                <th className="px-6 py-1 ">Descuento %</th>
                <th className="px-6 py-1 ">SubTotal</th>
                </tr>
                
            </thead>
            <tbody className='divide-y divide-gray-200 text-gray-500 text-xs font-bold'>
                {list.map((product)=> 
                <tr className={list.indexOf(product)%2===0?' bg-gray-100':'bg-gray-50'} key={product.descripcion}>
                    <td className="px-6 py-2 ">{product.id}</td>
                    <td className="px-6 py-2 ">{product.descripcion}</td>
                    <td className="px-6 py-2 ">{product.ProductList.quantity}</td>
                    <td className="px-6 py-2 ">{product.ProductList.discount}</td>
                    <td className="px-6 py-2 ">{ARSConverter(product.ProductList.subTotal)}</td>
                </tr>)}
            </tbody>
                </table></div> ):''}
        
                </>
    );

}