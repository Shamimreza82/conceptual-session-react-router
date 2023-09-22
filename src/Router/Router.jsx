import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const myCreatedRouter = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            
        ]
    },
]);

export default myCreatedRouter;