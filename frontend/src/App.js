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
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import Investment from "./pages/Investment";
import ProfilePlans from "./pages/ProfilePlans";
import MyWithdrawals from "./pages/MyWithdrawals";
import { Toaster } from "react-hot-toast";
import CreateTestimonial from "./pages/CreateTestimonial";
import ResetPassword from "./pages/ResetPassword";


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my_profile" element={<ProfilePlans />} />
        <Route path="/my_profile_withdrawals" element={<MyWithdrawals />} />
        <Route path="/verfiy_account" element={<VerifyPage />} />
        <Route path="/investments_plans" element={<Investment />} />
        <Route path="/write_review" element={<CreateTestimonial />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/coinbox_blogs" element={<Blogs />} />
        <Route path="/coinbox_blogs_detail/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App; 
