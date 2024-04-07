import { useState } from "react";
import Links from "../Links/Links";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "404", path: "/404" }
    ];


    return (
        <nav>
            <div className="text-4xl md:hidden bg-gray-100 text-black p-4" onClick={()=> setOpen(!open)}>
            {
                !open? <BiMenu className="bg-gray-300 p-1"/> : <RxCross2 className="bg-gray-300 p-1"/>
            }
            </div>
            <ul className={`md:flex absolute md:static items-center duration-1000 bg-yellow-400 text-black px-6 space-y-3 ml-4
            ${open ? 'top-16': '-top-60'}
            `}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;