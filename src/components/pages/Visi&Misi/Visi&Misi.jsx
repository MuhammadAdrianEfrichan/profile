import img from "../../../assets/hero/hero.jpeg"

const Visi = ()=>{
    return <div className="mt-20 w-full h-auto border bg-back py-15">
        <img src={img} alt="" className="mask-t-from-50% mask-b-from-30% w-full h-auto opacity-70 object-cover lg:opacity-50 lg:h-150"/>
        <div className="px-6 mx-auto container lg:flex mt-5 lg:justify-around">
            <div className="lg:w-100"><div className="text-gray-300 text-[35px] underline text-center ">Visi</div>
        <p className="text-gray-400 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae architecto at quia harum atque. Laboriosam sunt quis deleniti esse tempore.</p>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-100">
            <div className="text-gray-300 text-[35px] underline text-center ">Misi</div>
            <p className="text-gray-400 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae architecto at quia harum atque. Laboriosam sunt quis deleniti esse tempore.</p>
        </div>
        </div>
        
        
    </div>
}

export default Visi;