/** @format */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import RecieptPage from "./pages/RecieptPage";
import WithdrawalPage from "./pages/WithdrawalPage";
import LoginPage from "./pages/LoginPage";
import AdminsPage from "./pages/AdminsPage";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "./pages/ResetPassword";
import Contents from "./pages/Contents";
import CreateContent from "./pages/CreateContent";
import ContentDetails from "./pages/ContentDetails";
import Testimonial from "./pages/Testimonial";

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
              border: "1px solid darkgray",
            },
          },
          error: {
            style: {
              background: "black",
              color: "white",
              borderRadius: "25px",
              border: "1px solid darkgray",
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
          path="/Testimonials"
          element={
            <PrivateRoute>
              {" "}
              <Testimonial />{" "}
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
          path="/Create-Contents"
          element={
            <PrivateRoute>
              <CreateContent />
            </PrivateRoute>
          }
        />
        <Route
          path="/Contents"
          element={
            <PrivateRoute>
              <Contents />
            </PrivateRoute>
          }
        />
        <Route
          path="/Contents-details/:id"
          element={
            <PrivateRoute>
              <ContentDetails />
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
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
