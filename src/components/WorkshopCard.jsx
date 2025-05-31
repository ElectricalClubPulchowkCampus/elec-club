import { motion } from "framer-motion";

export default function WorkshopCard({workshopName, date, time, description, completed}){
    return(
        <motion.div
            className="relative p-6 mx-auto max-w-[800px] 
                       bg-gradient-to-br from-fuchsia-100 via-violet-200 to-purple-300 
                       rounded-2xl space-y-4 my-0 text-center w-[80%] z-10 
                       border border-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
        >
            <h2 className="text-2xl font-bold text-fuchsia-800 drop-shadow-sm">{workshopName}</h2>
            <div className="text-purple-800 font-medium drop-shadow-sm flex flex-col">
                <span className="font-semibold text-fuchsia-900">📅 {date}</span>
                <span className="font-semibold text-fuchsia-900">🕒 {time}</span>
                {completed? <span className="font-semibold text-fuchsia-900">✅ Completed</span>:<></>}
            </div>
            <p className="text-purple-900 leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>       
    );
}