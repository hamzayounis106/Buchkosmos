import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import axios from "axios";
import Cookies from "js-cookie";
import Book from "./Pages/Book";

export const FictionCategoriesContext = createContext(null);
export const CookieToken = createContext(null);

export default function App() {
  const server = import.meta.env.VITE_SERVER_URL;
  const [fictionCategories, setFictionCategories] = useState(null);
  const [token, setToken] = useState(null);

  const getCategories = async () => {
    try {
      const res = await axios.get("https://buchkosmos.de/rest/categories");
      console.log(res.headers["set-cookie"]);
      const AllCategories = res.data.items;
      const filteredCategories = AllCategories.filter((c) => {
        return c.id !== "848" && c.id !== "837" && c.id !== "838";
      });
      setFictionCategories(filteredCategories);
    } catch (error) {
      console.log(error);
      alert(error ? error.message : "Something went wrong");
    }
  };

  useEffect(() => {
    getCategories();
    try {
      // Get all cookies
      const allCookies = Cookies.get();
      console.log("All Cookies:", allCookies);

      // Get specific cookie value
      const tokenValue = Cookies.get("XSRF-TOKEN");
      console.log("XSRF-TOKEN Cookie Value:", tokenValue);
      setToken(tokenValue);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Header />
      <FictionCategoriesContext.Provider value={fictionCategories}>
        <CookieToken.Provider value={token}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </CookieToken.Provider>
      </FictionCategoriesContext.Provider>
      <Footer />
    </div>
  );
}
