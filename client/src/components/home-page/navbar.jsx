import { Link } from 'react-router-dom'
import { LinkWithIcon } from '../common/linkicon';


export const Navbar = (props) => {




  const links = [
    { text: 'Dashboard', url: '/home/dashboard', icon: { color: '#6B7280', type: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' } },
    { text: 'Stock', url: '/home/stock', icon: { color: '#6B7280', type: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' } },
    //{ text: 'Clientes', url: '/logged/clientes', icon: { color: '#6B7280', type: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' } },
   // { text: 'Salir', url: '/logged/logout', icon: { color: '#6B7280', type: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' } },
  ]



  return (

    <nav className=' bg-gray-800 md:w-1/6  md:h-screen flex md:gap-6 flex-col w-full h-1/6'>
      <div className='invisible md:visible md:p-6 w-full h-0   justify-center flex flex-row  '>


        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#F59E0B">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>



        {/* <p className='text-yellow-500 font-bold '>My<span>Logo</span></p> */}

      </div>
      <div className='w-full '>
        <ul className=' justify-around text-yellow-400 flex flex-row md:flex-col   gap-4 '>

          {links.map((link) => (<li key={link.text}><LinkWithIcon url={link.url} text={link.text} icon={link.icon}></LinkWithIcon> </li>))}

        </ul>
      </div>


    </nav>);
}
