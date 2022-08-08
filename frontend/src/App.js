/** @format */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyPage from "./pages/VerfiyPage";
import ForgotPassword from "./pages/ForgotPassword";
import Blogs from "./pages/Blogs";


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/verfiy_account" element={<VerifyPage />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/coinbox_blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App;
