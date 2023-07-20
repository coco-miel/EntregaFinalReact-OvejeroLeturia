import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import NavBar from "./components/NavBar/NavBar.jsx";
// pages
import HomePage from "./pages/HomePage/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />} 
          />
          <Route 
            path="*" 
            element={<ErrorPage />} 
          />
          <Route
            path="/detail/:id"
            element={<DetailPage />}
          />
          <Route
            path="/category/:categoryId"
            element={<CategoryPage />}
          />
          <Route
            path="/cart/"
            element={<CartPage />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
