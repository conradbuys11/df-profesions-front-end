import ApiNavigation from "../ApiNavigation";
import { useEffect, useState } from "react";
import PathRender from "./PathRender";
import TempLoad from "./TempLoad";
import Header from "./Header";
import Footer from "./Footer";

const ApiNavComponent = (props) => {
  // props: db

  const [apiNavigation, setApiNav] = useState(null);

  useEffect(() => {
    if (props.db) {
      setApiNav(ApiNavigation(props.db));
    }
  }, [props.db]);

  // useEffect(() => {
  //   console.log("ApiNavComponent Mounted");
  // });

  return apiNavigation ? (
    <>
      <Header db={props.db} apiNavigation={apiNavigation} />
      <PathRender db={props.db} apiNavigation={apiNavigation} />
      <Footer />
    </>
  ) : (
    <TempLoad />
  );
};

export default ApiNavComponent;
