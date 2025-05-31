import { Link } from "react-router-dom";
import logo from "../assets/images/elec-club-logo.svg";
import {useState} from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="h-20 bg-white/50 backdrop-blur-md shadow-lg px-4 py-3 flex justify-between items-center z-20 fixed w-full" id="nav-bar">
        <div className="h-full text-xl font-bold flex items-center space-x-2">
          <img src={logo} alt="Club Logo" className="h-full w-auto object-contain" />
          <div className="flex flex-col items-center text-[#5004a0]">
            Electrical Club
            <span className="text-gray-700 text-sm font-normal">Pulchowk Campus</span>
          </div>
        </div>
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col space-y-2 absolute bg-white/50 top-20 left-0 right-0 p-4 rounded-b-lg shadow-md 
            md:static md:flex md:flex-row md:space-x-6 md:space-y-0 md:bg-transparent md:p-0 md:shadow-none 
            text-[#444054] font-medium`}
        >
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#9333ea]">Home</Link></li>
          <li><Link to="/events" onClick={() => setMenuOpen(false)} className="hover:text-[#9333ea]">Events</Link></li>
          <li><Link to="/committee" onClick={() => setMenuOpen(false)} className="hover:text-[#9333ea]">Committee</Link></li>
          <li><Link to="/testimonials" onClick={() => setMenuOpen(false)} className="hover:text-[#9333ea]">Testimonials</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#9333ea]">Contact Us</Link></li>
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 font-extrabold focus:outline-none hover:text-[#9333ea]"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
