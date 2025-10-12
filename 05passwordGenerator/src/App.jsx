import { useState, useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
 const [length, setLength] = useState(8);
  const [numberAllow, setNumber] = useState(false);
   const [charAllow, setChar] = useState(false);
    const [password, setPassword] = useState("");
// useRef

const passwordRef = useRef(null)
    const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllow) str += "0123456789";
      if (charAllow) str += "!#$%^&*()~[]{}|`";
      for (let i = 1; i <=length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    }, [length, numberAllow, charAllow, setPassword]);
    useEffect(()=>{passwordGenerator()}, [length,numberAllow, charAllow, passwordGenerator]);
    const copyPass = useCallback(() =>{
    passwordRef.current?.select();


        window.navigator.clipboard.writeText(password);
  
    },[password])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-center my-8 text-orange-500 bg-gray-300">
    PASSWORD GENERATOR
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white '
        ref={passwordRef} placeholder='password' readOnly  />
        <button className='outline-none cursor-copy bg-blue-500 hover:bg-blue-800 hover:translate-x-1 text-white px-3 py-0.5 shrink-0' onClick={copyPass}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
        <input type="range"
        min={6}
        max={100} value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}} />
        <label htmlFor="length">length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" className='cursor-pointer' defaultChecked={numberAllow}
        id="Numberinput"
        onChange={()=>{
          setNumber((prev) => !prev)
        }} />
        <label htmlFor="">Number</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" className='cursor-pointer' defaultChecked={charAllow}
        id="CharInput"
        onChange={()=>{
          setChar((prev) => !prev)
        }} />
        <label htmlFor="">Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
