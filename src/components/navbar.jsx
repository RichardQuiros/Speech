import React, {Fragment,useState} from 'react'
import {
    Link
  } from "react-router-dom";
const Nav = ()=>{
    const [menu,setMenu] = useState(false)
    const link= (to,title)=>(
        <Link to={to}><button className='w-auto border-b-4 border-blue-1000 hover:border-white rounded transition duration-150 ease-in-out focus:outline-none' ><span className='font-medium'>{title}</span></button></Link>
        )
    return(
        <Fragment>
            <div className='grid grid-cols-4 md:grid-cols-5 container w-full md:w-1/2 p-1'>
            <div className='cols-span-2 font-medium text-lg transform scale-90 cursor-pointer hover:scale-100 transition duration-150 ease-in-out '><Link to='/'>Speech</Link></div>
            <div><button onClick={()=>setMenu(!menu)} className='w-auto font-medium focus:outline-none border-b-4 border-blue-1000 hover:border-white rounded transition duration-150 ease-in-out' href="#null">temas</button>
            {
            menu ?
            <div className='absolute expand  w-64 h-20 z-20' onMouseLeave={() => setMenu(false)}>
                <div className='absolute p-3  h-full bg-white text-black shadow-lg'>
                    <ul>
                        <li>Temas:</li>
                        <li className='my-4'><Link to='/estructuraDeDatosTemas'>Estructura de datos</Link></li>
                    </ul>
                </div>
            </div> 
            : null
            }</div>
            {link('/nosotros','nosotros')}
            <a  href='https://github.com/' class="im im-github transform scale-100 hover:scale-110 transition duration-150 ease-in-out"> </a>
            </div>
        </Fragment>
    )
}

export default Nav