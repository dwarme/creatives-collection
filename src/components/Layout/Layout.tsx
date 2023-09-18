import React, { ReactNode } from "react";
import Navigation from "../Navigation/Navigation";

const Layout: React.FC<{children?: ReactNode}> = ({children}) =>{
    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}

export default Layout;