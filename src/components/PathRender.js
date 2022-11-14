import { useLocation } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const PathRender = (props) => {
  // props: db, apiNavigation

  // will be our current URL location. ie "/" or "/professions"
  const currentLocation = useLocation().pathname;

  return (
    <>
      {currentLocation === "/" ? (
        <Homepage />
      ) : (
        <Outlet context={[props.db, props.apiNavigation]} />
      )}
    </>
  );
};

export default PathRender;
