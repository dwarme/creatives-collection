import React, { ReactNode } from "react";
import Navigation from "../Navigation/Navigation";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <main>
      <section className="section">
        <div className="section-content clips-content">
          <div className="width-full row">
            <Navigation />
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
