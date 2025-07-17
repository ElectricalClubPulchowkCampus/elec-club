import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Events from "./pages/Events";
import Media from "./pages/Media";
import Faqs from "./pages/Faqs";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import GoToTopButton from "./components/GoToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import PopupBanner from "./components/PopupBanner";
import bannerImage from "./assets/images/register_now.png"
import React, { useEffect, useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowPopup(true);
    }, 1000)

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <ScrollToTop />
      <div className="bg-gradient-to-br from-slate-100 via-violet-100 to-fuchsia-100">
      {/* {showPopup && (
        <PopupBanner
          imageUrl={bannerImage}
          onClose={() => setShowPopup(false)}
        />
      )} */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/events" element={<Events />}/>
          <Route path="/media" element={<Media />}/>
          <Route path="/faqs" element={<Faqs />}/>
          <Route path="/contact" element={<ContactUs />}/>
        </Routes>
        {/* <Sponsors />  */}
        <Footer />
        <GoToTopButton />
      </div>
    </>
  );
}

export default App;
