import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Work from './Component/Work';
import Work1 from './Component/Work1';

import Home from './Component/Home';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        
        
       
         <Route exact path="/" element={<Home/>}></Route>
         <Route exact path="/Work" element={<Work />}></Route>
         <Route exact path="/WorkOne" element={<Work1 />}></Route>
    
      </Routes>
     </Router>
    </div>
  );
}

export default App;
