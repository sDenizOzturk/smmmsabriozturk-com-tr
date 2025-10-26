import Home from "./home/Home";
import Services from "./services/Services";
import Office from "./office/Office";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default function MultiPageRoutes() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/hizmetler"} element={<Services />} />
      <Route exact path={"/ofis"} element={<Office />} />
    </Routes>
  );
}
