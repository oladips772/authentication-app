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
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "black",
              color: "white",
              borderRadius: "25px",
            },
          },
          error: {
            style: {
              background: "black",
              color: "white",
              borderRadius: "25px",
            },
          },
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Users"
          element={
            <PrivateRoute>
              {" "}
              <UsersPage />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/Payment-Reciepts"
          element={
            <PrivateRoute>
              {" "}
              <RecieptPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Withdrawals"
          element={
            <PrivateRoute>
              <WithdrawalPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Admin"
          element={
            <PrivateRoute>
              <AdminsPage />
            </PrivateRoute>
          }
        />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
