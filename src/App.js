import React from "react"; // Remove unused import useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login"; // Import Login component
import Signup from "./Components/Signup";
import Checkout from "./Components/Checkout";
import Address from "./Components/Address";
import Payment from "./Components/Payment";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";

import AddProduct from "./Components/AddProduct";

const promise = loadStripe(
  "pk_test_51OqbutSBSBI4t3q4y3fonmVSwutQJcH8RXexrIkuDPJ9DFnCAHaGBas7S9aPWW6ShH8GxkJBpVdFqyrNPfPFQksV00MVm8ydHA")
function App() {
  return (
    <Router>
      <div className="Container__app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/address" element={<Address />} />
          <Route 
          path="/payment" 
          element={<Elements stripe={promise}><Payment/></Elements>} />
          <Route path="/addproduct" element={<AddProduct />}/>
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;

