
import { useState } from "react"
import { LastSales } from "./last-sales"
import { HoverList } from "./hover-list"
import { StockAlert } from "./stock-alert"
import { HeatMap } from "./graph-section"
import useFetch from "../../customhooks/useFetch"



export const DashBoardPage = (props) => {

    const saleUrl = '/sale/get/all'
    const sales = useFetch(saleUrl)
  
    const productUrl = '/product/get/all'
    const products = useFetch(productUrl)

    const [hoverList,sethoverList] = useState(false)
    


  
  
  
    return (
      <main className='md:w-5/6  w-full h-screen bg-gray-50 grid md:grid-cols-2 grid-cols-1 grid-rows-2  gap-4 p-4  '>
  
  
      
  <section className=' md:w-full w-full md:h-full h-full flex flex-col gap-4 rounded-md '>
       {sales.loading? 'Cargando': sales.error ? 'Error':<LastSales className="  md:w-full w-full md:h-1/2 h-1/2   rounded-md  border  overflow-auto bg-gray-100  " setHoverList={sethoverList} data ={sales.data} ></LastSales>}
       {products.loading? 'Cargando': products.error ? 'Error':<StockAlert className="  md:w-full w-full md:h-1/2 h-1/2   rounded-md  border  overflow-auto bg-gray-100  "  data ={products.data} ></StockAlert>}
  </section>
  

   
       <section className='  w-full h-full overflow-auto md:border border rounded-md bg-gray-100 p-2'>
       {(hoverList!==false)?<HoverList  hoverList ={hoverList}></HoverList>:sales.data!=null&&<HeatMap data={sales.data}></HeatMap> }
      
       </section>

       <section className=' md:col-span-2  md:w-full w-full md:h-full h-1/2 gap-4 flex flex-col  rounded-md '>
       <div className='  md:w-full w-full md:h-3/4 h-1/2  md:border border rounded-md bg-gray-100'>
      
      
      </div>
       <div className='  md:w-full w-full md:h-1/4 h-1/4  md:border border rounded-md bg-gray-100'>
      
      
      </div>
       </section>

     

      
        
        
         
 
  


       
      </main>
    )
  }