import React from 'react'
import { menuData } from './../data/menuData';
import Link from 'next/link';

const Menu = ({open, setOpen}) => {
  return (
    <div className={open ? 'fixed right-0 top-16 h-screen w-full' : 'hidden'}>
      <ul className="h-full flex flex-col text-left items-center justify-center gap-10 uppercase ">
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