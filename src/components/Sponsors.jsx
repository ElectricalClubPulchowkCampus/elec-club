export default function Sponsors() {
  const sponsorGroups = [
    {
      category: "Platinum Sponsor",
      sponsors: [
        {
          name: "Litmus Cables",
          logo: "https://i.postimg.cc/J4rHdzQx/Litmus.jpg",
          url: "https://www.litmus.com.np/", 
        },
      ],
    },
    {
      category: "Associate Sponsor",
      sponsors: [
        {
          name: "Nepal Power Engineering and Fabricators",
          logo: "https://i.postimg.cc/nV90fPB7/NPEFLogo-removebg-preview.png",
          url: "https://www.nepalpowerengineering.com.np/", 
        },
      ],
    },
    {
      category: "Mobility Partner",
      sponsors: [
        {
          name: "Tootle",
          logo: "https://i.postimg.cc/bJ8jsyBt/Tootle-Logo.png",
          url: "https://www.tootle.com.np/", 
        },
      ],
    },
    {
      category: "Media Partner",
      sponsors: [
        {
          name: "Edusanjal",
          logo: "https://i.postimg.cc/bdfr3GGp/Edusanjal-Logo.png",
          url: "https://edusanjal.com/", 
        },
      ],
    },
    {
      category: "Green Partner",
      sponsors: [
        {
          name: "The Plant Room",
          logo: "https://i.postimg.cc/gk1Qxcw2/The-Plant-Room-Logo.png",
          url: "https://www.instagram.com/theplantro0m/", 
        },
      ],
    },
    {
      category: "Styling Parnter",
      sponsors: [
        {
          name: "Looks Salon",
          logo: "https://i.postimg.cc/J4j9sTLG/Looks-Salon-Logo.png",
          url: "https://www.instagram.com/lookssalonnepal/", 
        },
      ],
    },
  ];

  return (
    <section className="py-10 px-6 border-t-2 border-gray-300 mt-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#5004a0] mb-16">
          Our Proud Sponsors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {sponsorGroups.map((group, index) => (
            <div key={index}>
              <h2 className="text-base font-semibold text-gray-700 mb-6 uppercase tracking-wider border-y-2 border-gray-400 py-2">
                {group.category}
              </h2>
              <div className="flex flex-col items-center space-y-6">
                {group.sponsors.map((sponsor, i) => (
                  <a
                    key={i}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="w-28 h-28 object-contain mb-4"
                    />
                    <p className="text-gray-800 font-medium">{sponsor.name}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
