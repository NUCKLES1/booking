import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discount from "./pages/Discount";
import Hotel from "./pages/Hotel";
import Screeny from "./pages/Screeny";
import Home2 from "./pages/Home2";
import Otp from "./pages/Otp";
import Otpcode from "./pages/Otpcode";
import Otpsuccess from "./pages/Otpsuccess";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Theme from "./pages/Theme-agoda";

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/discount" element={<Discount />} />
    <Route path="/hotel" element={<Hotel />} />
    <Route path="/screeny" element={<Screeny />} />
    <Route path="/home2" element={<Home2 />} />
    <Route path="/otp" element={<Otp />} />
    <Route path="/otpcode" element={<Otpcode />} />
    <Route path="/otpsuccess" element={<Otpsuccess />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/theme" element={<Theme />} />
   </Routes>
  );
}

export default App;
