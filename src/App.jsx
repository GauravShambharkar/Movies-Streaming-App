import { useState } from "react";
import "./App.css";
import Nav from "./Routing/Nav";

function App() {
  document.title = "StremUp";
  return (
    <>
      <div className="main w-full mx-auto h-screen ">
        <Nav />
      </div>
    </>
  );
}

export default App;
