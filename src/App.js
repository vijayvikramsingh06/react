
import { useState } from 'react/cjs/react.development';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import Alert from './components/Alert';
 import About from './components/About'

 import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  Link
} from "react-router-dom";


function App() {

  const[mode, setMode]=useState('light');
  const[alert,setAlert]=useState(null)


  const showAlert=(message,type)=> { 
  setAlert({
    msg:message,
    type:type
  })
 setTimeout(()=>{
   setAlert(null);
 },5000);

  }

  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor="darkblue"
        showAlert("Dark mode enabled","success")
        

    }
    else{
         setMode('light')
         document.body.style.backgroundColor="white"
         showAlert("Light mode enabled","success")

    }

    
}
  return (
     <>
    <Router>
              <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
              <Alert alert={alert}/>
            
     
              <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
         
          <Route exact path="/">
          <TextForm showAlert={showAlert} head="Write Your Text To Analyze" mode={mode}/>
            
          </Route>
        
        </Switch>
                </div>
                </Router>
               
            
              

     </>

   
  );
}

export default App;


/// rupa 