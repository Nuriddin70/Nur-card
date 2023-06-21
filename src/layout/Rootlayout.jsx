import { NavLink, Outlet } from "react-router-dom";

import React from "react";

function Rootlayout() {
  return (
    <>
      <nav>navbar</nav>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Rootlayout;
