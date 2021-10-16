import { useEffect, useState } from "react"
import fetchData from "../../customhooks/fetchData"
import { AddProductForm, AddStockForm, DeleteProductForm, UpdateModifierForm, UpdatePriceForm } from "../common/form"
import { PopUp } from "../common/popup"
import { Table } from "../common/table"










export const StockPage = (props) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [popupContent, setPopupcontent] = useState('')
  const [formContent, setFormContent] = useState('')
  const [stockPopup, setStockPopup] = useState(false)
  const [updateModifierPopup, setUpdateModifierPopup] = useState(false)
  const [deleteProductPopup, setDeleteProductPopup] = useState(false)
  const [productPopup, setProductPopup] = useState(false)

  const [updatePricePopup, setUpdatePricePopup] = useState('')

  function addStock(productData) {
    setPopupcontent(productData)
    setStockPopup(true)
  }
  function addProduct(productData) {

    setProductPopup(true)
  }

  function deleteProduct() {
    setDeleteProductPopup(true)
  }
  function updatePriceProduct(productData) {
    setPopupcontent(productData)
    setUpdatePricePopup(true)
  }
  function updateModifierProduct(productData) {
    setPopupcontent(productData)
    setUpdateModifierPopup(true)
  }


  async function handleStockSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/product/updateproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: popupContent.id, precio: '', stock: formContent.stock, descripcion: '', modificador: '' }),
      })
      props.history.go(0)
    }
    catch (err) {
      props.history.push('/aaaa')
      console.log(err)

    }
  }
  async function handleProductSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/product/addproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formContent),
      })
      props.history.go(0)
    }
    catch (err) {
      props.history.push('/aaaa')
      console.log(err)

    }
  }
  async function handleDeleteProductSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/product/deleteproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formContent),
      })
      props.history.go(0)
    }
    catch (err) {
      props.history.push('/aaaa')
      console.log(err)

    }
  }
  async function handleUpdatePriceSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/product/updateproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: popupContent.id, precio: formContent.precio, stock: '', descripcion: '', modificador: '' }),
      })
      props.history.go(0)
    }
    catch (err) {
      props.history.push('/aaaa')
      console.log(err)

    }
  }
  async function handleUpdateModifierSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/product/updateproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: popupContent.id, precio: '', stock: '', descripcion: '', modificador: formContent.modificador }),
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


        <Table addStock={addStock} addProduct={addProduct} deleteProduct={deleteProduct} updatePrice={updatePriceProduct} updateModifier={updateModifierProduct} tableContent={data} ></Table>
      </section>
      <PopUp trigger={stockPopup}>
        <AddStockForm setStockPopup={setStockPopup} setFormContent={setFormContent} handleStockSubmit={handleStockSubmit} formContent={formContent} popupContent={popupContent} ></AddStockForm>
      </PopUp>
      <PopUp trigger={productPopup}>
        <AddProductForm setProductPopup={setProductPopup} setFormContent={setFormContent} handleProductSubmit={handleProductSubmit} formContent={formContent} ></AddProductForm>
      </PopUp>
      <PopUp trigger={deleteProductPopup}>
        <DeleteProductForm products={data} setDeleteProductPopup={setDeleteProductPopup} setFormContent={setFormContent} handleDeleteProductSubmit={handleDeleteProductSubmit} formContent={formContent} ></DeleteProductForm>
      </PopUp>
      <PopUp trigger={updatePricePopup}>
        <UpdatePriceForm setUpdatePricePopup={setUpdatePricePopup} setFormContent={setFormContent} handleUpdatePriceSubmit={handleUpdatePriceSubmit} popupContent={popupContent} ></UpdatePriceForm>
      </PopUp>
      <PopUp trigger={updateModifierPopup}>
        <UpdateModifierForm setUpdateModifierPopup={setUpdateModifierPopup} setFormContent={setFormContent} handleUpdateModifierSubmit={handleUpdateModifierSubmit} popupContent={popupContent} ></UpdateModifierForm>
      </PopUp>
    </main>
  )
}


