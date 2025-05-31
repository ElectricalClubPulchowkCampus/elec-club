import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTopButton from "./components/GoToTopButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="bg-gradient-to-br from-slate-100 via-violet-100 to-fuchsia-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<Committee />} />
        </Routes>
        <Footer />
        <GoToTopButton />
      </div>
    </>
  );
}

export default App;
