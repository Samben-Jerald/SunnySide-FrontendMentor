import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import "./global.scss";

function App() {
  const NotFound = (
    <p style={{ fontSize: "2rem", marginTop: "5rem", textAlign: "center" }}>
      Not Found
    </p>
  );

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="home" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
