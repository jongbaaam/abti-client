import { Route, Routes, Navigate } from "react-router-dom";

import { useUserStore } from "../store/store";

import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";
import Container from "./common/Container";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./common/NotFoundPage";

export default function App() {
  const { isLoggedIn } = useUserStore(state => state);

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? <Home /> : <Navigate to="/dashboard" replace />
            }
          />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}
