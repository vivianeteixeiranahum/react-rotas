import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const RoutesRoot = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/" exact />
      <Route element={<Sobre/>} path="/sobre" />
      <Route element={<Usuario/>} path="/usuario" />
   </Routes> 
   </BrowserRouter>
    
  );
};

export default RoutesRoot;
