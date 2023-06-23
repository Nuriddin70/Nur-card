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



function App() {
  const routes = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Rootlayout/>}>
    <Route index element={<Home />} />
    <Route path="cart" element={<Cart/>} />
  </Route>));

  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
