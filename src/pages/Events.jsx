import {motion} from "framer-motion";
import WorkshopCard from "../components/WorkshopCard";
import RocketAndPath from "../components/RocketAndPath";
import React from "react";

const workshopDescription = [
  {
    name: "Curcuit Design Workshop",
    date: "April 15, 2025 - April 18, 2025",
    time: "7:00-10:00AM, 1:00-2:00PM, 4:00-6:00PM",
    completed: 1,
    description: "Learn the basics of PCB design using KiCad in this hands-on workshop!",
    registrationOpen: 0,
    registrationLink: ""
  },
  {
    name: "Microcontroller Bootcamp",
    date: "July 2, 2025 - July 5, 2025",
    time: "9:00AM - 12:00PM, 2:00 - 5:00PM",
    completed: 0,
    description: "Get started with Arduino and ESP32. Ideal for beginners looking to enter the world of embedded systems!",
    registrationOpen: 1,
    registrationLink: "https://electricalclubpulchowkcampus.github.io/elec-club"
  },
  {
    name: "IoT & Cloud Integration",
    date: "July 12, 2025 - July 14, 2025",
    time: "10:00AM - 1:00PM, 3:00 - 6:00PM",
    completed: 0,
    description: "Connect hardware to the cloud! Learn how to send sensor data to platforms like ThingsBoard and Firebase.",
    registrationOpen: 0,
    registrationLink: ""
  },
  {
    name: "Robotics with Raspberry Pi",
    date: "July 20, 2025 - July 23, 2025",
    time: "8:00AM - 11:00AM, 1:00 - 4:00PM",
    completed: 0,
    description: "Build and program a basic robot using Raspberry Pi and Python. No prior robotics experience required!",
    registrationOpen: 0,
    registrationLink: ""
  }
];


export default function Events(){
    return(
        <main className="pt-24 overflow-x-hidden overflow-y-hidden flex flex-wrap flex-col items-center justify-center">

            <motion.div 
                className="text-5xl font-bold text-[#5004a0] text-center my-5 mb-8 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{once:true, amount:0.01 }}  
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Events
                <p className="text-base font-normal p-2">
                    The several events we will be conducting throughout the year
                </p>
            </motion.div>
            <div className="relative flex flex-col items-center w-full pb-4">
                {workshopDescription.map((workshop, i) => (
                    <React.Fragment key={i}>
                        <WorkshopCard
                            key={i}
                            number={i}
                            name={workshop.name}
                            date={workshop.date}
                            time={workshop.time}
                            description={workshop.description}
                            completed={workshop.completed}
                            registrationOpen={workshop.registrationOpen}
                        />
                        {i<workshopDescription.length - 1 && <RocketAndPath key={(workshopDescription.length)+i} number={i}/>}
                    </React.Fragment>
                ))}
            </div>
        </main>
    )
}

/*

*/