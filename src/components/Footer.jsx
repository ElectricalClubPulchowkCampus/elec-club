export default function Footer() {
  return (
    <footer className="bg-[#5004a0]/85 text-white">
      <div className="p-10 md:p-24 w-full flex flex-col md:flex-row justify-center md:justify-between">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-center">Electrical Club, Pulchowk Campus</p>
          <p className="m-5 text-xl">Thank you for visiting us. Follow us:</p>
          <div className="flex space-x-5 text-4xl">
            <a href="https://www.facebook.com/ECPulchowk" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/electricalclubpc/" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center my-10 md:my-0">
          <p className="text-2xl font-bold">Reach us @</p>
          <div className="flex flex-col items-center text-xl m-5">
            <p><i className="fa-solid fa-location-dot"></i> Pulchowk Campus</p>
            <p>Department of Electrical Engineering</p>
            <p>IOE, Lalitpur</p>
          </div>
          <div><i className="fa-solid fa-envelope"></i> electricalclub@pcampus.edu.np</div>
        </div>
      </div>
      <div className="w-full text-xl text-center p-2">
        Copyright @ 2025 All rights reserved | Electrical Club Pulchowk Campus
      </div>
    </footer>
  );
}
