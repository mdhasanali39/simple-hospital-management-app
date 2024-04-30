import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const StateContext = createContext(null);
const StateProvider = ({ children }) => {
  // for navbar expand & collapse control 
  const [isSideNavbarCollapse, setIsSideNavbarCollapse] = useState(false);
  // for control notification popup 
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);
  // for control search popup 
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  // for control profile popup 
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

  const states = {
    isSideNavbarCollapse,
    setIsSideNavbarCollapse,
    isNotificationPopupOpen,
    setIsNotificationPopupOpen,
    isSearchPopupOpen,
    setIsSearchPopupOpen,
    isProfilePopupOpen,
    setIsProfilePopupOpen
  };

  return (
    <StateContext.Provider value={states}>{children}</StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node,
};

export default StateProvider;
