import { useEffect, useState } from "react"
import fetchData from "../../customhooks/fetchData"
import { Table } from "../common/table"










export  const StockPage = (props) => {

    const [data,setData]= useState(null)
    const [loading,setLoading] =useState(true)
    const [error,setError] =useState(false)

    useEffect(() => {
       
        fetchData('/product/get/all',setData,setLoading,setError)

      }, [])

    return(loading ?'Cargando': error? 'Error':
   <Table heads={data.heads} tableContent={data.tableContent} ></Table>
        )
}



