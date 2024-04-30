import { useState } from "react";
import useStateManager from "../../hooks/useStateManager";
import SidebarItems from "./SidebarItems/SidebarItems";

const LeftSideBar = () => {
  // const [isMouseEnter,setIsMouseEnter] = useState(false)
  // using state manager
  const { isSideNavbarCollapse,setIsSideNavbarCollapse } = useStateManager();


  return (
    <div
    onMouseEnter={()=>setIsSideNavbarCollapse(false)}
    onMouseLeave={()=>setIsSideNavbarCollapse(true)}
      className={`fixed px-7 pb-5 border-r ${
        isSideNavbarCollapse ? "w-[80px]" : "w-[250px]"
      }  min-h-[100vh] max-h-[100vh] overflow-hidden overflow-y-auto`}
    >
      {/* all sidebar items  */}
      <SidebarItems />
    </div>
  );
};

export default LeftSideBar;
