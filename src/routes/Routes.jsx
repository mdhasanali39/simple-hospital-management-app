import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Invoices from "../pages/Invoices/Invoices";
import Reports from "../pages/Reports/Reports";
import Branches from "../pages/Branches/Branches";
import Tests from "../pages/Tests/Tests";
import Cultures from "../pages/Cultures/Cultures";
import CultureOptions from "../pages/CultureOptions/CultureOptions";
import Antibiotics from "../pages/Antibiotics/Antibiotics";
import Doctor from "../pages/Doctor/Doctor";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        errorElement:<div>Page not found</div>,
        children:[
            {
                path:'/'||'dreamHospital/dashboard',
                element:<Dashboard/>
            },
            {
                path:'dreamHospital/profile',
                element:<Profile/>
            },
            {
                path:'dreamHospital/invoices',
                element:<Invoices/>
            },
            {
                path:'dreamHospital/reports',
                element:<Reports/>
            },
            {
                path:'dreamHospital/branches',
                element:<Branches/>
            },
            {
                path:'dreamHospital/tests',
                element:<Tests/>
            },
            {
                path:'dreamHospital/cultures',
                element:<Cultures/>
            },
            {
                path:'dreamHospital/cultures-options',
                element:<CultureOptions/>
            },
            {
                path:'dreamHospital/antibiotics',
                element:<Antibiotics/>
            },
            {
                path:'dreamHospital/cultures-options',
                element:<CultureOptions/>
            },
            {
                path:'dreamHospital/doctor',
                element:<Doctor/>
            },
            {
                path:'dreamHospital/priceList/test',
                element:<Doctor/>
            },
            {
                path:'dreamHospital/priceList/culture',
                element:<Doctor/>
            },
        ]
    }
])