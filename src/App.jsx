import { useState } from "react"


const App = () => {

  const [title,settitle] = useState('')
  const [description,setdescription] = useState('')
  const [copy, setcopy] = useState([])


  const submithandle = (e)=>{
      e.preventDefault();


      const cop = [...copy]
      cop.push({title, description})
      setcopy(cop)
      settitle('');
      setdescription('');
  }
  
  const funcdel = (e)=>{
      const newdel= [...copy]
      newdel.splice(e,1)
      setcopy(newdel) 
      settitle('');
      setdescription('');
  }

  return (
    <div className="lg:flex  gap-3 w-full h-screen items-stretch bg-black text-white overflow-auto" >

      <form onSubmit={(e)=>{
        submithandle(e)
      }} className=" gap-4 lg:w-1/2 flex flex-col  items-start p-4"  action="">


        
        <input value={title} onChange={(e)=>{settitle(e.target.value)}} className="font-semibold px-2 w-full h-15 bg-[#222]/65 border border-[#646464] rounded-2xl outline-none"  type="text"  placeholder="Enter Task"/>
        <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className="font-semibold py-2 px-2 w-full h-40 bg-[#222]/65 border border-[#646464] rounded-2xl outline-none"  type="text" placeholder="Description"/>
        <button className="font-extrabold active:scale-95 active:bg-gray-400/95 font-mono text-xl w-full h-12 bg-white/90 text-black rounded-2xl outline-none" >Submit</button>
        
      </form>

      <div className="border-l-0 border-t lg:border-l lg:border-t-0  lg:w-1/2 p-4 overflow-y-scroll ">

          <h1 className="font-mono font-semibold text-sm lg:text-2xl bg-gray-600/40 p-2 ml-6 rounded-2xl w-25 lg:w-32 flex justify-center">My Notes</h1>

          <div className=" flex gap-4 mt-7 flex-wrap  pl-5">

              {copy.map((elem, idx)=>{
                return <div key={idx} className="  flex flex-col justify-between text-black font-mono p-2 w-38 h-55 lg:w-43 lg:h-55 bg-cover  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeTw1RQN_LwpuJcq39ft7rofo_ljuW5tNXe3zuDbCyQ&s=10')] rounded-2xl pt-3 pl-4 pr-5 pb-2 wrap-break-word  ">
                  <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-black/30 scrollbar-track-transparent">
                    <h3 className="font-semibold text-xl font-mono leading-5 mb-3  ">{elem.title}</h3>
                    <p className=" text-sm font-mono tracking- text-gray-800 max-h-36 ">{elem.description}</p>
                    
                  </div>

                  <button onClick={() => funcdel(idx)}className="w-full mb-2 h-6 active:scale-95 active:bg-red-800 bg-red-700 flex items-center justify-center rounded-md  font-mono font-semibold text-sm">Delete</button>
                
                </div>
              })}
              
              
              
          </div>

      </div>
      
      
      
      
    </div>
  )
}

export default App
