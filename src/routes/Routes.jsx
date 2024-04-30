import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        errorElement:<div>Page not found</div>,
        children:[
            {

            }
        ]
    }
])