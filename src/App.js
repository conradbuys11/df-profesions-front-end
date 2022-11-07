// import Test from './components/Test.js'
import Homepage from './components/Homepage/Homepage'
import Basics from './components/Basics/Basics';
import Professions from './components/Professions';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProfessionPage from './components/ProfessionPage/ProfessionPage';
import RecipePage from './components/RecipePage/RecipePage'
import ItemPage from './components/ItemPage/ItemPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { createContext } from 'react';

function App() {

  const Context = createContext('http://localhost:3001');

  return (
    <div className="App">
      <Context.Provider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/basics" element={<Basics />}/>
          <Route path="/professions" element={<Professions />} />
          <Route path="/professions/:name" element={<ProfessionPage />}/>
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
        </Routes>
        <Footer />
      </Context.Provider>
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
