import Header from "../components/Header";
import Footer from "../components/Footer";
import GoToTopButton from "../components/GoToTopButton";
import backgroundImg from "../assets/images/soldering-background-img.jpg";
import logo from "../assets/images/elec-club-logo.svg";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-100 via-violet-100 to-fuchsia-100">
      <Header />
      <main>
        <div className="relative h-screen bg-cover bg-center flex flex-col">
          <div
            className="absolute inset-0 h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          ></div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

          <div className="relative flex-1 flex flex-col items-center justify-center z-10">
            <h1 className="text-6xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-center">
              Pulchowk Campus Electrical Club
            </h1>
            <p className="text-2xl font-bold text-white py-4">
              Innovate. Integrate. Illuminate.
            </p>
          </div>
        </div>

        <div className="my-24 flex flex-col justify-center md:h-[80vh] md:my-10">
          <div className="text-5xl font-bold text-[#5004a0] text-center">Electrical Club in Pulchowk Campus</div>
          <div className="flex flex-row flex-wrap p-10">
            <img src={logo} alt="club-logo" className="w-[60%] md:w-[30%] object-contain m-auto" />
            <div className="text-2xl w-full md:w-[50%] text-center mt-10 md:m-auto">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <GoToTopButton />
    </div>
  );
}
