import React,{useState} from 'react'

const Navbar = () => {
    const [toggle,setToggle]=useState('hidden lg:visible')
    const [align,setAlign] = useState('flex-row-reverse')
    const[disp,setDisp]=useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
  <div className="flex items-center flex-shrink-0 text-black mr-6">
   <a href="/"><span className="font-semibold text-xl md:text-2xl tracking-tight">Account Aggregator</span></a>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white" onClick={(e)=>{
        if(disp===false){
        setToggle('block lg:visible');setDisp(true);
        setAlign('justify-center items-center')
    }
        else{
         setToggle('hidden lg:visible')
         setAlign('flex-row-reverse')
         setDisp(false);
        }
    }}>
     <img src="hamburg.png"></img>
    </button>
  </div>
  <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${toggle}`}>
    <div className={`text-sm lg:flex-grow flex gap-3 md:gap-6 md:text-xl ${align}`}>
    <span>
      <a href="/userRegister" className="inline mt-4 text-md md:text-xl lg:mt-0 text-black hover:underline">
      User Register
      </a>
      </span>
      <span>
      <a href="/bankRegister" className="inline mt-4 text-md md:text-xl lg:mt-0 text-black hover:underline">
      Bank Register
      </a>
      </span>
      <span>
      <a href="/userLogin" className="inline mt-4 text-md md:text-xl  lg:mt-0 text-black hover:underline">
      User Login
      </a>
      </span>
      <span>
      <a href="/bankLogin" className="inline mt-4 text-md md:text-xl  lg:mt-0 text-black hover:underline">
      Bank Login
      </a>
      </span>
    </div>
   
  </div>
</nav>
  )
}

export default Navbar