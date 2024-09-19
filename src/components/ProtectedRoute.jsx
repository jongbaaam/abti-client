import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/store";

export default function ProtectedRoute() {
  const { isLoggedIn } = useUserStore(state => state);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}
