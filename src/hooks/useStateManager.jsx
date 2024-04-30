import { useContext } from "react";
import { StateContext } from "../context/StateProvider";

const useStateManager = () => {
    const states = useContext(StateContext)
    return states;
};

export default useStateManager;