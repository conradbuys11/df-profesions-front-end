// import Test from './components/Test.js'
import Homepage from "./components/Homepage/Homepage";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { checkFetchError, isObjectEmpty } from "./Common";
import ApiNavComponent from "./components/ApiNavComponent";
import TempLoad from "./components/TempLoad";

const App = (props) => {
  // ALL OUR DB DATA. SET DURING USEEFFECT
  const [dbRefState, setDb] = useState({});

  useEffect(() => {
    fetch(`${props.URL}/getAllInfo`)
      .then((res) => checkFetchError(res))
      .then((data) => setDb(data))
      .catch((e) => {
        setDb(null);
        console.log("API call failed. Refresh the page.");
      });
    console.log("App rendered");
  }, [props.URL]);

  useEffect(() => {
    if (!isObjectEmpty(dbRefState)) {
      console.log(`DB Promise: ${Object.keys(dbRefState)}`);
    }
  }, [dbRefState]);

  return (
    <div className="App">
      <Header />
      {isObjectEmpty(dbRefState) ? (
        <TempLoad />
      ) : (
        <ApiNavComponent db={dbRefState} />
      )}
      <Footer />
    </div>
  );
  // <div className="App">
  //   <h1>Welcome to the DF Profession Project - Under Construction</h1>
  //   {/* < Homepage /> */}
  //   {/* < Basics /> */}
  //   <Professions />
  // </div>
};

export default App;
