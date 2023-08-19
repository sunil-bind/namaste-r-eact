import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
