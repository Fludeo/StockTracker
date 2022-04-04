import {  useEffect, useReducer, useState } from "react";

import {ARSConverter} from "../../customhooks/helperFunctions"
import useFetch from "../../customhooks/useFetch";

import { Icon } from "./Icon";





const initialState = {
                        itemList:[
                                {
                                product:{id:"",descripcion:"",precioCosto:0,precioModificador:0},
                                quantity:0, 
                                subTotal:0,
                                discount:0, 
                                costSubTotal:0 
                                }
                                 ],
                        saleTotal:0,
                        costSaleTotal:0
                        }

function subTotal(quantity,discount,price,priceMod){
    const subTotal =  (((((price * (1.0 + (priceMod) / 100) * (1.0 + (-discount) / 100)))*quantity)))
    return subTotal
}
function costSubTotal(quantity,price){
    const costSubTotal =  (price *quantity)
    return costSubTotal
}

function calcTotal(list){

    if(list!=null)
    {
      const total =  list.reduce((previousItem,currentItem)=>{
  
                      let result = {subTotal: previousItem.subTotal + currentItem.subTotal}
            
                         return result;
                     },{subTotal:0}).subTotal
        
         return total

    }
    
}
function calcCostTotal(list){

    if(list!=null)
    {
      const costTotal =  list.reduce((previousItem,currentItem)=>{
  
                      let result = {costSubTotal: previousItem.costSubTotal + currentItem.costSubTotal}
            
                         return result;
                     },{costSubTotal:0}).costSubTotal
        
         return costTotal

    }
    
}



const saleFormReducer =(state,action)=>{

    let newState;

    switch(action.type){

        case 'UPDATE_LIST':
        newState ={...state}
        newState.itemList[newState.itemList.indexOf(action.payload.item)][action.payload.field]=action.payload.value;
        newState.itemList[newState.itemList.indexOf(action.payload.item)]['subTotal'] = 
                    subTotal(
                    newState.itemList[newState.itemList.indexOf(action.payload.item)]['quantity'] ,
                    newState.itemList[newState.itemList.indexOf(action.payload.item)]['discount'],
                    newState.itemList[newState.itemList.indexOf(action.payload.item)]['product'].precioCosto,
                    newState.itemList[newState.itemList.indexOf(action.payload.item)]['product'].precioModificador)
                    newState.itemList[newState.itemList.indexOf(action.payload.item)]['costSubTotal'] = 
                    costSubTotal(
                            newState.itemList[newState.itemList.indexOf(action.payload.item)]['quantity'] ,
                            newState.itemList[newState.itemList.indexOf(action.payload.item)]['product'].precioCosto)
                    newState.saleTotal = calcTotal(newState.itemList)
                    newState.costSaleTotal = calcCostTotal(newState.itemList)
        
        console.log(newState.itemList)
        return newState

        case'ADD_ITEM':

        newState ={...state}
        newState.itemList = action.payload
        
        return newState;

        case'DELETE_ITEM':
        newState ={...state}
        newState.itemList = action.payload
        newState.saleTotal = calcTotal(newState.itemList)
        newState.costSaleTotal = calcCostTotal(newState.itemList)
        return newState;

        default:
            return null
    }




}






