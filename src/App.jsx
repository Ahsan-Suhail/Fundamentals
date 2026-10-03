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
    <div className="lg:flex  gap-3 w-full h-screen  bg-black text-white overflow-auto" >

      <form onSubmit={(e)=>{
        submithandle(e)
      }} className=" gap-4 lg:w-1/2 flex flex-col  items-start p-4"  action="">


        
        <input value={title} onChange={(e)=>{settitle(e.target.value)}} className="font-semibold px-2 w-full h-15 bg-[#222]/65 border border-[#646464] rounded-2xl outline-none"  type="text"  placeholder="Enter Task"/>
        <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className="font-semibold py-2 px-2 w-full h-40 bg-[#222]/65 border border-[#646464] rounded-2xl outline-none"  type="text" placeholder="Description"/>
        <button className="font-extrabold active:scale-95 active:bg-gray-400/95 font-mono text-xl w-full h-12 bg-white/90 text-black rounded-2xl outline-none" >Submit</button>
        
      </form>

      <div className="border-l-0 border-t lg:border-l lg:border-t-0  lg:w-1/2 p-4 overflow-y-scroll ">

          <h1 className="font-mono font-semibold text-2xl bg-gray-600/40 p-2 ml-6 rounded-2xl w-32 flex justify-center">My Notes</h1>

          <div className=" flex gap-5 mt-7 flex-wrap  pl-5">

              {copy.map((elem, idx)=>{
                return <div key={idx} className=" flex flex-col justify-between  text-black font-mono w-43 h-55 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeTw1RQN_LwpuJcq39ft7rofo_ljuW5tNXe3zuDbCyQ&s=10')] rounded-2xl pt-3 pl-4 pr-5 pb-2 wrap-break-word  ">
                  <div>
                    <h3 className="font-semibold text-xl leading-5 mb-3">{elem.title}</h3>
                    <p className="font-mono text-gray-800">{elem.description}</p>
                  </div>
                  
                  <button key={idx} onClick={()=>{funcdel(idx)}} className="w-full h-6 active:scale-95 active:bg-red-800 bg-red-700 flex items-center justify-center rounded-md font-mono font-semibold text-sm ">Delete</button>
                </div>
              })}
              
              
              
          </div>

      </div>
      
      
      
      
    </div>
  )
}

export default App