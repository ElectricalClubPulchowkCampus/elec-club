import {motion} from "framer-motion"

export default function CommitteeMember({number, name, position, quote, image, flip, socials }) {
  const baseClasses = "flex flex-col md:flex-row md:flex-nowrap items-center justify-center md:justify-between p-10 max-w-screen-lg mx-auto space-x-4";
  
  const socialIcons = {
    facebook: "fab fa-facebook-f text-[#1877F2]",
    instagram: "fab fa-instagram bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent",
    linkedin: "fab fa-linkedin-in text-[#0077B5]",
    github: "fab fa-github text-[#181717]",
    discord: "fab fa-discord text-[#5865F2]"
  };

  const socialLinks = Object.entries(socials).map(([platform, url]) => {
    if (!url) return null; 
    return (
      <a
        key={platform}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
        aria-label={platform}
      >
        <i className={socialIcons[platform]}></i>
      </a>
    );
  });
  
  const content = (
    <div className="flex items-center justify-center md:flex-row flex-col">
      <div className={`w-[80vw] max-w-[300px] rounded-full aspect-square overflow-hidden border-4 border-slate-800 md:w-[50%] md:max-w-none ${flip ? 'md:order-2' : 'order-1'}`}>
        <img src={image} alt={`${position.toLowerCase()}-photo`} className="w-full h-full object-cover" />
      </div>
      <div className={`text-lg text-slate-800 p-4 w-full md:w-[50%] text-center md:text-left ${flip ? 'order-1' : 'order-2'} flex flex-col items-center`}>
        <p className="text-4xl font-bold text-center">{name}</p>
        <p className="text-2xl text-center">{position}</p>
        <p className="italic text-center p-2">"{quote}"</p>
        <div className="flex text-3xl pt-4 text-center">
          {socialLinks}
        </div>
      </div>
    </div>
  );

  return(
  <motion.div
    className={`flex flex-col md:flex-row items-center justify-center mt-10 px-4 ${
      flip ? "md:flex-row-reverse" : ""
    }`}
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
    whileHover={{ scale: 1.05 }}
  >
    <div className={baseClasses}>
      {flip ? [...content.props.children].reverse() : content}
    </div>
  </motion.div>
  )
}
