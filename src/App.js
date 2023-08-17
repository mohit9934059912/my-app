
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React ,{useState} from 'react';
import Alert from './components/Alert';
//import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';


//let name ="mohit";
function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(" ");
      }, 1500);
  }
 // const removeBodyClasses=()=>{
    //document.body.classList.remove('bg-light')
   // document.body.classList.remove('bg-danger')
   // document.body.classList.remove('bg-success')
   // document.body.classList.remove('bg-warning')

 // }
  const toggleMode = ()=>{
   // removeBodyClasses();
   // document.body.classList.add('bg-'+cls)
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("Dark Mode has been Enabled","Success:");
      
      /*setInterval(()=>{
        document.title="Install the TextUtility";
      },2000);
      setInterval(()=>{
        document.title="TextUtil is Amazing Mode";
      },1500);*/
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode has been Enabled","Success:");
      
      
    }
  }
  return (
    <>
  
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  aboutText="About Us"/*aboutText="About TextUtils"*//>
   <Alert alert={alert}/>
   <div className="container my-3">
    {/*<Router>
   <Routes>
          <Route path="/about" element={<About />} />
            
          
          <Route path="/" element = {<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" toggleMode={toggleMode}  mode={mode} />} />
              
        
  </Routes>
  </Router>*/}
  <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" toggleMode={toggleMode}  mode={mode} />
   </div>
   
    </>
    
  );
}

export default App;
