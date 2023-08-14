import { Route, Routes } from "react-router-dom";

import { ProductsContextProvider } from "./contexts/ProductsContext";
import { CheckOut } from "./pages/CheckOut";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </ProductsContextProvider>
  );
}
