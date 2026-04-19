const Navbar = () =>{
    return <nav className=" shadow-[0_0_0_0.5px_rgba(255,255,255,0.2)] w-full h-17 flex justify-between items-center pr-8 te" >
                <div className="pl-8 text-white font-serif text-[18px] font-bold">M<span className="text-blue-500">.</span>Adrian</div>
                <div className="flex justify-evenly  w-100 font-sans uppercase text-[14px]">  
                <a href="#about" className="hidden sm:block text-gray-500  hover:text-blue-400">About</a>
                <a href="#skills" className="hidden sm:block text-gray-500 hover:text-blue-400">Skils</a>
                <a href="#projects" className="hidden sm:block text-gray-500 hover:text-blue-400 ">Projects</a>
                <a href="#contact" className="hidden sm:block text-gray-500 hover:text-blue-400">Contact</a>
                </div>
                    <a href="#contact" className="py-4 px-6 text-blue-400 border border-blue-400 flex items-center text-[12px] font-light h-4 hover:bg-blue-400 hover:text-white rounded-sm font-sans whitespace-nowrap sm:whitespace-normal">
                    HIRE ME</a>                  
        </nav>

}

export default Navbar;