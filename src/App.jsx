import "./App.css";

// react-router-dom
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/shop/Home";
import Cart from "./pages/cart/Cart";
import ShopContextProvider from "./context/shopContext";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <ShopContextProvider>
        <RouterProvider router={routes} />
      </ShopContextProvider>
    </div>
  );
}

export default App;
