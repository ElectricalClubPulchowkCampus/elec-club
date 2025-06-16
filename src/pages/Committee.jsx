import CommitteeMember from "../components/CommitteeMember";
import {motion} from "framer-motion";


const members = [
  {
    name: "Dikshant Dahal",
    position: "President",
    quote: "Any sufficiently advanced technology is indistinguishable from magic.",
    flip: false,
    link: "https://i.postimg.cc/N00m8gTW/Dikshant.jpg",
    social: {
      facebook: "https://www.facebook.com/share/19PGZjJfea/",
      linkedin: "https://www.linkedin.com/in/dikshant-dahal-9000a5362"
    }
  },
  {
    name: "Nischal Neupane",
    position: "Vice President",
    quote: "Anyone who thinks the sky is the limit, has limited imagination.",
    flip: true,
    link: "https://i.postimg.cc/QMkhMNMc/Nischal.jpg",
    social: {
      facebook: "https://www.facebook.com /nischal.neupane.3998",
      instagram: "https://www.instagram.com/neu.nischal_official/",
      linkedin: "https://www.linkedin.com/in/nischal-neupane-51b3b2218/"
    }
  },
  {
    name: "Madhu Karn",
    position: "Secretary",
    quote: "Organizing with precision and purpose.",
    flip: false,
    link: "https://i.postimg.cc/GmDbZxw7/Madhu.jpg",
    social: {
      facebook: "https://www.facebook.com/madhu.karn.313",
      instagram: "https://www.instagram.com/madhu.karn.313?igsh=MXc2MG96NG5xYXpyaA=="
    }
  },
  {
    name: "Sanjita Yogi",
    position: "Treasurer",
    quote: "Energy is eternal delight.",
    flip: true,
    link: "https://i.postimg.cc/BbwqGhny/Sanjita.jpg",
    social: {
      facebook: "https://www.facebook.com/sanjita.k.chettri",
      instagram: "https://www.instagram.com/sanjitaaaa__"
    }
  },
  {
    name: "Nawed Ahmad",
    position: "Event Manager",
    quote: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
    flip: false,
    link: "https://i.postimg.cc/ZqhJZvJT/Nawed.jpg",
    social: {
      facebook: "https://www.facebook.com/MohammadNawedAhmad",
      linkedin: "https://www.linkedin.com/in/nawedahmad"
    }
  },
  {
    name: "Ainul Haque Ansari",
    position: "Resource Manager",
    quote: "The only way to do great work is to love what you do.",
    flip: true,
    link: "https://i.postimg.cc/L6wHC07g/Ainul.jpg",
    social: {}
  },
  {
    name: "Samrat Manandhar",
    position: "Research Lead",
    quote: "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    flip: false,
    link: "https://i.postimg.cc/Bbx9Mvnq/Samrat.jpg",
    social: {}
  },
  {
    name: "Binit Neupane",
    position: "Innovative Lead",
    quote: "It is what it is.",
    flip: true,
    link: "https://i.postimg.cc/FRTvjP3R/Binit.jpg",
    social: {
      facebook: "https://www.facebook.com/binit.neupane.9",
      instagram: "https://www.instagram.com/binit_neupane/",
      linkedin: "https://www.linkedin.com/in/bin1o1/",
      github: "https://github.com/bin1o1", 
      discord: "https://discordapp.com/users/1251806702425342057"
    }
  },
  {
    name: "Aayusha Budhathoki",
    position: "Social Media Manager",
    quote: "I dance through life with curiosity in my mind and purpose in my heart.",
    flip: false,
    link: "https://i.postimg.cc/2jHjv57w/Aayusha.jpg",
    social: {
      facebook: "https://www.facebook.com/aayusha.budhathoki.12",
      instagram: "https://www.instagram.com/aay_uu4?igsh=Z2hhc29pbm03aHk3",
      linkedin: "https://www.linkedin.com/in/aayusha-budhathoki-8b1751369"
    }
  }
];

export default function Committee() {
  return (
    <main className="pt-24 overflow-x-hidden overflow-y-hidden flex flex-col items-center justify-center">
      <motion.p 
        className="text-5xl font-bold text-[#5004a0] text-center mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{once:true, amount: 0.01 }}  
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Club Committee
      </motion.p>
      {members.map((member, i) => (
        <CommitteeMember
          key={i}
          number={i}
          name={member.name}
          position={member.position}
          quote={member.quote}
          image={member.link}
          flip={member.flip}
          socials={member.social}
        />
      ))}
    </main>
  );
}
