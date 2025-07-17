import {motion} from "framer-motion";
import WorkshopCard from "../components/WorkshopCard";
import RocketAndPath from "../components/RocketAndPath";
import React from "react";


const workshopDescription = [
  {
    name: "Proteus: PCB design and Fabrication Workshop : Electrified by Litmus Cables",
    date: "June 20, 2025 - June 23, 2025",
    time: "7:00-9:00AM, 1:00-3:00PM, 5:00-7:00PM",
    completed: 1,
    description: "Learn the basics of PCB design using Proteus and fabrication in this hands-on workshop!",
    registrationOpen: 0,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeqXQJhmke5LU_jaCBMKY2RcIX2Y6vh45g6bFU7WPFx32NYEA/viewform?fbclid=IwY2xjawK6AzFleHRuA2FlbQIxMABicmlkETFJSU5HSGE4SERDSVcxZ0kwAR4Y2U4jXjQg46nk_vOBYYCThEsGFj6fSQCN68t2CVrVqtKxgtVQFsWHTNtRdQ_aem_Jgu72x6J7sS5gegNGBeAvQ"
  },
  {
    name: "Embedded Systems Workshop",
    date: "Shrawan 8, 2082 - Shrawan 15, 2082",
    time: "Revealing Soon!",
    completed: 0,
    description: "From blinking LEDs to controlling motors, learn the core of electronics in an engaging and beginner-friendly way. Whether you're curious or career-focused, this is your chance to get practical!",
    registrationOpen: 1,
    registrationLink: "https://tinyurl.com/ecastelectrical"
  },
  {
    name: "ETAP Workshop",
    date: "Coming soon!",
    time: "Tick tock!",
    completed: 0,
    description: "Dive into electrical power system modeling, analysis, and simulation using ETAP. Perfect for electrical engineering students!",
    registrationOpen: 0,
    registrationLink: ""
  },
  {
    name: "AutoCAD Workshop",
    date: "Coming soon!",
    time: "Tick tock!",
    completed: 0,
    description: "Master basic to intermediate 2D drafting and electrical schematics using AutoCAD. A must-have skill for design engineers!",
    registrationOpen: 0,
    registrationLink: ""
  },
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
                            registrationLink={workshop.registrationLink}
                        />
                        {i<workshopDescription.length - 1 && <RocketAndPath key={(workshopDescription.length)+i} number={i}/>}
                    </React.Fragment>
                ))}
            </div>
        </main>
    )
}