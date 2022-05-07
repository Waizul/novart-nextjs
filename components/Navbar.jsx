import Link from "next/link";
import { menuData } from "../data/menuData";
import {CgMenuRight} from 'react-icons/cg'

const Navbar = ({ open, setOpen }) => {
  return (
    <div className="h-16 w-full grid grid-cols-4 items-center">
      <div className="col-span-2 md:col-span-1 uppercase font-semibold cursor-pointer text-green-500">
        <Link href="/" passHref>
          Novart
        </Link>
      </div>
      <div className="hidden md:block h-full col-span-2">
        <ul className="h-full flex items-center justify-center gap-10 uppercase">
          {menuData.map((menu, index) => (
            <>
              <Link href={menu.path} passHref key={index}>
                <li className="cursor-pointer">{menu.title}</li>
              </Link>
            </>
          ))}
        </ul>
      </div>
      <div className="md:hidden col-span-2 md:col-span-1 justify-self-end">
      <CgMenuRight className="text-2xl cursor-pointer" onClick={()=>setOpen(!open)}  />
      </div>
    </div>
  );
};

export default Navbar;
