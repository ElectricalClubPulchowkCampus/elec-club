import logo from "../assets/images/elec-club-logo.svg";
import { motion } from "framer-motion";
import HomeSlide from "../components/HomeSlide";
import PCBSlide from "../components/PCBSlide";
import WorkshopSlide from "../components/WorkshopSlide";
import IotSlide from "../components/IotSlide";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full h-screen"
      >
        <SwiperSlide>
          <IotSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSlide />
        </SwiperSlide>
        <SwiperSlide>
          <PCBSlide/>
        </SwiperSlide>
        <SwiperSlide>
          <WorkshopSlide/>
        </SwiperSlide>
      </Swiper>

      <motion.div
        className="my-24 flex flex-col justify-center h-auto md:my-10 md:pt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-5xl font-bold text-[#5004a0] text-center">
          Electrical Club in Pulchowk Campus
        </div>
        <div className="flex flex-row flex-wrap p-10">
          <img
            src={logo}
            alt="club-logo"
            className="w-[60%] md:w-[30%] object-contain m-auto"
          />
          <div className="text-base md:text-xl w-full md:w-[50%] text-justify mt-10 md:m-auto">
            The Electrical Club at the Department of Electrical Engineering, IOE Pulchowk, is a vibrant student-led organization dedicated to bridging the gap between theoretical learning and practical skills for aspiring electrical engineers. Founded by proactive students, the club fosters creativity, teamwork, and leadership by offering diverse workshops such as home electrification, inverter design, Arduino programming, Proteus simulation, PCB design, and MATLAB/Simulink training. It also hosts a podcast featuring alumni who share valuable career insights. Managed by an annually elected working committee, the club organizes activities that support students’ academic and professional growth. Through its dynamic environment, the Electrical Club empowers students to innovate, develop essential skills, and prepare for successful careers in the electrical engineering industry.
          </div>
        </div>
      </motion.div>
    </main>
  );
}
