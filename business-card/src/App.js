import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";

export default function App() {
  return (
    <div>
      <header>
        <Header/>
        <Main/>
        <Footer/>
        
      </header>
    </div>
  );
}