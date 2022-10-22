// import Test from './components/Test.js'
import Homepage from './components/Homepage.js'
import Basics from './components/Basics.js';
import Professions from './components/Professions.js';
import './App.css';
import {Route, Routes} from 'react-router-dom';

function App() {

  return ( <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/basics" element={<Basics />}/>
    <Route path="/professions" element={<Professions />} />
  </Routes>
  );
    // <div className="App">
    //   <h1>Welcome to the DF Profession Project - Under Construction</h1>
    //   {/* < Homepage /> */}
    //   {/* < Basics /> */}
    //   <Professions />
    // </div>
}

export default App;
