import { motion } from "framer-motion";

export default function WorkshopCard({number, name, date, time, description, completed, registrationOpen}){
    return(
        <motion.div
            className="relative p-6 mx-auto max-w-[800px] 
                       bg-gradient-to-br from-fuchsia-100 via-violet-200 to-purple-300 
                       rounded-2xl space-y-4 my-0 text-center w-[80%] z-10 
                       border border-purple-500"
            initial={{ opacity: 0, y: 20 }}
            {...(number === 0 || number === 1
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
            whileHover={{ scale: 1.05 }}
        >
            <p className="text-2xl font-bold text-fuchsia-800 drop-shadow-sm">{name}</p>
            <div className="text-purple-800 font-medium drop-shadow-sm flex flex-col">
                <span className="font-semibold text-fuchsia-900">📅 {date}</span>
                <span className="font-semibold text-fuchsia-900">🕒 {time}</span>
                {completed? <span className="font-semibold text-fuchsia-900">✅ Completed!</span>:<></>}
                {registrationOpen? <span>🗒️&nbsp;<a href="https://electricalclubpulchowkcampus.github.io/elec-club" className="text-[#000000] underline">Registration Open!</a></span>:<></>}
            </div>
            <p className="text-purple-900 leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>       
    );
}