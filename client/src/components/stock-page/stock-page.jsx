import { useEffect, useState } from "react"
import fetchData from "../../customhooks/fetchData"
import { AddStockForm } from "../common/form"
import { PopUp } from "../common/popup"
import { Table } from "../common/table"










export const StockPage = (props) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [popupContent, setPopupcontent] = useState('')
  const [formContent, setFormContent] = useState('')
  const [stockPopup, setStockPopup] = useState(false)


  function addStock(productData) {
    setPopupcontent(productData)

    setStockPopup(true)
  }



  async function handleStockSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/product/addstock', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: popupContent.id, nuevoStock: formContent }),
      })
      props.history.go(0)
    }
    catch (err) {
      props.history.push('/aaaa')
      console.log(err)

    }
  }







  useEffect(() => {

    fetchData('/product/get/all', setData, setLoading, setError)

  }, [])





  return (loading ? 'Cargando' : error ? 'Error' :
    <main className='container w-5/6 h-screen flex flex-col md:flex-row overflow-auto'>


      <section className='container m-0 w-full flex flex-col overflow-auto'>


        <Table addStock={addStock} tableContent={data} ></Table>
      </section>
      <PopUp trigger={stockPopup}>
        <AddStockForm setStockPopup={setStockPopup} setFormContent={setFormContent} handleStockSubmit={handleStockSubmit} popupContent={popupContent} ></AddStockForm>
      </PopUp>
    </main>
  )
}


