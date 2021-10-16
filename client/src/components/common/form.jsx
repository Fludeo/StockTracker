import { useState } from "react";




export const AddStockForm = (props) => {




    return (
        <form onSubmit={(event) => props.handleStockSubmit(event)} className=' w-96 relative -left-40 text-left justify-center flex flex-col gap-5 bg-gray-700 rounded-md md:w-96 md:m-16  md:px-8 md:py-12 m-0 p-4' >
            <input type="number" hidden name='id' value={props.popupContent.id} />
            <h1 className='text-yellow-500 text-2xl'>Agregar stock de producto:</h1>
            <p className='text-gray-200'>{props.popupContent.descripcion}</p>
            <input name='nuevoStock' type="number" onChange={(e) => props.setFormContent({ ...props.formContent, stock: e.currentTarget.value })} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
            <div className='flex flex-row justify-around'>
                <button type='submit' className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500">Aceptar</button>
                <button className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" onClick={() => props.setStockPopup(false)} >Cancelar</button>
            </div>
        </form>
    );
}




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


export const DeleteProductForm = (props) => {






    return (
        <form onSubmit={(event) => props.handleDeleteProductSubmit(event)} className=' w-96 relative -left-40 text-left justify-center flex flex-col gap-5 bg-gray-700 rounded-md md:w-96 md:m-16  md:px-8 md:py-12 m-0 p-4' >

            <h1 className='text-yellow-500 text-2xl'>Ingresar Código del producto:</h1>
            <input type="number" onChange={(e) => props.setFormContent({ ...props.formContent, deleteId: e.currentTarget.value })} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
            <div className='flex flex-row justify-around'>
                <button className='h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' type='submit'>Aceptar</button>
                <button className='h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500' onClick={() => props.setDeleteProductPopup(false)}>Cancelar</button>
            </div>
        </form>
    )
}

export const UpdatePriceForm = (props) => {




    return (
        <form onSubmit={(event) => props.handleUpdatePriceSubmit(event)} className=' w-96 relative -left-40 text-left justify-center flex flex-col gap-5 bg-gray-700 rounded-md md:w-96 md:m-16  md:px-8 md:py-12 m-0 p-4' >
            <input type="number" hidden name='id' value={props.popupContent.id} />
            <h1 className='text-yellow-500 text-2xl'>Actualizar precio de costo del producto:</h1>
            <p className='text-gray-200'>{props.popupContent.descripcion}</p>
            <input type="number" onChange={(e) => props.setFormContent({ ...props.formContent, precio: e.currentTarget.value })} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
            <div className='flex flex-row justify-around'>
                <button type='submit' className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500">Aceptar</button>
                <button className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" onClick={() => props.setUpdatePricePopup(false)} >Cancelar</button>
            </div>
        </form>
    );
}

export const UpdateModifierForm = (props) => {




    return (
        <form onSubmit={(event) => props.handleUpdateModifierSubmit(event)} className=' w-96 relative -left-40 text-left justify-center flex flex-col gap-5 bg-gray-700 rounded-md md:w-96 md:m-16  md:px-8 md:py-12 m-0 p-4' >
            <input type="number" hidden name='id' value={props.popupContent.id} />
            <h1 className='text-yellow-500 text-2xl'>Actualizar modificador del producto:</h1>
            <p className='text-gray-200'>{props.popupContent.descripcion}</p>
            <input type="number" onChange={(e) => props.setFormContent({ ...props.formContent, modificador: e.currentTarget.value })} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
            <div className='flex flex-row justify-around'>
                <button type='submit' className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500">Aceptar</button>
                <button className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" onClick={() => props.setUpdateModifierPopup(false)} >Cancelar</button>
            </div>
        </form>
    );
}
