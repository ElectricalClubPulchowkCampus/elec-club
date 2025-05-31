import {motion} from "framer-motion"

export default function CommitteeMember({ name, position, quote, image, flip }) {
  const baseClasses = "flex flex-col md:flex-row md:flex-nowrap items-center justify-center md:justify-between p-10 max-w-screen-lg mx-auto space-x-4";

  const content = (
    <>
      <div className={`w-[80vw] max-w-[300px] rounded-full aspect-square overflow-hidden border-4 border-black md:w-[50%] md:max-w-none ${flip ? 'md:order-2' : 'order-1'}`}>
        <img src={image} alt={`${position.toLowerCase()}-photo`} className="w-full h-full object-cover" />
      </div>
      <div className={`text-lg p-4 w-full md:w-[60%] text-center md:text-left ${flip ? 'order-1' : 'order-2'} flex flex-col items-center`}>
        <p className="text-4xl font-bold text-center">{name}</p>
        <p className="text-2xl text-center">{position}</p>
        <p className="italic text-center">-"{quote}"</p>
      </div>
    </>
  );

  return(
    <motion.div
      className={`flex flex-col md:flex-row items-center justify-center my-10 px-4 ${
        flip ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={baseClasses}>
        {flip ? 
        [...content.props.children].reverse() 
        : content}
      </div>
    </motion.div>
  )
}
