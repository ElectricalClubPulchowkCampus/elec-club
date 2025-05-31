import backgroundImg from "../assets/images/soldering-background-img.jpg";
import logo from "../assets/images/elec-club-logo.svg";
import {motion} from "framer-motion";

export default function Home() {
  return (
      <main>
        <div className="relative h-screen bg-cover bg-center flex flex-col">
          <div
            className="absolute inset-0 h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          ></div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

          <div className="relative flex-1 flex flex-col items-center justify-center z-10">
              <motion.h1
                className="text-6xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
              Pulchowk Campus Electrical Club
            </motion.h1>
              <motion.p
                className="text-2xl font-bold text-white py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                Innovate. Integrate. Illuminate.
              </motion.p>
          </div>
        </div>

        <motion.div
          className="my-24 flex flex-col justify-center md:h-[80vh] md:my-10 md:pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}  
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-5xl font-bold text-[#5004a0] text-center">Electrical Club in Pulchowk Campus</div>
          <div className="flex flex-row flex-wrap p-10">
            <img src={logo} alt="club-logo" className="w-[60%] md:w-[30%] object-contain m-auto" />
            <div className="text-2xl w-full md:w-[50%] text-center mt-10 md:m-auto">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </div>
        </motion.div>
      </main>
  );
}
