import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
