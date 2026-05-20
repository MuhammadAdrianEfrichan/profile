import image from "../../../assets/hero/hero.jpeg"
const Hero = ()=>{
  return <div className="container mx-auto">
        <div className="w-full h-230 border">
          <div className="w-full h-full bg-black relative"><img src={image} alt="Hero" className="h-full w-full object-cover opacity-30" />
          <div className="px-6 absolute top-70 text-white text-[70px] font-serif text-base/20"><div className="text-[50px]">HMJ-IF</div>WE ARE <div className="text-[90px] text-blue-400 ">FAMILY.</div>
            </div>
            <p className="px-6 w-100 absolute top-150 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda enim dolorum deleniti obcaecati nulla laboriosam sit qui quia molestiae.</p>
          </div>
        
        </div>
  </div>
}

export default Hero;