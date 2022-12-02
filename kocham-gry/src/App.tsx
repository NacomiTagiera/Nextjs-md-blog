import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";

import "bootstrap/dist/js/bootstrap.min";

export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}
