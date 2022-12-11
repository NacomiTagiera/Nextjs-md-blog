import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";

const CoD = lazy(() => import("./pages/CoD/CoD"));
const Home = lazy(() => import("./pages/Home/Home"));
const NBA = lazy(() => import("./pages/NBA/NBA"));

export default function App() {
  return (
    <Suspense fallback={<h1 className="text-center text-white">Loading...</h1>}>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Call_of_Duty" element={<CoD />} />
        <Route path="NBA_2K" element={<NBA />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}
