import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <body className="w-screen h-screen" >
            <Outlet/>        
        </body>
    );
};

export default Layout;