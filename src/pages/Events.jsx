import {motion} from "framer-motion";
import WorkshopCard from "../components/WorkshopCard";
import RocketAndPath from "../components/RocketAndPath";
import React from "react";


const workshopDescription = [
  {
    name: "Proteus: PCB design and Fabrication Workshop : Electrified by Litmus Cables",
    date: "Asar 6, 2082 - Asar 9, 2082",
    timeAvailable:1,
    time: "7:00-9:00AM, 1:00-3:00PM, 5:00-7:00PM",
    completed: 1,
    description: "Learn the basics of PCB design using Proteus and fabrication in this hands-on workshop!",
    registrationOpen: 0,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeqXQJhmke5LU_jaCBMKY2RcIX2Y6vh45g6bFU7WPFx32NYEA/viewform?fbclid=IwY2xjawK6AzFleHRuA2FlbQIxMABicmlkETFJSU5HSGE4SERDSVcxZ0kwAR4Y2U4jXjQg46nk_vOBYYCThEsGFj6fSQCN68t2CVrVqtKxgtVQFsWHTNtRdQ_aem_Jgu72x6J7sS5gegNGBeAvQ"
  },
  {
    name: "Arduino and BLDC Motor Control Workshop",
    date: "Shrawan 8, 2082 - Shrawan 15, 2082",
    timeAvailable:1,
    time: "5:00-7:00 PM",
    completed: 1,
    description: "Learn the core of electronics in an engaging and beginner-friendly way. Whether you're curious or career-focused, this is your chance to get practical!",
    registrationOpen: 0,
    registrationLink: "https://tinyurl.com/ecastelectrical"
  },
  {
    name: "One Day Basic Electronics Workshop",
    date: "First 3 weeks of Mangsir",
    timeAvailable:0,
    time: "",
    completed: 1,
    description: "From basic LED circuit to Astable Multivibrator - learn about the basic of Electronics, hands-on! The workshop was done in multiple +2 college inside the Kathmandu Valley.",
    registrationOpen: 0,
    registrationLink: "https://tinyurl.com/ecastelectrical"
  },
  {
    name: "IoT With ESP8266",
    date: "Poush 11, 2082 - Poush 15, 2082",
    timeAvailable:1,
    time: "7:15-9:15 AM, 2:30-4:30 PM",
    completed: 1,
    description: "The sequel of Arduino and BLDC Motor Control Workshop! Learn once more, the core of electronics in an engaging and beginner-friendly way. Whether you're curious or career-focused, this is your chance to get practical!",
    registrationOpen: 0,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeLUVwm44873d8E_hJ7auIC-gj_WdUB504xCK5iW0q83rNqvw/viewform"
  },
  {
    name: "AutoCAD Workshop",
    date: "Magh 2, 2082 - Magh 6, 2082",
    timeAvailable:1,
    time: "7:30 AM - 9:30 AM",
    completed: 1,
    description: "Master basic building design to complex three phase electrification using AutoCAD. A must-have skill for electrical engineers!",
    registrationOpen: 0,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSelMe1sO9BPP8uzTnXSxUlQIJscPgUeAXRZWi6KcjAaRS5BQg/viewform"
  },
  {
    name: "Second Shekhar Memorial Blood Donation Program",
    date: "Magh 29, 2082",
    timeAvailable:1,
    time: "11:00 AM - 3:30 PM",
    completed: 1,
    description: "A blood donation program to honor the cherished memory of late Shekhar Majhi (078BEL084).",
    registrationOpen: 0,
    registrationLink: ""
  },
  {
    name: "EC Talks 3.0 Shooting",
    date: "Late Magh",
    timeAvailable:0,
    time: "",
    completed: 1,
    description: "Several guests were invited to talk with us for our podcast series, 'EC Talks 3.0'.",
    registrationOpen: 0,
    registrationLink: ""
  },
  {
    name: "EC Talks 3.0 Release",
    date: "Early Falgun",
    timeAvailable:0,
    time: "",
    completed: 1,
    description: "The episodes of our podcast series, 'EC Talks 3.0' were released on a weekly basis.",
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
                            timeAvailable={workshop.timeAvailable}
                        />
                        {i<workshopDescription.length - 1 && <RocketAndPath key={(workshopDescription.length)+i} number={i}/>}
                    </React.Fragment>
                ))}
            </div>
        </main>
    )
}