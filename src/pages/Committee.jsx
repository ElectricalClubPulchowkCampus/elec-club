import CommitteeMember from "../components/CommitteeMember";
import {motion} from "framer-motion";


const members = [
  { name: "Dikshant Dahal", position: "President", quote: "Quote", flip: false },
  { name: "Nishcal Neupane", position: "Vice President", quote: "Quote", flip: true },
  { name: "Madhu Karn", position: "Secretary", quote: "Quote", flip: false },
  { name: "Sanjita Chettri", position: "Treasurer", quote: "Quote", flip: true },
  { name: "Nawed Ahmad", position: "Event Manager", quote: "Quote", flip: false },
  { name: "Ainul Haque Ansari", position: "Resource Manager", quote: "Quote", flip: true },
  { name: "Samrat Manandhar", position: "Research Lead", quote: "Quote", flip: false },
  { name: "Binit Neupane", position: "Innovative Lead", quote: "Quote", flip: true },
  { name: "Aayusha Budhathoki", position: "Social Media Manager", quote: "Quote", flip: false },
];

const placeholderImg = "https://cdn.vectorstock.com/i/500p/29/52/faceless-male-avatar-in-hoodie-vector-56412952.jpg";

export default function Committee() {
  return (
    <main className="pt-24 overflow-x-hidden overflow-y-hidden">
      <motion.p 
        className="text-5xl font-bold text-[#5004a0] text-center mt-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}  
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Club Committee
      </motion.p>
      {members.map((member, i) => (
        <CommitteeMember
          key={i}
          name={member.name}
          position={member.position}
          quote={member.quote}
          image={placeholderImg}
          flip={member.flip}
        />
      ))}
    </main>
  );
}
