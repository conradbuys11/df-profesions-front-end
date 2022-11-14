import ApiNavigation from "../ApiNavigation";
import { useEffect } from "react";
import PathRender from "./PathRender";

const ApiNavComponent = (props) => {
  // props: db

  const apiNavigation = ApiNavigation(props.db);

  useEffect(() => {
    console.log(`ApiNavComponent updated.`);
  });

  return <PathRender db={props.db} apiNavigation={apiNavigation} />;
};

export default ApiNavComponent;
