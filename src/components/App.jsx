import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useUserStore } from "../store/store";

import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";
import NotFoundPage from "./common/NotFoundPage";
import Testing from "./Testing/Testing";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const { isLoggedIn } = useUserStore(state => state);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? <Home /> : <Navigate to="/dashboard" replace />
          }
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" replace />}>
          <Route path=":projectId" element={<Testing />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition:Flip
      />
    </>
  );
}
