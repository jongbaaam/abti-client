import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";
import Container from "./common/Container";

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </>
  );
}