const minusIcon = {type: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z", color:"#F472B6"}
const plusIcon = { type: "M12 6v6m0 0v6m0-6h6m-6 0H6", color: '#A3E635' }



export const SaleForm = (props) => {   


    const [state,dispatch] = useReducer(saleFormReducer,initialState)
    const [sortedData,setSortedData]= useState([])
    const url = '/product/get/all'
    const {data,loading,error} = useFetch(url)
  


    function setDataAux(data){
        setSortedData(data.sort((a, b) => (a.descripcion > b.descripcion) ? 1 : (a.descripcion < b.descripcion) ? -1 : 0))  
     }



    
   


   

   
    const newEntry =   {
                        product:{id:"",descripcion:"",precioCosto:0,precioModificador:0},
                        quantity:0, 
                        subTotal:0, 
                        discount:0 
                        }
    
    function DeleteItem(item){
        const result = [...state.itemList]
        result.splice(state.itemList.indexOf(item),1)
        return result
    }
    
    
   async function  SalePost(e)
    {
        e.preventDefault();
        const finalList ={productList:state.itemList,
                          saleTotal: state.saleTotal,
                        totalEarn: state.saleTotal - state.costSaleTotal}

        state.itemList.map(item => console.log(item.descripcion))
        try {
           const response =  await fetch('/sale/new', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(finalList),
            })
            if(response.ok)
            props.history.go(0)
          }
          catch (err) {
            console.log(err)
      
          }
    }
  

   useEffect (()=>{

    if(data!=null){
        setDataAux(data)
    }

   },[data])

    
    
  
   
  

     

    return (loading ? 'Cargando' : error ? 'Error' :
        <form  className='relative overflow-auto max-h-screen self-center md:w-1/2 w-full text-left  flex flex-col  gap-1 bg-gray-700 rounded-md  md:m-16  md:px-8 md:p-12  p-4'>
            <table className="divide-y divide-gray-500 ">
                <thead>
                    <tr className="text-yellow-500 ">
                        <th className="text-left md:text-base text-sm">Producto</th>
                        <th className="text-left md:text-base text-sm">Descuento %</th>
                        <th className="text-left md:text-base text-sm">Cantidad</th>
                        <th className="text-left md:text-base text-sm">Subtotal</th>
                    </tr>
                </thead>
                    <tbody className="divide-y divide-gray-500">
                        {state.itemList.map(item => <tr key={state.itemList.indexOf(item)}>
                            <td className=" md:text-base text-sm  p-4 pl-0">
                                <select  value={String(item.product.id)} className=" overflow-ellipsis w-40  md:w-96 rounded-md md:p-1  focus:outline-none border-2  focus:border-blue-500"  
                                onChange={(e)=>dispatch({type:'UPDATE_LIST', payload:{item:item,field:'product',value:sortedData.find(product => String(product.id) === String(e.currentTarget.value))}})}>
                                    <option value=""  disabled hidden>Elegir producto</option>
                                    {sortedData.map((product) => (<option key={product.id} value={String(product.id)}>{`${product.descripcion}    (${product.stock})`}</option>))}
                                </select>
                            </td>
                            <td className=" md:text-base text-sm">
                                <input onChange={(e)=>dispatch({type:'UPDATE_LIST', payload:{item:item,field:'discount',value:Number(e.currentTarget.value)}})} 
                                className=' md:w-16 w-10 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' 
                                type="number" value={item.discount} min="0" />
                            </td>
                            <td className=" md:text-base text-sm">
                                <input onChange={(e)=>dispatch({type:'UPDATE_LIST', payload:{item:item,field:'quantity',value: Number(e.currentTarget.value)}})} 
                                className=' md:w-16 w-10 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' 
                                type="number" value={item.quantity} min="1" />
                            </td>
                            <td className="text-gray-200">
                                {ARSConverter(item.subTotal)}
                            </td>
                            <td>
                            <Icon onclick={() => dispatch({type:'DELETE_ITEM', payload:DeleteItem(item)})}  type={minusIcon.type} color={minusIcon.color} className=' m-0 h-6 w-6 hover:bg-gray-500'></Icon>
                            </td>
                        </tr>)}
                    </tbody>
                    <tfoot className="">
                        <tr>
                            <td className="p-4 pl-0"> <Icon onclick={() => dispatch({type:'ADD_ITEM', payload:[...state.itemList,newEntry]})} type={plusIcon.type} color={plusIcon.color} className=' m-0 h-6 w-6 hover:bg-gray-500'></Icon></td>
                            <td ></td>
                            <td className="text-yellow-500 text-base font-bold"><p>Total:</p></td>
                            <td className=" text-green-500 text-base font-bold"><p>{ARSConverter(state.saleTotal)}</p></td>
                            <td ></td>  
                        </tr>
                    </tfoot>   
            </table>
         
            <div className='justify-around flex  flex-row'>
                    <button className='h-9 my-4 px-2 font-bold text-xs text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' 
                            type='button' onClick={(e)=>SalePost(e)}>
                            Aceptar
                    </button>
                    <button className='h-9 my-4 px-2 font-bold text-xs text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' 
                            onClick={() => props.setSalePopup(false)}>
                            Cancelar
                    </button>
                </div>
        </form >
    );
}



