import React, { ReactNode } from "react";
import Navigation from "../Navigation/Navigation";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <main>
      <section className="section">
        <div className="section-content">
          <Navigation />
          {children}
        </div>
      </section>
    </main>
  );
};

export default Layout;
