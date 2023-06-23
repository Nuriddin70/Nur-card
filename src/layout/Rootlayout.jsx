import { NavLink, Outlet } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

function Rootlayout() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar">
            <NavLink to="/">Shop</NavLink>
            <NavLink to="/cart">
              <ShoppingCart size={32} />
            </NavLink>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Rootlayout;
