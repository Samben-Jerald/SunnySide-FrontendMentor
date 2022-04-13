import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import HomePage from "./Pages/HomePage/HomePage";
import "./global.scss";

function App() {
  const NotFound = () => {
    <p style={{ fontSize: "2rem", marginTop: "5rem", textAlign: "center" }}>
      Not Found
    </p>;
  };

  const Loader = () => (
    <h1
      style={{
        textAlign: "center",
        marginTop: "5rem",
      }}
    >
      Loading.....
    </h1>
  );

  const HomePage = React.lazy(() => import("./Pages/HomePage/HomePage"));

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route
        path="home"
        element={
          <React.Suspense fallback={<Loader />}>
            <HomePage />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
