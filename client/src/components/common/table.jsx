

export const Table = (props)=>{

  

return(
    <table className=" divide-y divide-gray-200 ">
        <thead className="bg-gray-50  ">
          <tr className='text-gray-500'> {props.heads.map(head=><th className='px-6 py-3 text-left  text-xs font-medium text-gray-500 uppercase' key={head}>{head}</th>)}</tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
        {props.tableContent.map(content=><tr className=''><td className=' px-6 py-4 text-xs'key={content.id}>{content.id}</td><td key={content.descripcion}>{content.descripcion}</td><td className='text-right' key={content.precioCosto}>{Intl.NumberFormat("de-DE").format(content.precioCosto)}</td></tr>)}
        </tbody>
    </table>)

}