import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";
import PasswordReset from "./components/passwordReset";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Gemini from "./components/gemini";
import Payment from "./components/payment";
import Resume from "./components/resume";
import Policy from "./components/policy";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (

    <div>
      
 
      <div className="ellipse ellipse-1"></div>
      <div className="ellipse ellipse-2"></div>
      <div className="ellipse ellipse-3"></div>
      <div className="ellipse ellipse-4"></div> 

      
      <Router>
      <Header/>
        <Routes>
         
          <Route
            path="/"
            element={user != null ? <Profile/> : <Login />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/gemini" element={<Gemini/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/resume" element = {<Resume/>} />
          <Route path="/policy" element={<Policy/>}/>
        </Routes>
        <ToastContainer />

        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
