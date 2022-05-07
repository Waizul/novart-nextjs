import {useState} from "react"
import Navbar from "./Navbar"
import Menu from './Menu';

const Layout = ({children}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="mx-10">
    <Navbar open={open} setOpen={setOpen} />
    <Menu open={open} setOpen={setOpen} />
    {children}
    </div>
  )
}

export default Layout