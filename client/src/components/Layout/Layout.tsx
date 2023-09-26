import React, { Fragment, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> & {
  WithSectionContent: React.FC<{ children: ReactNode }>;
} = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      {children}
      <Footer />
    </Fragment>
  );
};

Layout.WithSectionContent = ({ children }) => {
  return (
    <Layout>
      <main>
        <section className="section">
          <div className="section-content">{children}</div>
        </section>
      </main>
    </Layout>
  );
};
export default Layout;
