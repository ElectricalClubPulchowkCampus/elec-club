export default function Sponsors() {
  const sponsorGroups = [
    {
      category: "Associate Sponsors",
      sponsors: [
        {
          name: "Nepal Power Engineering and Fabricators",
          logo: "https://i.postimg.cc/nV90fPB7/NPEFLogo-removebg-preview.png",
        },
      ],
    },
    {
      category: "Ride Partner",
      sponsors: [
        {
          name: "Tootle",
          logo: "https://i.postimg.cc/HkVqq2Yh/Tootle-Logo.png",
        },
      ],
    },
    {
      category: "Green Partner",
      sponsors: [
        {
          name: "The Plant Room",
          logo: "https://i.postimg.cc/8j3zhcyT/The-Plant-Room-Logo.jpg",
        },
      ],
    },

  ];

  return (
    <section className="pt-12 px-4">
      <h2 className="text-2xl font-extrabold text-center text-[#5004a0] mb-8">
        Our Proud Sponsors
      </h2>

      {sponsorGroups.map((group, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-base font-semibold text-center text-gray-800 mb-6">
            {group.category}
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {group.sponsors.map((sponsor, i) => (
              <div
                key={i}
                className="w-full sm:w-[40%] md:w-[30%] bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="w-20 h-20 object-contain mb-3"
                />
                <p className="text-center text-gray-700 font-medium text-sm">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
