import { LiaAirbnb } from "react-icons/lia";
import { IoGlobeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import './Navbar.css'
function Navbar(){
    return(
        <div className="flex border-2 border-none main-font cursor-pointer mt-2">
            <div className="flex text-xl font-bold ">
            <LiaAirbnb size="40"className=" text-[#e41d55e9]"/>
            <h3 className="mt-1 text-[#e41d55e9]">airbnb</h3>
            </div>
             <div>
                <ul className="flex space-x-10 ml-80 mt-1 ">
                    <li className="cursor-pointer subpixel-antialiased font-light hover:font-black">stays</li>
                    <li className=" cursor-pointer subpixel-antialiased font-light  hover:font-black">Experiences</li>
                    <li className="cursor-pointer subpixel-antialiased font-light hover:font-black">Online Experiences</li>
                </ul>
            </div>
            
            <div className="flex absolute right-20">
                <span className="mt-2 font-light mr-2">Airbnb your home</span>
                <IoGlobeOutline  size="20" className="mt-2 cursor-pointer"/>
            </div>
            <div>
            <FaRegUserCircle size="25" className="absolute right-10 mt-2 cursor-pointer"/>
            </div>
        </div>
    )
}
export default Navbar;