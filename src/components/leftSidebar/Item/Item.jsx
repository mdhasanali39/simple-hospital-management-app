import { useState } from "react";
import { NavLink } from "react-router-dom";
import useStateManager from "../../../hooks/useStateManager";
import './item.css'

const Item = ({ label, path, icon:Icon }) => {
  // state for control link style
  const [isActive, setIsActive] = useState(false);
  // using state manager
  const { isSideNavbarCollapse } = useStateManager();

//   const Icon = icon && icon

  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) =>
        isActive
          ? "flex items-center gap-3 font-medium text-blue-700"
          : isPending
          ? "pending"
          : "flex items-center gap-3 font-medium text-gray-500 hover:text-blue-600"
      }
    >
      {Icon && <Icon size={20} />}
      {isSideNavbarCollapse ? "" : label}
    </NavLink>
  );
};

export default Item;
