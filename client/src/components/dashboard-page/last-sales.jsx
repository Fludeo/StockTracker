import { useState } from "react";




 export  const LastSales = (props)=>{
    const [ventas,setVentas] = useState(props.data)


    return(

        <table>
            <thead>
            <tr>
                <td>ID Venta</td>
                <td>Precio Total</td>
                <td>Ganancia</td>
                <td>Productos Vendidos</td>
            </tr>
            </thead>
            <tbody>
            {ventas.map(venta=> 
            <tr key={venta.id}>
                {console.log(JSON.stringify(venta))}
                <td>{venta.id}</td>
                <td>{venta.totalVenta}</td>
                <td>{venta.ganancia}</td>
                <td>{venta.listaProductos.length}</td>
            </tr>)}
            </tbody>
        </table>
    );

}