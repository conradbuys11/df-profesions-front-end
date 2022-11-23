import React, { useRef } from "react";
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
import FinishingReagentsPage from "./components/FinishingReagentsPage/FinishingReagentsPage";
import FinishingReagentPage from "./components/FinishingReagentsPage/FinishingReagentPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const URL = "http://localhost:3001";
// const URL = "https://dragonflight-professions-api.onrender.com";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App URL={URL} />} errorElement={<NotFoundPage />}>
      <Route path="homepage" element={<Homepage />} />
      <Route path="basics" element={<Basics />} />
      <Route path="professions" element={<Professions />} />
      <Route path="professions/:name" element={<ProfessionPage URL={URL} />} />
      <Route path="items/:id" element={<ItemPage URL={URL} />} />
      <Route
        path="items/finishingreagents"
        element={<FinishingReagentsPage />}
      />
      <Route
        path="items/finishingreagents/:name"
        element={<FinishingReagentPage />}
      />
      <Route path="recipes/:id" element={<RecipePage URL={URL} />} />
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
