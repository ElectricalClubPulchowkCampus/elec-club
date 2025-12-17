import { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

export default function ContactUs() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const scriptURL = "https://script.google.com/macros/s/AKfycbzCavjg2PKwXWazVXNgeB5tBgLs0mz3Umw7Wc-IJsmoVOL2t0XMaJIYjFyE6aGkNqAc/exec"

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("message", formData.message);

        try {
            const res = await fetch(scriptURL, {
                method: "POST",
                body: data,
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Message sent!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error("Failed to send message.");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong.");
        } finally {
            setIsSending(false);
        }
    };

    const inputClassName =
        "border border-gray-400 rounded-md p-3 text-gray-700 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#5004a0]";

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <main className="pt-24">
                <div className="flex flex-col md:flex-row items-center p-4 md:h-[80vh]">
                    <motion.div
                        className="text-5xl font-bold text-[#5004a0] text-center my-5 mb-8 flex flex-col md:w-[50%]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.01 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Contact Us
                        <p className="text-base font-normal p-4">
                            Thinking of something exciting or just want to reach out? Whether you're a fellow student,
                            future partner, or a curious mind, we’d love to connect and create something awesome together!
                        </p>
                        <div className="flex space-x-5 text-4xl items-center justify-center">
                            <a href="https://www.facebook.com/electricalclubpc/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/electricalclubpc/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/electrical-club-pulchowk-campus/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="http://www.youtube.com/@electricalclubioe" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://discord.gg/N2sqKmJE" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-discord"></i>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="w-[90%] md:w-[60%] max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-[#5004a0]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.01 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >                
                        <form onSubmit={handleSubmit}>
                            <label className="block text-sm font-medium text-[#5004a0] mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className={inputClassName}
                                required
                            />

                            <label className="block text-sm font-medium text-[#5004a0] mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className={inputClassName}
                                required
                            />

                            <label className="block text-sm font-medium text-[#5004a0] mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message here..."
                                className={`${inputClassName} min-h-32 max-h-75 resize-y`}
                                required
                            />

                            <button
                            type="submit"
                            className={`mt-4 px-6 py-2 rounded-md w-full transition-all 
                                ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-[#5004a0] hover:bg-[#3e037e] text-white"}`}
                            disabled={isSending}
                            >
                                {isSending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>
        </>
    );
}
