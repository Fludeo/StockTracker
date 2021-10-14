



export const Section = (props)=>{




        function handleAddTableRow(){

        }

    return(
    <section className= 'container  flex flex-col'>
            <table  className ='table-fixed divide-y divide-gray-200'>
                <thead className= "bg-gray-50 ">
                <tr>
                <th className='w-1/2'>Producto</th>
                <th className='w-1/2'>Cant a agregar</th>
                </tr>
                </thead>
                <tbody className =' divide-y divide-gray-200'>
                <tr>
                        <td> <select  className='px-6 py-4 text-xs w-56'><option selected value=""></option>{props.stock.map(item => <option value ={item.id}>{item.descripcion}</option>)}</select></td>
                    <td> <input className='w-10' type="number" /></td>
                </tr>
                </tbody>
            </table>
            <div className='container justify-evenly flex flex-row'>
            <button className=" h-9 my-6 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" >Agregar</button>
            <button className=" h-9 my-6 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" >Remover</button>
            </div>
    </section>)
}