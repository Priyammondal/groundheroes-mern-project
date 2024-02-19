import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CategoryListing from "../pages/CategoryListing";
import ContactListing from "../pages/ContactListing";
import GlobalStyle from "../globalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageNotFound from "../components/PageNotFound";
export const GlobatContext = createContext({});

const AppRouting = () => {
  const [contactData, setContactData] = useState([]);
  console.log("contactData-->", contactData);
  return (
    <GlobatContext.Provider value={{ contactData, setContactData }}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/category" exact element={<CategoryListing />} />
          <Route path="/contact" exact element={<ContactListing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </GlobatContext.Provider>
  );
};

export default AppRouting;
