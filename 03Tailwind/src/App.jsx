import './App.css'
import Profiles from './components/Profiles'
import Navbar from './components/Navbar'  



function App() {
      return (
    <>
    {/* <Navbar /> */}
      <h1 className='bg-blue-400 p-4 font-bold text-2xl mt-12 text-center   text-black rounded-xl mb-12'>tailwindcss configure</h1>
        <Profiles username = "Beautifull house " bath ='3' bed = '5'   />
      {/*<Profiles username="normal house" /> */}
    </>
  )
}

export default App
