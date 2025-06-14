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
                Proteus, PCB Design and Fabrication Workshop
                <p className="text-white text-base pt-8 font-bold">
                    📅 June 20  –23, 2025 
                </p>
                <p className="text-white text-base font-bold">
                    🕒 7 AM – 9 AM | 1 PM - 3 PM | 5 PM - 7 PM
                </p>
                <p className="text-white text-base font-bold">
                    📍 Department of Electrical Engineering, Pulchowk Campus
                </p>
                <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeqXQJhmke5LU_jaCBMKY2RcIX2Y6vh45g6bFU7WPFx32NYEA/viewform?fbclid=IwY2xjawK6AzFleHRuA2FlbQIxMABicmlkETFJSU5HSGE4SERDSVcxZ0kwAR4Y2U4jXjQg46nk_vOBYYCThEsGFj6fSQCN68t2CVrVqtKxgtVQFsWHTNtRdQ_aem_Jgu72x6J7sS5gegNGBeAvQ"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    🚀 Register Now !
                </a>
            </div>
          </div>
        </>
    )
}