import { useEffect, useState } from "react";
import fetchData from "../../customhooks/fetchData";







export const AddProductForm = (props) => {


    return (
        <form onSubmit={(event) => props.handleProductSubmit(event)} className='flex flex-col gap-6 container relative p-10 rounded-md w-96 bg-gray-700 -left-60'>
            <h1 className='text-yellow-500 text-xl'>Agregar producto:</h1>
            <label className='text-yellow-500'>Código</label>
            <input type='number' className=' w-28 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' onChange={(e) => {
                props.setFormContent({ ...props.formContent, id: e.currentTarget.value })
            }}></input>
            <label className='text-yellow-500'>Descripción</label>
            <input type='text' className='  rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' onChange={(e) => {
                props.setFormContent({ ...props.formContent, descripcion: e.currentTarget.value })
            }}></input>
            <label className='text-yellow-500'>Precio de costo</label>
            <input step="any" type='number' className=' w-28 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' onChange={(e) => {
                props.setFormContent({ ...props.formContent, precio: e.currentTarget.value })
            }}></input>
            <div className='container  justify-around flex  flex-row'>
                <button className='h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' type='submit'>Aceptar</button>
                <button className='h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' onClick={() => props.setProductPopup(false)}>Cancelar</button>
            </div>
        </form>);
}






export const SaleForm = (props) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [currentSale, setCurrentSale] = useState('')



    useEffect(() => {

        fetchData('/product/get/all', setData, setLoading, setError)

    }, [])


    return (loading ? 'Cargando' : error ? 'Error' :
        <form onSubmit={(event) => props.handleSale(event)} className='w-96 relative -left-40 text-left justify-center flex flex-col gap-5 bg-gray-700 rounded-md md:w-96 md:m-16  md:px-8 md:py-12 m-0 p-4'>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>
                                <select >
                                    <option value="" selected disabled hidden>Elegir producto</option>
                                    {data.sort((a, b) => (a.descripcion > b.descripcion) ? 1 : (a.descripcion < b.descripcion) ? -1 : 0).map((product) => (<option key={product.id} value={product.descripcion}>{product.descripcion}</option>))}
                                </select>
                            </td>
                            <td>
                                <input className='w-12' type="number" />
                            </td>
                            <td>
                                <input className='w-12' type="number" />
                            </td>
                        </tr>

                    </tbody>
                </thead>
            </table>
        </form >
    );
}

export const SimpleForm = (props) => {


    const [inputType, setInputType] = useState(props.inputType);





    return (
        <form onSubmit={(event) => props.handleSubmit(event)} className=' w-96 relative -left-40 text-left justify-center flex flex-col gap-5 bg-gray-700 rounded-md md:w-96 md:m-16  md:px-8 md:py-12 m-0 p-4' >
            <input type="number" hidden name='id' value={props.popupContent.id} />
            <h1 className='text-yellow-500 text-2xl'>{props.formTitle}</h1>
            <p className='text-gray-200'>{props.popupContent.descripcion}</p>
            {(inputType === "number") ?
                <input type="number" onChange={(e) => props.setFormContent({ ...props.formContent, updatedValue: e.currentTarget.value })} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
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
