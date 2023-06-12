import './App.css';
import Home from "./components/Home";
import Details from './components/Details';
import { Routes, Route } from "react-router-dom";




function App() {

  

 

  return (
   
  

    <Routes>
      <Route path="/Details" element={<Details/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>

   
  
  
  );
}

export default App;

