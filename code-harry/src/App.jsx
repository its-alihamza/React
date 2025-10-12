import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, {useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

const [Mode, setmode] = useState('light')
   const toggleMode = () => {
      if(Mode !== 'dark')
      {
        setmode('dark')
        document.body.style.backgroundColor = '#042743';
        //ShowAlert("Dark Mode is Enabled","success")
      }
  else if(Mode !=='light'){
        setmode('light');
         document.body.style.backgroundColor = 'white';
        // ShowAlert("Light Mode is Enabled","success")
      }
      else{
        setmode('pink')
        document.body.style.backgroundColor = '#FFC0CB';
        // ShowAlert("Light Mode is Enabled","success")
      }
  

    }
    //alert state
    const [alert, setAlert] = useState(null);
    const ShowAlert = (message, type) => {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
  return (
    <>  
<Router>
<Navbar title="TextUtlis" mode={Mode} toggleMode = {toggleMode}/>
<Alert alert = {alert} />
<div className='container my-3'>
        <Switch>
        
          <Route path="/">
<TextForm  heading = 'Enter text to analyse ' mode={Mode} showAlert = {ShowAlert}/>
          </Route>
            {/* <Route path="/About">
            <About />
          </Route> */}
        </Switch>
</div>
    </Router>
</>
  )
}

export default App
