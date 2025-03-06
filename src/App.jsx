import React from "react";
import Header from "./Header.jsx";
import ScaryNumbers from "./ScaryNumbers.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="retro-monitor">
      <Header />
      <ScaryNumbers />
      <Footer />
    </div>
  );
}

export default App;
