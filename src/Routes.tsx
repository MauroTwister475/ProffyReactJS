import { Routes as Routers, Route } from "react-router-dom"

import { Home } from "./pages/Home";
import { Study } from "./pages/Study";
import { GiveClasses } from "./pages/GiveClasses";

export function Routes() {

  return (
    <Routers>
      <Route path="/" element={<Home />} /> 
      <Route path="/study/*" element={<Study />} /> 
      <Route path="/give_classes" element={<GiveClasses />} /> 
    </Routers>
  )
}
