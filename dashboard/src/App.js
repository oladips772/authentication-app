/** @format */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import RecieptPage from "./pages/RecieptPage";
import WithdrawalPage from "./pages/WithdrawalPage";
import LoginPage from "./pages/LoginPage";
import AdminsPage from "./pages/AdminsPage";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "black",
              color: "white",
              borderRadius: "10px",
            },
          },
          error: {
            style: {
              background: "black",
              color: "white",
              borderRadius: "10px",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Users" element={<UsersPage />} />
        <Route path="/Payment-Reciepts" element={<RecieptPage />} />
        <Route path="/Withdrawals" element={<WithdrawalPage />} />
        <Route path="/Admin" element={<AdminsPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
