import {motion} from "framer-motion"

export default function ImageCard({number, imageURL, description}) {
    return(
        <motion.div 
            className="flex flex-row flex-wrap items-center justify-center"
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
        >
            <div className="w-[80%] max-w-[600px] aspect-[1.30] border border-black overflow-hidden">
            <img
                src={imageURL}
                alt={description}
                className="w-full h-full object-cover"
            />
            </div>
        </motion.div>
    )
}