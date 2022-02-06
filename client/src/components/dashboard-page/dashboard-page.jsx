import fetchData from "../../customhooks/fetchData"
import { useEffect, useState } from "react"
import { LastSales } from "./last-sales"


export const DashBoardPage = (props) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
  
    


  
  
  
  
  
  
    useEffect(() => {
     
      fetchData('/sale/get/all', setData, setLoading, setError)
  
    }, [])
  
  
  
  
  
    return (loading ? 'Cargando' : error ? 'Error' :
      <main className='md:w-5/6 w-full h-screen bg-gray-600  flex flex-col '>
  
  <div className=" w-full h-1/2 flex flex-row ">
        <section className=' mb-2 mr-2 m-4 w-1/2  bg-gray-500 rounded-xl'>

       <LastSales data ={data} ></LastSales>
         
        </section>
        <section className='mb-2 ml-2 m-4 w-1/2  bg-gray-500 rounded-xl'>
  
  
         
  </section>
  </div>
  <div className="w-full h-1/2 flex flex-row ">
  <section className=' mt-2 mr-2 m-4 w-1/2  bg-gray-500 rounded-xl'>
  
  
         
  </section>
  <section className=' mt-2 m-4 ml-2 w-1/2  bg-gray-500 rounded-xl'>
  
  
         
  </section>
  </div>

       
      </main>
    )
  }