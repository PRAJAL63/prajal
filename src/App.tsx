import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import CustomCursor from "./components/ui/CustomCursor";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CustomCursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
