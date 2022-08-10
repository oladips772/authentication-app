/** @format */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyPage from "./pages/VerfiyPage";
import ForgotPassword from "./pages/ForgotPassword";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/verfiy_account" element={<VerifyPage />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/coinbox_blogs" element={<Blogs />} />
      <Route path="/coinbox_blogs_detail/:id" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;
