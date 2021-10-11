import{Link} from 'react-router-dom'


export  const Navbar = (props) => {



    return(
    
      <nav className=' bg-gray-700 w-screen p-4 flex flex-col gap-3 md:flex-row'>
   <div className='container   justify-center md:justify-evenly flex flex-row md:w-1/2 '>
   
      
    <p className='text-yellow-500 md:ml-20'>My<span>Logo</span></p>
   
  </div>
  <div className=' container justify-start md:justify-around w-1/2 flex flex-row'> 
    <ul className='font-bold text-yellow-500 flex flex-col  md:flex-row gap-4 md:mr-36'>
  
          {props.links.map((link)=>(<li key={link.link}><Link to ={link.url}>{link.link}</Link> </li>))}
      
    </ul>
    </div>

     
    </nav>);
}