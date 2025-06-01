import rocketIcon from "../assets/images/rocket-icon.svg"
import { motion } from "framer-motion"


export default function RocketAndPath(number) {
    return (
        <motion.div 
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            {...(number === 0
            ? {
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                }
            : {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.1 },
                })}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >

            <div className="h-[60px] border-r-[6px] border-dotted border-[#7965C1] z-5 mb-1"></div>

            <img
                src={rocketIcon}
                alt="Rocket Icon"
                className="w-[10vh] h-[15vh] z-10 bg-transparent"
                style={{ transformOrigin: 'center' }}
            />

            <div className="h-[60px] border-r-[6px] border-dotted border-[#7965C1] z-5 mt-1"></div>

        </motion.div>
    );
}
