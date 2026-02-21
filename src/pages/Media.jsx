import {motion} from "framer-motion"
import ImageCard from "../components/ImageCard"

const photos = [
  {
    URL: "https://i.ibb.co/wHhgfMp/IMG-5955.jpg",
    description: "Our tutor Ainul explaining the etching process.",
  },
  {
    URL: "https://i.ibb.co/S7sKHQG2/IMG-5713.jpg",
    description: "Students working on their task, and the mentors helping them.",
  },
  {
    URL: "https://i.ibb.co/k2NC35Hx/IMG-6054.jpg",
    description: "Our president Dikshant helping the students.",
  },
  {
    URL: "https://i.ibb.co/VpT69MX7/IMG-6033.jpg",
    description: "Our resource manager and tutor Ainul, explaining soldering.",
  },
  {
    URL: "https://i.ibb.co/0pCKbxLS/IMG-6188.jpg",
    description: "Mentors exchanging knowledge and laughs.",
  },
  {
    URL: "https://i.ibb.co/BKwDcMFQ/IMG-6737.jpg",
    description: "Our innovative lead and tutor Binit explaining etching process.",
  },
  {
    URL: "https://i.ibb.co/gLz4Tnvd/IMG-6357.jpg",
    description: "Happy face after toner transfer onto the copper board :)",
  },
  {
    URL: "https://i.ibb.co/Gf3F82Vg/IMG-6774.jpg",
    description: "Students showing off their soldering skills through matrix board.",
  },
  {
    URL: "https://i.ibb.co/cK1L0NKm/IMG-6908.jpg",
    description: "Drilling process during PCB design.",
  },
  {
    URL: "https://i.ibb.co/TBNcvrRv/IMG-7016.jpg",
    description: "Astable multivibrator we made during PCB workshop!",
  },
  {
    URL: "https://i.ibb.co/DPpY4vZM/IMG-7105.jpg",
    description: "Students showing off their copper board after the etching process :D",
  },
  {
    URL: "https://i.ibb.co/zWQSrn84/IMG-6219.jpg",
    description: "Our resource manager and tutor Ainul teaching a student about soldering.",
  },
  {
    URL: "https://i.ibb.co/r2SNVrdN/IMG-5582.jpg",
    description: "Our event manager and tutor Nawed teaching the students about PCB layout.",
  },
  {
    URL: "https://i.ibb.co/MxVmDQzB/IMG-5837.jpg",
    description: "Our mentor and treasurer Sanjita teaching the students.",
  },
  {
    URL: "https://i.ibb.co/Fbhy7wYY/IMG-5842.jpg",
    description: "Our exec Lakhan teaching the students.",
  },
  {
    URL: "https://i.ibb.co/twVVvSzz/IMG-5897.jpg",
    description: "Our execs and mentor exchanging laughs :)",
  },
    {
    URL: "https://i.ibb.co/Z6bp6LSj/IMG-20251125-122100.jpg",
    description: "Our president teaching in One Day Workshop initiative :).",
  },
  {
    URL: "https://i.ibb.co/Q4NvXNc/IMG-20251125-151337.jpg",
    description: "One day workshop at CCRC.",
  },
  {
    URL: "https://i.ibb.co/7d05S7t4/IMG-20251125-153448.jpg",
    description: "Students connecting their circuits in the one day workshop.",
  },
  {
    URL: "https://i.ibb.co/xq8jm9KW/IMG-20251125-161113.jpg",
    description: "One day workshop at CCRC :)",
  }
];

export default function Media(){
    return(
        <main className="pt-24">
            <div className="flex flex-col md:flex-row items-center justify-between p-4 w-[100%]">
                <motion.div 
                    className="text-3xl font-bold text-[#5004a0] m-auto items-center text-center my-5 mb-8 flex flex-col p-4 md:w-[50%]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{once:true, amount: 0.3 }}  
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    EC Talks 3.0
                    <p className="text-base font-normal p-2 flex text-center">
                        EC Talks is a conversational series hosted by the Electrical Club of Pulchowk Campus, where we bring together students, alumni, and professionals to share their journeys, experiences, and insights in the field of electrical and electronics engineering. Whether it's navigating university life, exploring career paths, or diving into cutting-edge tech, EC Talks aims to educate, inspire, and connect our community through meaningful discussions and real-world stories.
                    </p>
                </motion.div>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/660UXsXYl60?si=QDNy21RX3IraL4sd" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
                </iframe>
            </div>
            <motion.div 
                className="text-3xl font-bold text-[#5004a0] m-auto items-center text-center my-5 mb-8 flex flex-col p-4 md:w-[50%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once:true, amount: 0.3 }}  
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Photo Gallery
            </motion.div>
            <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((photo, i) => (
                        <ImageCard
                            key={i}
                            number={i}
                            imageURL={photo.URL}
                            description={photo.description}
                        />
                ))}
            </div>
        </main>
    )
}