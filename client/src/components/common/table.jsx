import { useState } from "react"

import { Icon } from "./Icon";

import {ARSConverter} from "../../customhooks/helperFunctions"




const plusIcon = { type: "M12 6v6m0 0v6m0-6h6m-6 0H6", color: '#A3E635' }
const adjustIcon = { type: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", color: '#F472B6' }
const searchIcon = { type: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", color: "#D1D5DB" }



export const Table = (props) => {


  const [tableContent, setTableContent] = useState(props.tableContent)




  function filterContent(value) {


    setTableContent(props.tableContent.filter((content) => {

      if (content.descripcion.toLocaleLowerCase().includes(value)) {

        return content;

      }
      else if (value === '') {

        return content;
      }


      return null
    }))


  }



  return (
    <div className=' w-full flex flex-col gap-2 '>

      <div className="  md:mr-12 justify-between flex flex-row sticky top-0">
        <div className='flex flex-row ' >
          <input className='  md:w-72 w-32  rounded-md px-2 focus:outline-none border-2 mt-2  focus:border-blue-500' 
          onChange={(e) => filterContent(e.currentTarget.value)} 
          type="text" placeholder='Buscar...' />
          <Icon type={searchIcon.type} color={searchIcon.color} 
                className="h-5 w-5 relative mt-2 top-1 "></Icon>
        </div>
        <div className='flex flex-row gap-2' >
          <button className=" md:text-base text-xs px-2 mt-1 font-bold text-green-100 rounded-md bg-green-500  hover:bg-blue-500"
           onClick={props.addProduct}>Nuevo producto</button>
          <button className="md:text-base text-xs px-2 mt-1 font-bold text-red-100 rounded-md bg-red-500  hover:bg-blue-500" 
          onClick={props.deleteProduct}>Quitar producto</button>
        </div>
      </div>
      <div className="rounded-md  overflow-auto ">
      <table className="  w-full h-full divide-y divide-gray-200  table-auto">

        <thead className="bg-gray-700 sticky  text-left font-bold text-base text-yellow-500">
          <tr >
            <th className=' px-6 py-3 '>Id</th>
            <th className=' px-6 py-3 '>Descripción</th>
            <th className=' px-6 py-3 '>Stock</th>
            <th className=' px-6 py-3 '>Precio final </th>
            <th className=' px-6 py-3 '>Precio de costo</th>
            <th className=' px-6 py-3 '>Modificador en % </th>
          </tr>
        </thead>

        <tbody className='divide-y divide-gray-200 font-bold text-xs md:text-sm text-gray-500 '>
          {tableContent.map(content =>
            <tr className={tableContent.indexOf(content)%2===0?' bg-gray-100':'bg-gray-50'} key={content.id}>
              <td className=' px-6 py-2 ' >{content.id}</td>
              <td className=' px-6 py-2 ' >{content.descripcion}</td>
              <td className=' px-6 py-2 ' ><div className='flex flex-row gap-2 '><p>{content.stock}</p><Icon onclick={() => props.addStock(content)} type={plusIcon.type} color={plusIcon.color} className='h-5 w-5 hover:bg-blue-200'></Icon></div></td>
              <td className=' px-6 py-2 ' >{ARSConverter(content.precioCosto * (1.0 + (content.precioModificador / 100)))}</td>
              <td className=' px-6 py-2 ' ><div className='flex flex-row gap-2'><p>{ARSConverter(content.precioCosto)}</p><Icon onclick={() => props.editPrice(content)} type={adjustIcon.type} color={adjustIcon.color} className='h-4 w-4 hover:bg-blue-200'></Icon></div></td>
              <td className=' px-6 py-2 '><div className='flex flex-row gap-2'><p>{content.precioModificador}</p><Icon onclick={() => props.editModifier(content)} type={adjustIcon.type} color={adjustIcon.color} className='h-4 w-4 hover:bg-blue-200'></Icon></div></td>
            </tr>)}
        </tbody>

      </table>
      </div>
    </div >)

}


