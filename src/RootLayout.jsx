import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div>
     <div>hello world</div>
    <Outlet/>
   </div>
    );
};

export default RootLayout;