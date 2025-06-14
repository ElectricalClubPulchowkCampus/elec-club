import backgroundImg from "../assets/images/soldering-background-img.jpg";
import {motion} from "framer-motion";

export default function HomeSlide() {
    return(
        <>
          <div
            className="absolute inset-0 h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
          </div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">

              <motion.div
                className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-center flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
              Electrical Club
              <div className="text-4xl">Pulchowk Campus</div>
            </motion.div>
              <motion.p
                className="text-2xl font-bold text-white py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                Innovate. Integrate. Illuminate.
              </motion.p>
          </div>
        </>
    )
}