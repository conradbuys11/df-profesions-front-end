import ApiNavigation from "../ApiNavigation";
import { useEffect, useState } from "react";
import PathRender from "./PathRender";
import TempLoad from "./TempLoad";

const ApiNavComponent = (props) => {
  // props: db

  const [apiNavigation, setApiNav] = useState(null);

  useEffect(() => {
    if (props.db) {
      setApiNav(ApiNavigation(props.db));
    }
  }, [props.db]);

  useEffect(() => {
    console.log("ApiNavComponent Mounted");
  });

  return apiNavigation ? (
    <PathRender db={props.db} apiNavigation={apiNavigation} />
  ) : (
    <TempLoad />
  );
};

export default ApiNavComponent;
