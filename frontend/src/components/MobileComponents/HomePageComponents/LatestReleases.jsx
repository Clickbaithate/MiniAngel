import React from "react";
import { colors } from "../../../services/Colors";

const LatestReleases = () => {
  const releases = [
    { id: 1, image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2025/01/Rabbit.png" },
    { id: 2, image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2025/01/Fennec.png" },
    { id: 3, image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2025/01/Elephant.png" },
    { id: 4, image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2025/01/Cat.png" },
    { id: 5, image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2025/01/Mouse.png" },
  ];

  return (
    <div className="w-full mt-[64px]">
      <div className="flex items-center justify-between px-6 py-2">
        <h2 className="font-bold">Latest Releases</h2>
        <button className="py-1 px-4 rounded-xl font-bold" style={{backgroundColor: colors.secondary}}>View</button>
      </div>
      <div className="flex overflow-x-scroll space-x-4 px-6 scrollbar-hide">
        {releases.map((release) => (
          <div key={release.id} className="flex-shrink-0 w-56 h-64 bg-white rounded-2xl border-2" style={{borderColor: colors.secondary}} >
            <img src={release.image} className="w-full h-full object-contain pb-6 rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestReleases;
