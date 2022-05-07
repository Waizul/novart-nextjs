import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { menuData } from './../data/menuData';
import Link from 'next/link';

const Menu = ({open, setOpen}) => {
  return (
    <div className={open ? 'fixed z-20 right-0 top-0 bg-slate-900 h-full w-full opacity-100 transiion-all duration-500 ease-in-out ' : 'opacity-0 -top-full transition-none'} onClick={()=>setOpen(!open)} >
      <div className='absolute top-5 right-5'><AiOutlineClose className='text-white text-2xl font-bold cursor-pointer' onClick={()=>setOpen(!open)} /></div>
      <ul className="h-full flex flex-col text-left items-center justify-center gap-10 uppercase text-white">
        {menuData.map((menu, index) => (
          <>
          <Link href={menu.path} passHref key={index}>
            <li className="cursor-pointer w-10" onClick={()=>setOpen(!open)}>{menu.title}</li>
          </Link>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Menu