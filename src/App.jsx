import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ProductionOverview from "./components/ProductionOverview/ProductionOverview";
import PreorderForm from "./components/PreorderForm/PreorderForm";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductionOverview />} />
          <Route path="/pre-order" element={<PreorderForm />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
