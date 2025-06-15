import React, { useEffect, useState } from "react";

export default function PopupBanner({ onClose, imageUrl }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const animationTimer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(animationTimer);
  }, []);

  return (
<div className={`fixed inset-0 bg-grey bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-100 transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}>
  <div className="px-4 w-full">
    <div className={`relative max-w-md w-full mx-auto transform transition duration-300 ${animate ? 'scale-100' : 'scale-90'}`}>
      <img
        src={imageUrl}
        alt="Banner"
        className="w-full rounded-lg shadow-lg"
      />
      <button
        onClick={onClose}
        className="absolute -top-2 -right-2 bg-white text-black px-2 py-1 rounded-full hover:bg-gray-200"
      >
        ✕
      </button>
    </div>
  </div>
</div>

  );
}
