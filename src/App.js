// import Test from './components/Test.js'
import Homepage from "./components/Homepage/Homepage";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import ProfessionPage from "./components/ProfessionPage/ProfessionPage";
import RecipePage from "./components/RecipePage/RecipePage";
import ItemPage from "./components/ItemPage/ItemPage";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const currentLocation = useLocation().pathname;

  return (
    <div className="App">
      <Header />
      {/* if we're at the default URL, load up the homepage! otherwise, load up whatever page we're on */}
      {currentLocation === "/" ? <Homepage /> : <Outlet />}
      <Footer />
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
