import {motion} from "framer-motion"
import ImageCard from "../components/ImageCard"

const photos = [
  {
    URL: "https://www.austintec.com/wp-content/uploads/2024/05/what-do-electrical-engineers-do.jpg",
    description: "test",
  },
  {
    URL: "https://images.squarespace-cdn.com/content/v1/625b62eff476f3155f94feb1/44fad8e0-405b-440a-b9c7-d6739844065c/pexels-pixabay-257736.jpg",
    description: "test",
  },
  {
    URL: "https://electricalinstallationservices.co.uk/wp-content/uploads/2021/02/Commercial-Electrician-Near-Me-London-scaled.jpeg",
    description: "test",
  },
  {
    URL: "https://raviniaplumbing.com/wp-content/uploads/2023/08/Common-Electrical-Tools-to-Know-About-1-scaled.jpg",
    description: "test",
  },
  {
    URL: "https://cdn.prod.website-files.com/6390e14cc734a931f8327343/65124e6e62de0dee470a5bcf_image4.jpg",
    description: "test",
  },
  {
    URL: "https://www.propcert.co.uk/wp-content/uploads/2024/02/shutterstock_435917491-min-scaled.jpg",
    description: "test",
  },
  {
    URL: "https://tus.ie/app/uploads/Study/FlexibleProfessional/CourseImages/Electrical_Eng-2-scaled.jpg",
    description: "test",
  },
  {
    URL: "https://www.thoughtco.com/thmb/KEXYeuqtI767jt1XqkObGqM_Xtw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-144635668-1d9932afb0cd44a2ad33b1f0329d6ec6.jpg",
    description: "test",
  },
  {
    URL: "https://www.gradschoolcenter.com/wp-content/uploads/2022/09/Best-Online-Doctor-of-Electrical-Engineering-featured-image.jpg",
    description: "test",
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
                    EC Talks
                    <p className="text-base font-normal p-2 flex text-center">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </motion.div>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/lgkdX1DgGz4?si=6cgrjAsMcRwhN9ZK" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    className="m-auto w-[70%] h-auto aspect-video max-w-[700px] flex-wrap"
                    allowFullScreen>
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
            <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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