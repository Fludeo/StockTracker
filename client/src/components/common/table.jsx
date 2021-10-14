import { useEffect, useState } from "react"
import { useHistory } from "react-router";
import { Icon } from "./Icon";
import { PopUp } from "./popup";





const plusIcon = { type: "M12 6v6m0 0v6m0-6h6m-6 0H6", color: '#A3E635' }
const adjustIcon = { type: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", color: '#F472B6' }




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



    }))


  }









  return (
    <div className='container w-full flex flex-col'>

      <div className="container bg-gray-50 justify-center flex flex-row sticky top-0">
        <input className='rounded-md px-2 focus:outline-none border-2 mt-2  focus:border-blue-500' onChange={(e) => filterContent(e.currentTarget.value)} type="text" placeholder='Buscar...' />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative mt-2 top-1 " fill="none" viewBox="0 0 24 24" stroke="#D1D5DB">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

      </div>
      <table className=" auto divide-y divide-gray-200 ">
        <thead className="bg-gray-50 sticky top-9">

          <tr className='text-gray-500'>
            <th className=' px-6 py-3 text-left  text-xs font-medium text-gray-500 uppercase'>Id</th>
            <th className=' px-6 py-3 text-left  text-xs font-medium text-gray-500 uppercase'>descripción</th>
            <th className=' px-6 py-3 text-left  text-xs font-medium text-gray-500 uppercase'>stock</th>
            <th className=' px-6 py-3 text-left  text-xs font-medium text-gray-500 uppercase'>Precio de costo</th>
            <th className=' px-6 py-3 text-left  text-xs font-medium text-gray-500 uppercase'>Precio final</th>
            <th className=' px-6 py-3 text-left  text-xs font-medium text-gray-500 uppercase'>Modificador </th>
          </tr>


        </thead>
        <tbody className='divide-y divide-gray-200'>
          {tableContent.map(content =>
            <tr className='md:text-sm' key={content.id}>
              <td className=' px-6 py-2 text-xs ' >{content.id}</td>
              <td className=' px-6 py-2 text-xs md:text-sm' >{content.descripcion}</td>
              <td className='  px-6 py-2 text-xs ' ><div className='flex flex-row gap-2 '><p>{content.stock}</p><Icon onclick={() => props.addStock(content)} type={plusIcon.type} color={plusIcon.color} className='h-5 w-5 hover:bg-blue-200'></Icon></div></td>
              <td className='  px-6 py-2 text-xs ' ><div className='flex flex-row gap-2'><p>{Intl.NumberFormat("de-DE").format(content.precioCosto)}</p><Icon type={adjustIcon.type} color={adjustIcon.color} className='h-4 w-4 hover:bg-blue-200'></Icon></div></td>
              <td className='  px-6 py-2 text-xs ' >{Intl.NumberFormat("de-DE").format(content.precioCosto * (1.25 + (content.precioModificador / 100)))}</td>
              <td className='  px-6 py-2 text-xs '><div className='flex flex-row gap-2'><p>{content.precioModificador}</p><Icon type={adjustIcon.type} color={adjustIcon.color} className='h-4 w-4 hover:bg-blue-200'></Icon></div></td>
            </tr>)}
        </tbody>
      </table>
    </div >)

}


