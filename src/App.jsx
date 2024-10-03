import React from "react";
import Products from "./pages/Products";
import Appbar from "./Components/Appbar";

function App() {
  return (
    <>
      <div className=" px-5 ">
        <Appbar></Appbar>
        <Products></Products>
      </div>
    </>
  );
}

export default App;
