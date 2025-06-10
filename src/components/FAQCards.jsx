export default function FAQCards({number, question, answer}) {
    const borderClass = `p-8 w-[80%] text-[#5004a0] text-2xl font-bold border-b border-black ${number? '' : 'border-t' }`;
    return (
        <div 
            className={borderClass}
        >
            {question}
            <p className="text-base text-gray-700 text-justify md:text-xl font-normal mt-4">{answer}</p>
        </div>
    );
}
