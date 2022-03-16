import { useEffect, useState } from "react"
import fetchData from "../../customhooks/fetchData"
import { AddProductForm, SimpleForm } from "../common/form"
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
      const response = await fetch('/product/addstockproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: popupContent.id, precio: '', stock: formContent.updatedValue, descripcion: '', modificador: '' }),
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
        body: JSON.stringify({ ...formContent, id: formContent.updatedValue }),
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
      const response = await fetch('/product/updateproduct/price', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: popupContent.id, precioCosto: formContent.updatedValue, stock: '', descripcion: '', precioModificador: 0 }),
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
      const response = await fetch('/product/updateproduct/priceMod', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: popupContent.id, precioCosto: 0, stock: 0, descripcion: '', precioModificador: formContent.updatedValue }),
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
    <main className='md:w-5/6 w-full h-screen flex md:flex-col flex-row '>


      <section className=' m-0 w-full flex flex-col overflow-auto'>


        <Table addStock={addStock} addProduct={addProduct} deleteProduct={deleteProduct} updatePrice={updatePriceProduct} updateModifier={updateModifierProduct} tableContent={data} ></Table>
      </section>
      <PopUp trigger={stockPopup}>
        <SimpleForm inputType="number" formTitle="Agregar Stock del producto:" setPopup={setStockPopup} setFormContent={setFormContent} handleSubmit={handleStockSubmit} formContent={formContent} popupContent={popupContent} ></SimpleForm>
      </PopUp>
      <PopUp trigger={productPopup}>
        <AddProductForm setProductPopup={setProductPopup} setFormContent={setFormContent} handleProductSubmit={handleProductSubmit} formContent={formContent} ></AddProductForm>
      </PopUp>
      <PopUp trigger={deleteProductPopup}>
        <SimpleForm inputType="number" formTitle="Ingrese Id del producto a eliminar:" setPopup={setDeleteProductPopup} setFormContent={setFormContent} handleSubmit={handleDeleteProductSubmit} formContent={formContent} popupContent={""} ></SimpleForm>
      </PopUp>
      <PopUp trigger={updatePricePopup}>
        <SimpleForm inputType="number" formTitle="Cambiar precio del producto:" setPopup={setUpdatePricePopup} setFormContent={setFormContent} handleSubmit={handleUpdatePriceSubmit} popupContent={popupContent} ></SimpleForm>
      </PopUp>
      <PopUp trigger={updateModifierPopup}>
        <SimpleForm inputType="number" formTitle="Cambiar modificador del producto:" setPopup={setUpdateModifierPopup} setFormContent={setFormContent} handleSubmit={handleUpdateModifierSubmit} popupContent={popupContent} ></SimpleForm>
      </PopUp>
    </main>
  )
}


