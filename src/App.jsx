import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Home Page */}
      <HomePage />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
