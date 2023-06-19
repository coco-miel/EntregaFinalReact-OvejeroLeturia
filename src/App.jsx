import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import NavBar from "./components/NavBar/NavBar.jsx";
// pages
import HomePage from "./pages/HomePage/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";

/* Adding the github's repo name to the path because my vite.config.js base doesn't default to "/".
 I had to change vite's base in order to make gh pages work...*/

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route 
            path="/PreEntrega2-OvejeroLeturia/" 
            element={<HomePage />} 
          />
          <Route 
            path="*" 
            element={<ErrorPage />} 
          />
          <Route
            path="/PreEntrega2-OvejeroLeturia/item/:id"
            element={<DetailPage />}
          />
          <Route
            path="/PreEntrega2-OvejeroLeturia/category/:categoryId"
            element={<CategoryPage />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
