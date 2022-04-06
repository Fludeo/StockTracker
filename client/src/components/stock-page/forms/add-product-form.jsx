


export const AddProductForm = (props) => {

    


    return (<form className='relative overflow-auto  self-center md:w-1/3 w-full text-left   flex flex-col  gap-5 bg-gray-700 rounded-md  md:m-16  md:px-8 md:p-12  p-6'>
            <h1 className='text-yellow-500 text-xl'>Agregar producto:</h1>
           
            <label className='text-yellow-500'>Descripción</label>
            <input type='text' className='  rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' 
            onChange={(e) => {props.description(e)}}></input>
            <label className='text-yellow-500'>Precio de costo</label>
            <input step="any" type='number' min="1" className=' w-28 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' 
                onChange={(e) => {props.price(e)}}>
            </input>
            <div className='container  justify-around flex  flex-row'>
                <button className='h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500'  type="button" onClick={(e) => props.handleSubmit(e)}>Aceptar</button>
                <button className='h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500'  type="button" onClick={props.closePopup}>Cancelar</button>
            </div>
        </form>);
}