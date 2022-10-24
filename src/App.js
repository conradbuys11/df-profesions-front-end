// import Test from './components/Test.js'
import Homepage from './components/Homepage'
import Basics from './components/Basics';
import Professions from './components/Professions';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProfessionPage from './components/ProfessionPage';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/basics" element={<Basics />}/>
        <Route path="/professions" element={<Professions />} />
        <Route path="/professions/:name" element={<ProfessionPage />}/>
      </Routes>
    </div>
  );
    // <div className="App">
    //   <h1>Welcome to the DF Profession Project - Under Construction</h1>
    //   {/* < Homepage /> */}
    //   {/* < Basics /> */}
    //   <Professions />
    // </div>
}

export default App;
