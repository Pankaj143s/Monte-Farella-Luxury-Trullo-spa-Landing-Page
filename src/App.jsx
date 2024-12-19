import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      {/* Wrapping the Layout in Router */}
      <Layout />
    </Router>
  );
}

export default App;
