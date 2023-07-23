import React from "react";
import { Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div style={{ backgroundColor: "#00ff00" }}>Nav</div>
      <Outlet />
    </>
  );
};

export default Nav;
