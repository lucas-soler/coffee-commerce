import { Route, Routes } from "react-router-dom";

import { CheckOut } from "./pages/CheckOut";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}
