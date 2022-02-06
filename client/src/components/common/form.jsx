import { useEffect, useState } from "react";
import fetchData from "../../customhooks/fetchData";
import ARSConverter from "../../customhooks/helperFunctions"
import { Icon } from "./Icon";







export const AddProductForm = (props) => {


    return (
        <form onSubmit={(event) => props.handleProductSubmit(event)} className='relative overflow-auto  md:-left-48 self-center md:w-1/3 w-full text-left   flex flex-col  gap-5 bg-gray-700 rounded-md  md:m-16  md:px-8 md:p-12  p-6'>
            <h1 className='text-yellow-500 text-xl'>Agregar producto:</h1>
           
            <label className='text-yellow-500'>Descripción</label>
            <input type='text' className='  rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' onChange={(e) => {
                props.setFormContent({ ...props.formContent, descripcion: e.currentTarget.value })
            }}></input>
            <label className='text-yellow-500'>Precio de costo</label>
            <input step="any" type='number' min="1" className=' w-28 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' onChange={(e) => {
                props.setFormContent({ ...props.formContent, precioCosto: e.currentTarget.value })
            }}></input>
            <div className='container  justify-around flex  flex-row'>
                <button className='h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' type='submit'>Aceptar</button>
                <button className='h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' onClick={() => props.setProductPopup(false)}>Cancelar</button>
            </div>
        </form>);
}






