export const SimpleForm = (props) => {


  
    return (
        <form  className='relative overflow-auto  md:-left-48 self-center md:w-1/3 w-full text-left   flex flex-col  gap-5 bg-gray-700 rounded-md  md:m-16  md:px-8 md:p-12  p-6' >
           
            <h1 className='text-yellow-500 text-2xl'>{props.formTitle}</h1>
            <p className='text-gray-200 font-bold'>{(props.productInfo!==undefined)&&props.productInfo.descripcion}</p>
            {(props.inputType === "number") ?
                <input type="number"  onChange={(e)=>props.updateValue(e)} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
                : (props.inputType === "text") ?
                    <input type="text" onChange={(e)=>props.updateValue(e)} className=' w-20 rounded-md md:p-1 focus:outline-none border-2  focus:border-blue-500' />
                    : ""}
            <div className='flex flex-row justify-around'>
                <button type='button' className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" onClick={(e)=>{e.stopPropagation();props.handleSubmit(e)}}>Aceptar</button>
                <button type='button'className=" h-9 my-4 px-2 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" onClick={props.closePopup} >Cancelar</button>
            </div>
        </form>
    );
}