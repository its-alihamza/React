import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("black")
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "red" }} onClick={() => { setColor("red") }}>
            red
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "green" }} onClick={() => { setColor("green") }}>
            green
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "blue" }} onClick={() => { setColor("blue") }}>
            blue
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "yellow" }} onClick={() => { setColor("yellow") }}>
            yellow
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "purple" }} onClick={() => { setColor("purple") }}>
            purple
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "pink" }} onClick={() => { setColor("pink") }}>
            pink
          </button>
           <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "brown" }} onClick={() => { setColor("brown") }}>
            brown
          </button>
           <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "olive" }} onClick={() => { setColor("olive") }}>
            olive
          </button>
           <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "aqua" }} onClick={() => { setColor("aqua") }}>
            Aqua
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App