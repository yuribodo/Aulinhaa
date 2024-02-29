import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNavbar = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1>APP.</h1>
         <ul className='md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Equipe</li>
            <li className='p-4'>Recursos</li>
            <li className='p-4'>Sobre</li>
            <li className='p-4'>Contato</li>
         </ul>
         <div onClick={handleNavbar} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
         </div>
         <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
            <ul className='uppercase p-4'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Equipe</li>
                <li className='p-4'>Recursos</li>
                <li className='p-4'>Sobre</li>
                <li className='p-4'>Contato</li>
            </ul>
         </div>
    </div>
  )
}

export default Navbar