import { useEffect, useReducer, useState } from "react"
import { AddProductForm, SimpleForm } from "./forms"
import { PopUp } from "../common/popup"
import { Table } from "../common/table"
import useFetch from "../../customhooks/useFetch"


const initialState ={}

const stockReducer =(state,action)=>{

  let newState ={};

  switch(action.type)
  {
    case'UPDATE_VALUE':
    newState = {...state}
    newState[action.payload.field] = action.payload.updatedValue
    return newState

   
    case'POPUP':
    newState = {...state}
    newState[action.payload.popup] = action.payload.trigger
    newState.productInfo = action.payload.productInfo
    return newState

    default:
      return null
  }

    
}


export const StockPage = (props) => {

  
  const [state,dispatch] = useReducer(stockReducer,initialState)
  const [tableData, setTableData] = useState([])
  const url ='/product/get/all'
  const{data,loading,error} = useFetch(url)


  async function handleStockSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('/product/addstockproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: state.productInfo.id, precio: '', stock: state.updatedValue, descripcion: '', modificador: '' }),
      })
      if(response.ok) props.history.go(0)
    }
    catch (err) {
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
        body: JSON.stringify({ id: state.productInfo.id, precioCosto: state.updatedValue, stock: '', descripcion: '', precioModificador: 0 }),
      })
     if(response.ok) props.history.go(0)
    }
    catch (err) {
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
        body: JSON.stringify({ id: state.productInfo.id, precioCosto: 0, stock: 0, descripcion: '', precioModificador: state.updatedValue }),
      })
      if(response.ok) props.history.go(0)
    }
    catch (err) {
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
        body: JSON.stringify({precioCosto:state.price, descripcion:state.description}),
      })
      if(response.ok) props.history.go(0)
    }
    catch (err) {
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
        body: JSON.stringify({ id: state.updatedValue }),
      })
      if(response.ok) props.history.go(0)
    }
    catch (err) {
      console.log(err)

    }
  }





  useEffect(() => {

    if(data!=null){
    setTableData(data)
  }

  }, [data])



  return (loading ? 'Cargando' : error ? 'Error' :
    <main className='md:w-5/6 w-full h-screen flex md:flex-col flex-row '>


      <section className=' m-0 w-full flex flex-col overflow-auto'>
        <Table
        deleteProduct={()=>dispatch({type:'POPUP', payload:{popup:'popupDeleteProduct',trigger:true ,productInfo:{}}})} 
        addProduct={()=>dispatch({type:'POPUP', payload:{popup:'popupAddProduct',trigger:true ,productInfo:{}}})}  
        addStock={(content)=>dispatch({type:'POPUP', payload:{popup:'popupAddStock',trigger:true,productInfo:content}})} 
        editPrice={(content)=>dispatch({type:'POPUP', payload:{popup:'popupEditPrice',trigger:true,productInfo:content}})}
        editModifier={(content)=>dispatch({type:'POPUP', payload:{popup:'popupEditModifier',trigger:true,productInfo:content}})}
        tableContent={tableData}>
        </Table>
      </section>

      <PopUp trigger={state.popupAddStock}>
        <SimpleForm inputType="number" formTitle="Agregar Stock del producto:"  
        closePopup={()=>dispatch({type:'POPUP', payload:{popup:'popupAddStock',trigger:false,productInfo:{}}})} 
        updateValue={(e)=>dispatch({type:'UPDATE_VALUE',payload:{updatedValue:e.currentTarget.value, field:'updatedValue'}})} 
        handleSubmit={(e)=> handleStockSubmit(e)} productInfo={state.productInfo} >
        </SimpleForm>
      </PopUp>
      <PopUp trigger={state.popupAddProduct}>
        <AddProductForm 
        description={(e)=>dispatch({type:'UPDATE_VALUE',payload:{updatedValue:e.currentTarget.value, field:'description'}})}  
        price={(e)=>dispatch({type:'UPDATE_VALUE',payload:{updatedValue:e.currentTarget.value, field:'price'}})} 
        handleSubmit={(e)=>handleProductSubmit(e)}
        closePopup={()=>dispatch({type:'POPUP', payload:{popup:'popupAddProduct',trigger:false,productInfo:{}}})} 
        >
        </AddProductForm>
      </PopUp>
      <PopUp trigger={state.popupDeleteProduct}>
        <SimpleForm inputType="number" formTitle="Ingrese Id del producto a eliminar:" 
        closePopup={()=>dispatch({type:'POPUP', payload:{popup:'popupDeleteProduct',trigger:false,productInfo:{}}})} 
        updateValue={(e)=>dispatch({type:'UPDATE_VALUE',payload:{updatedValue:e.currentTarget.value, field:'updatedValue'}})} 
        handleSubmit={(e)=>handleDeleteProductSubmit(e)}>
        </SimpleForm>
      </PopUp>
      <PopUp trigger={state.popupEditPrice}>
      <SimpleForm inputType="number" formTitle="Cambiar Precio del producto:"  
        closePopup={()=>dispatch({type:'POPUP', payload:{popup:'popupEditPrice',trigger:false,productInfo:{}}})} 
        updateValue={(e)=>dispatch({type:'UPDATE_VALUE',payload:{updatedValue:e.currentTarget.value, field:'updatedValue'}})} 
        handleSubmit={(e)=>handleUpdatePriceSubmit(e)} productInfo={state.productInfo} >
        </SimpleForm>
      </PopUp>
      <PopUp trigger={state.popupEditModifier}>
      <SimpleForm inputType="number" formTitle="Cambiar Modificador del producto:"  
        closePopup={()=>dispatch({type:'POPUP', payload:{popup:'popupEditModifier',trigger:false,productInfo:{}}})} 
        updateValue={(e)=>dispatch({type:'UPDATE_VALUE',payload:{updatedValue:e.currentTarget.value , field:'updatedValue'}})} 
        handleSubmit={(e)=>handleUpdateModifierSubmit(e)} productInfo={state.productInfo}>
        </SimpleForm>
      </PopUp>
   
    </main>
  )
}



