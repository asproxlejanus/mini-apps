import React, { useState } from "react";
import { Search, Hangman } from "./index";
import "../assets/global-styles.css";

const App = () => {
  return (
    <div>
      <h4>Welcome Mini-Apps</h4>
      <Hangman />
    </div>
  );
};

export default App;
