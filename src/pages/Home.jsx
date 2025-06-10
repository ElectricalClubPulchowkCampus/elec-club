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
        </div>

        <motion.div
          className="my-24 flex flex-col justify-center h-auto md:my-10 md:pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:true, amount: 0.2  }}  
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-5xl font-bold text-[#5004a0] text-center">Electrical Club in Pulchowk Campus</div>
          <div className="flex flex-row flex-wrap p-10">
            <img src={logo} alt="club-logo" className="w-[60%] md:w-[30%] object-contain m-auto" />
            <div className="text-base md:text-xl w-full md:w-[50%] text-justify mt-10 md:m-auto">
              The Electrical Club at the Department of Electrical Engineering, IOE Pulchowk, is a vibrant student-led organization dedicated to bridging the gap between theoretical learning and practical skills for aspiring electrical engineers. Founded by proactive students, the club fosters creativity, teamwork, and leadership by offering diverse workshops such as home electrification, inverter design, Arduino programming, Proteus simulation, PCB design, and MATLAB/Simulink training. It also hosts a podcast featuring alumni who share valuable career insights. Managed by an annually elected working committee, the club organizes activities that support students’ academic and professional growth. Through its dynamic environment, the Electrical Club empowers students to innovate, develop essential skills, and prepare for successful careers in the electrical engineering industry.
            </div>
          </div>
        </motion.div>
      </main>
  );
}
