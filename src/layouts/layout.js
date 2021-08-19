import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
        <main className="align-items-center justify-content-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;