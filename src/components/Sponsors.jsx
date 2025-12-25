export default function Sponsors() {
  const sponsorGroups = [
    {
      category: "Technology Partner",
      sponsors: [
        {
          name: "Botyards",
          logo: "https://i.postimg.cc/d0BvMWBP/botyards.png",
          url: "https://botyards.com/", 
        },
      ],
    },
  ];

  return (
    <section className="py-10 px-6 border-t-2 border-gray-300 mt-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#5004a0] mb-16">
          Our Proud Sponsor            {/* make it our proud sponsors later */}
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"> */}{/*for multiple sponsors*/  }
        <div className="flex justify-center text-center">
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