export const SaleForm = (props) => {
    const minusIcon = {type: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z", color:"#F472B6"}
    const plusIcon = { type: "M12 6v6m0 0v6m0-6h6m-6 0H6", color: '#A3E635' }
    const [data, setData] = useState(null)
    const [sortedData,setSortedData]= useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [itemList, setCurrentItemList] = useState([{itemId:"",quantity:0, subTotal:0 }])
    const[totalVenta,setTotalVenta] = useState(0)
    
    console.log(itemList)
    function calcTotal(list){
        if(list!=null){setTotalVenta(list.reduce(reducer,{subTotal:0}).subTotal)}
    }
    function reducer(previousItem,currentItem){
      
        let result = {subTotal :previousItem.subTotal + currentItem.subTotal}
        
         return result;
    }
   async function  SalePost(e)
    {
        e.preventDefault();
        const finalList ={listaProductos:itemList}
        try {
            const response = await fetch('/sale/new', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(finalList),
            })
            props.history.go(0)
          }
          catch (err) {
            props.history.push('/aaaa')
            console.log(err)
      
          }
    }
    function DeleteItem(e,index){
        e.preventDefault();
        console.log(index)
        const newSaleItems = [...itemList]
        console.log([...itemList])
        newSaleItems.splice(index,1)
        console.log(newSaleItems)
        setCurrentItemList(newSaleItems)
        calcTotal(newSaleItems)
    }
    function AddItem(e){
        e.preventDefault();
       let newSaleItems = [...itemList]
        newSaleItems.push({itemId:"",quantity:0, subTotal:0})
        setCurrentItemList(newSaleItems)
        calcTotal(newSaleItems)
    }
    function UpdateItem(item,updatedItem){
        let itemKey = itemList.indexOf(item)
        data.filter((product) => (product.id === Number(updatedItem.itemId)) ? (updatedItem.subTotal = ((product.precioCosto)*(1.25 +product.precioModificador/100 ))*updatedItem.quantity) :"")
        let newSaleItems = [...itemList]
        newSaleItems[itemKey]= updatedItem;
        setCurrentItemList(newSaleItems);
        calcTotal(newSaleItems)
    }

   

    function setDataAux(data){
       setData(data)
       setSortedData(data.sort((a, b) => (a.descripcion > b.descripcion) ? 1 : (a.descripcion < b.descripcion) ? -1 : 0))
    }

    useEffect(() => {

        fetchData('/product/get/all', setDataAux, setLoading, setError)
      
    }, [])


    return (loading ? 'Cargando' : error ? 'Error' :
        <form onSubmit={(e) => SalePost(e)} className='relative overflow-auto max-h-screen self-center md:w-1/2 w-full text-left   flex flex-col  gap-1 bg-gray-700 rounded-md  md:m-16  md:px-8 md:p-12  p-4'>
            <table className="divide-y divide-gray-500 ">
                <thead>
                    <tr className="text-yellow-500 ">
                        <th className="text-left md:text-base text-sm">Producto</th>
                        <th className="text-left md:text-base text-sm">Cantidad</th>
                        <th className="text-left md:text-base text-sm">Subtotal</th>
                    </tr>
                </thead>
                    <tbody className="divide-y divide-gray-500">
                        {itemList.map(itemRow => <tr key={itemList.indexOf(itemRow)}>
                            <td className=" md:text-base text-sm  p-4 pl-0">
                                <select  value={String(itemRow.itemId)} className=" overflow-ellipsis w-40  md:w-96 rounded-md md:p-1  focus:outline-none border-2  focus:border-blue-500"  onChange={(e)=>UpdateItem(itemRow,{...itemRow, itemId: e.currentTarget.value})} >
                                    <option value=""  disabled hidden>Elegir producto</option>
                                    {sortedData.map((product) => (<option key={product.id} value={product.id}>{`${product.descripcion}    (${product.stock})`}</option>))}
                                </select>
                            </td>
                            <td className=" md:text-base text-sm">
                                <input onChange={(e)=>UpdateItem(itemRow,{...itemRow, quantity: e.currentTarget.value})} className=' md:w-16 w-10 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' type="number" value={itemRow.quantity} min="1" />
                            </td>
                            <td className="text-gray-200">
                                {ARSConverter(itemRow.subTotal)}
                            </td>
                            <td>
                            <Icon onclick={(e) => DeleteItem(e,itemList.indexOf(itemRow))}  type={minusIcon.type} color={minusIcon.color} className=' m-0 h-6 w-6 hover:bg-gray-500'></Icon>
                            </td>
                        </tr>)}
                    </tbody>
                    <tfoot className="">
                        <tr>
                            <td className="p-4 pl-0"> <Icon onclick={(e) => AddItem(e)} type={plusIcon.type} color={plusIcon.color} className=' m-0 h-6 w-6 hover:bg-gray-500'></Icon></td>
                            <td className="text-yellow-500 text-base font-bold"><p >Total:</p></td>
                            <td className=" text-green-500 text-base font-bold"><p>{ARSConverter(totalVenta)}</p></td>
                        </tr>
                    </tfoot>   
            </table>
         
            <div className='justify-around flex  flex-row'>
                    <button className='h-9 my-4 px-2 font-bold text-xs text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' type='submit'>Aceptar</button>
                    <button className='h-9 my-4 px-2 font-bold text-xs text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' onClick={() => props.setSalePopup(false)}>Cancelar</button>
                </div>
        </form >
    );
}

export const SimpleForm = (props) => {


    const [inputType, setInputType] = useState(props.inputType);





    return (
        <form onSubmit={(event) => props.handleSubmit(event)} className='relative overflow-auto  md:-left-48 self-center md:w-1/3 w-full text-left   flex flex-col  gap-5 bg-gray-700 rounded-md  md:m-16  md:px-8 md:p-12  p-6' >
            <input type="number" hidden name='itemId' value={props.popupContent.itemId} />
            <h1 className='text-yellow-500 text-2xl'>{props.formTitle}</h1>
            <p className='text-gray-200'>{props.popupContent.descripcion}</p>
            {(inputType === "number") ?
                <input type="number"  onChange={(e) => props.setFormContent({ ...props.formContent, updatedValue: e.currentTarget.value })} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
                : (inputType === "text") ?
                    <input type="text" onChange={(e) => props.setFormContent({ ...props.formContent, updatedValue: e.currentTarget.value })} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
                    : ""}
            <div className='flex flex-row justify-around'>
                <button type='submit' className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500">Aceptar</button>
                <button className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" onClick={() => props.setPopup(false)} >Cancelar</button>
            </div>
        </form>
    );
}
