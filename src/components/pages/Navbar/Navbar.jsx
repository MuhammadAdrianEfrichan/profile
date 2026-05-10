import logo from "../../../assets/logo/logo.png"

const Navbar = () =>{
    return <nav className="bg-black/ absolute z-10 w-full h-17 flex justify-between items-center pr-8 px-6" >
                <img src={logo} alt="" className="w-20"/>
                <div className="flex justify-evenly  w-100 font-sans uppercase text-[14px]">  
                <a href="#about" className="hidden sm:block text-gray-400  hover:text-blue-400">About Us</a>
                <a href="#skills" className=" hidden sm:block text-gray-400 hover:text-blue-400">Skils</a>
                <a href="#projects" className="hidden sm:block text-gray-400 hover:text-blue-400 ">Projects</a>
                <a href="#contact" className="hidden sm:block text-gray-400 hover:text-blue-400">Contact</a>
                </div>
                    <a href="#contact" className="py-4 px-6 text-blue-400 border border-blue-400 flex items-center text-[12px] font-light h-4 hover:bg-blue-400 hover:text-white rounded-sm font-sans whitespace-nowrap sm:whitespace-normal">
                    </a>                  
        </nav>

}

export default Navbar;