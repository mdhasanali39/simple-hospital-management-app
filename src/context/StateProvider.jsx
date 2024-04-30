import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const StateContext = createContext(null);
const StateProvider = ({ children }) => {
  const [isSideNavbarCollapse, setIsSideNavbarCollapse] = useState(false);

  const states = {
    isSideNavbarCollapse,
    setIsSideNavbarCollapse,
  };

  return (
    <StateContext.Provider value={states}>{children}</StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node,
};

export default StateProvider;
