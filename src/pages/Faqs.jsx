import {motion} from "framer-motion"
import FAQCards from "../components/FAQCards"
import React from "react"

const QnA = [
    {question: "What is the Electrical Club, Pulchowk?", answer: "The Electrical Club is a dynamic and student-driven organization at the Institute of Engineering, Pulchowk Campus, specifically operated by students of the Electrical  Engineering Department. Its primary aim is to foster innovation, hands-on learning, and collaboration among students interested in the fields of electrical engineering, electronics, embedded systems, and robotics. The club acts as a bridge between theoretical classroom learning and practical application by organizing technical events, facilitating project development, and encouraging student-led research and innovation. Over the years, it has become a hub for like-minded students to explore ideas, showcase talents, and contribute to the broader engineering community."},
    {question: "Can I become a member of the Electrical Club?", answer: "You can't directly become an executive member. But if you're from the Electrical Department of Pulchowk Campus, you're already a general member of the Electrical Club! You're encouraged to share your opinions, join in on club activities, and get involved in ongoing projects. First-year students are introduced to the club through an orientation session, and you can stay connected and updated through our Discord channel, which is linked on the Electrical Club Facebook page."},
    {question: "Do I need prior technical knowledge to be involved?", answer: "No prior technical experience is required to be involved in the club. The club is designed to be inclusive and beginner-friendly. Whether you're just starting out or already have some technical skills, there are opportunities to learn, contribute, and grow. Beginner-level workshops and mentorship programs are conducted regularly to help new members get up to speed with basic tools, software, and hardware platforms used in projects."},
    {question: "Does the club collaborate with external organizations or companies?", answer: "Yes, the Electrical Club is open to collabarations with various industries, academic institutions, NGOs, and startups. These collaborations could be in the form of sponsored events, expert sessions, technical support or mentorship. Partnering with external organizations would allow students to gain real-world exposure, network with professionals, and work on practical problems beyond the academic curriculum."},
    {question: "How can alumni get involved with the club?", answer: "Alumni play an important role in the growth of the Electrical Club. They can contribute by mentoring current students, giving talks about their professional experiences, offering internship opportunities, helping with sponsorship, or acting as judges in competitions. We actually encourage the alumni to help us in any way they can and to maintain an alumni network for long-term collaboration."},
    {question: "What activities does the club organize?", answer: "The Electrical Club has been actively conducting workshops on tools like Proteus, PCB design, MATLAB, and ETAP to strengthen practical skills among students. We've also started a podcast series to share insights and experiences from the field. In collaboration with various groups, we've been reaching out to schools to promote hands-on learning and technical awareness. Looking ahead, we’re planning more exciting initiatives, including sessions on IoT and embedded systems, to further expand learning beyond the classroom."},
    {question: "Why should I help the club out with activities?", answer: "Firstly, we'd be genuinely thankful for your support - whether it's helping during events, managing logistics, or contributing to ongoing projects. Your involvement makes a real difference in how smoothly things run and how much we can achieve as a team. We try our best to acknowledge active contributors through certificates and, occasionally, small gifts or tokens of appreciation. But more than that, it’s a chance to gain experience, meet like-minded people, and be part of something that grows with your input."},
    {question: "How can I stay updated on club activities?", answer: "You can stay updated with the help of this website, or by following us on our social media platforms like Facebook, Instagram, and LinkedIn; where we post event updates and highlights. Join our Discord server for real-time discussions and announcements. You can also reach out through our official email. All links are available on our website."},    
]


export default function Faqs(){
    return(
        <main className="pt-24 overflow-x-hidden overflow-y-hidden flex flex-wrap flex-col items-center justify-center">
            <motion.div 
                className="text-5xl font-bold text-[#5004a0] text-center my-5 mb-12 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{once:true, amount:0.01 }}  
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                FAQs
            </motion.div>
            <motion.div 
                className="flex flex-col items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate= {{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {QnA.map((qa, key) => {
                    return(
                    <React.Fragment key={key}>
                        <FAQCards key={key} number={key} question={qa.question} answer={qa.answer}/>
                    </React.Fragment>)
                })}
            </motion.div>
        </main>
    )
}