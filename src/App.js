import React from "react";
// import Home from "./Components/routes/home/home.component";
import Home from "./routes/home/home.component";
// import Navigation from "./Components/routes/navigation/navigation.component";
import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <h1>This is a shop page</h1>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
