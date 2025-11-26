import backgroundImg from "../assets/images/proteus&pcb.jpg";

export default function PCBSlide() {
    return(
        <>
          <div
            className="absolute inset-0 h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
          </div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

          <div className="absolute inset-0 z-10 flex flex-row items-center justify-center">
            <div className="text-5xl p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-center flex flex-col items-center justify-center space-y-2">
                Proteus: PCB Design and Fabrication Workshop
                <p className="text-2xl p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-350 to-yellow-500 text-center flex flex-col items-center justify-center space-y-2">
                    Electrified by Litmus Cables
                </p>
                <p className="text-white text-base pt-4 font-bold">
                    📅 June 20  –23, 2025 
                </p>
                <p className="text-white text-base font-bold">
                    📍 Department of Electrical Engineering, Pulchowk Campus
                </p>
                <a
                href="https://drive.google.com/drive/folders/1WbTp8BdrQu2bPpdKKj20AKoJL-vmys5J?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-8 py-3 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-black font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    See glimpses 👀
                </a>
            </div>
          </div>
        </>
    )
}