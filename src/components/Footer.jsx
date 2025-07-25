export default function Footer() {
  return (
    <footer className="bg-[#5004a0]/85 text-white mt-10">
      <div className="p-10 pb-0 md:px-24 md:pt-12 md:pb-10 w-full flex flex-col md:flex-row justify-center md:justify-between">
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold text-center">Electrical Club, Pulchowk Campus</p>
          <p className="m-5 text-base">Thank you for visiting us. Follow us:</p>
          <div className="flex space-x-5 text-4xl">
            <a href="https://www.facebook.com/ECPulchowk" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/electricalclubpc/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/electrical-club-pulchowk-campus/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="http://www.youtube.com/@electricalclubioe" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://discord.gg/sXbK656RVa" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center my-10 md:my-0">
          <p className="text-xl font-bold">Reach us @</p>
          <div className="flex flex-col items-center text-base m-5">
            <p><i className="fa-solid fa-location-dot"></i> Pulchowk Campus</p>
            <p>Department of Electrical Engineering</p>
            <p>IOE, Lalitpur</p>
          </div>
          <div><i className="fa-solid fa-envelope"></i> electricalclub@pcampus.edu.np</div>
        </div>
      </div>
      <div className="w-full text-base text-center p-2">
        <div>Copyright &copy; 2025 All rights reserved | Electrical Club Pulchowk Campus</div>
        <div className="text-sm mt-1 opacity-70">Website by Binit Neupane</div>
      </div>
    </footer>
  );
}
