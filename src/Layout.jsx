import React from "react";
import { Footer } from "./Components/Footer";
import { StickyNavbar } from "./Components/Navbar";

function Layout({ children }) {
  return (
    <div>
      <StickyNavbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
