import rocketIcon from "../assets/images/rocket-icon.svg"
import { motion } from "framer-motion"

export default function RocketAndPath() {
    return (
        <motion.div 
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >

            <div className="h-[60px] border-r-[6px] border-dotted border-[#7965C1] z-5 mb-1"></div>

            <img
                src={rocketIcon}
                alt="Rocket Icon"
                className="w-[10vh] h-[10vh] z-10 bg-transparent"
                style={{ transformOrigin: 'center' }}
            />

            <div className="h-[60px] border-r-[6px] border-dotted border-[#7965C1] z-5 mt-1"></div>

        </motion.div>
    );
}
