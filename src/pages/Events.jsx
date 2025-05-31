import {motion} from "framer-motion";
import WorkshopCard from "../components/WorkshopCard";
import RocketAndPath from "../components/RocketAndPath";

const workshopDescription = [{
    name: "Curcuit Design Workshop",
    date: "June 15,2025 - June 18 2025",
    time: "7:00-10:00AM, 1:00-2:00PM, 4:00-6:00PM",
    completed: 1,
    description: "Learn the basics of PCB design using KiCad in this hands-on workshop!"
},
{
    name: "Curcuit Design Workshop",
    date: "June 15,2025 - June 18 2025",
    time: "7:00-10:00AM, 1:00-2:00PM, 4:00-6:00PM",
    completed: 0,
    description: "Learn the basics of PCB design using KiCad in this hands-on workshop!"
},
{
    name: "Curcuit Design Workshop",
    date: "June 15,2025 - June 18 2025",
    time: "7:00-10:00AM, 1:00-2:00PM, 4:00-6:00PM",
    completed: 0,
    description: "Learn the basics of PCB design using KiCad in this hands-on workshop!"
},
{
    name: "Curcuit Design Workshop",
    date: "June 15,2025 - June 18 2025",
    time: "7:00-10:00AM, 1:00-2:00PM, 4:00-6:00PM",
    completed: 0,
    description: "Learn the basics of PCB design using KiCad in this hands-on workshop!"
}]

export default function Events(){
    return(
        <main className="pt-24 overflow-x-hidden overflow-y-hidden flex flex-wrap flex-col items-center justify-center">
            <motion.p 
                className="text-5xl font-bold text-[#5004a0] text-center my-5 mb-8 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}  
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Events
                <p className="text-base font-normal p-2">
                    The several events we will be conducting throughout the year
                </p>
            </motion.p>
            <div className="relative flex flex-col items-center w-full pb-4">
                {workshopDescription.map((workshop, i) => (
                    <>
                        <WorkshopCard
                            key={i}
                            name={workshop.name}
                            date={workshop.date}
                            time={workshop.time}
                            description={workshop.description}
                            completed={workshop.completed}
                        />
                        {i<workshopDescription.length - 1 && <RocketAndPath />}
                    </>
                ))}
            </div>
        </main>
    )
}

/*

*/