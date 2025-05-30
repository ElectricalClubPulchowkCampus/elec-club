import { useEffect, useState } from "react";

export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return isVisible ? (
    <button
      onClick={scrollToTop}
      title="Go to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full 
        backdrop-blur-md bg-[#5004a0]/20 border border-white/30 shadow-lg 
        text-white hover:bg-[#3E0380]/40 transition duration-300"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  ) : null;
}
