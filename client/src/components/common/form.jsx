



export const AddStockForm = (props) => {




    return (
        <form onSubmit={(event) => props.handleStockSubmit(event)} className=' w-96 relative -left-40 text-left justify-center flex flex-col gap-5 bg-gray-800 rounded-md md:w-96 md:m-16  md:px-8 md:py-12 m-0 p-4' >
            <input type="number" hidden name='id' value={props.popupContent.id} />
            <h1 className='text-yellow-500 text-2xl'>Agregar stock de producto:</h1>
            <p className='text-gray-200'>{props.popupContent.descripcion}</p>
            <input name='nuevoStock' type="number" onChange={(e) => props.setFormContent(e.currentTarget.value)} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
            <div className='flex flex-row justify-around'>
                <button type='submit' className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500">Aceptar</button> <button className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" onClick={() => props.setStockPopup(false)} >Cancelar</button>
            </div>
        </form>
    );
}