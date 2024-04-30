import { Outlet, useLocation } from "react-router-dom";
import LeftSideBar from "./components/leftSidebar/LeftSideBar";
import Navbar from "./components/navbar/Navbar";
import useStateManager from "./hooks/useStateManager";
import { useEffect } from "react";

const RootLayout = () => {

  // using state manager 
  const {isSideNavbarCollapse,setIsSideNavbarCollapse} = useStateManager()

  return (
    <div>
        <Navbar/>
      <LeftSideBar/>
      <div className={`bg-[#F6F6F7] ${isSideNavbarCollapse? "ml-[80px]": "ml-[250px]"} p-5`}>
      <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
