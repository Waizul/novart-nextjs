import Link from "next/link";
import { menuData } from "../data/menuData";
import {CgMenuRight} from 'react-icons/cg'

const Navbar = ({ open, setOpen }) => {
  return (
    <div className="absolute z-20 bg-transparent  h-16 w-full grid grid-cols-4 items-center text-white">
      <div className="col-span-2 md:col-span-1 uppercase font-semibold cursor-pointer text-green-500 pl-5 md:pl-10">
        <Link href="/" passHref>
          Novart
        </Link>
      </div>
      <div className="hidden md:block h-full col-span-2">
        <ul className="h-full flex items-center justify-center gap-10 uppercase bg-transparent">
          {menuData.map((menu, index) => (
            <>
              <Link href={menu.path} passHref key={index}>
                <li className="cursor-pointer">{menu.title}</li>
              </Link>
            </>
          ))}
        </ul>
      </div>
      <div className="md:hidden col-span-2 md:col-span-1 justify-self-end pr-5">
      <CgMenuRight className="text-2xl cursor-pointer" onClick={()=>setOpen(!open)}  />
      </div>
    </div>
  );
};

export default Navbar;
