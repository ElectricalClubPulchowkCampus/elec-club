import backgroundImg from "../assets/images/iotesp32.jpg";

export default function IotSlide() {
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
                IoT With ESP8266
                <p className="text-white text-base pt-8 font-bold">
                    📅 26 Dec - 30 Dec, 2025
                </p>
                <p className="text-white text-base mt-2 font-medium">
                    Dive into the world of Internet of Things with ESP8266 Microcontroller!
                </p>
                <a
                href="https://drive.google.com/drive/folders/1j6z4HXictE6_1RjrGD9T1TJgnzKRFFLZ?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-black font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    See glimpses👀
                </a>
            </div>
          </div>
        </>
    )
}