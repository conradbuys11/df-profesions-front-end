import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage/Homepage";
import Basics from "./components/Basics/Basics";
import Professions from "./components/Professions";
import ProfessionPage from "./components/ProfessionPage/ProfessionPage";
import ItemPage from "./components/ItemPage/ItemPage";
import RecipePage from "./components/RecipePage/RecipePage";
import NotFoundPage from "./components/NotFoundPage";
import { checkFetchError } from "./Common";

const root = ReactDOM.createRoot(document.getElementById("root"));
const URL = "https://dragonflight-professions-api.onrender.com";

const fetchAllInfo = (baseURL, setState) => {
  //baseURL is either localhost:3001 or dragonflight-professions-api.onrender.com
  //setState is the hook function passed in to set the state to whatever we fetch
  //this... probably shouldn't be here, but rather in index.js or app or whatever
  fetch(`${baseURL}/getAllInfo`)
    .then((res) => checkFetchError(res))
    .then((data) => setState(data))
    .catch((e) => console.log("API call failed."));
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFoundPage />}>
      <Route path="homepage" element={<Homepage />} />
      <Route path="basics" element={<Basics />} />
      <Route path="professions" element={<Professions />} />
      <Route
        path="professions/:name"
        element={<ProfessionPage URL={URL} />}
        errorElement={<NotFoundPage />}
      />
      <Route
        path="items/:id"
        element={<ItemPage URL={URL} />}
        // loader={async ({ params }) => {
        //   fetch(`${URL}/items/${params.id}`)
        //     .then((res) => checkFetchError(res))
        //     .then((data) => data)
        //     .catch((e) => {
        //       console.log(e);
        //       return redirect("/oops");
        //     });
        // }}
      />
      <Route
        path="recipes/:id"
        element={
          <RecipePage
            URL={URL}
            // loader={async ({ params }) => {
            //   fetch(`${URL}/recipes/${params.id}`)
            //     .then((res) => checkFetchError(res))
            //     .then((data) => data)
            //     .catch((e) => {
            //       console.log(e);
            //       return redirect("/oops");
            //     });
            // }}
          />
        }
      />
      <Route path="oops" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
