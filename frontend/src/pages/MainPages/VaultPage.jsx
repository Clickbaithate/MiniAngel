import BottomNavbar from "../../components/MobileComponents/HomePageComponents/BottomNavbar";
import TopNavbar from "../../components/MobileComponents/HomePageComponents/TopNavbar";
import background from "../../assets/images/home_background.png";
import VaultFilter from "../../components/MobileComponents/VaultPageComponents/VaultFilter";
import { useState } from "react";
import AngelCard from "../../components/MobileComponents/VaultPageComponents/AngelCard";

const VaultPage = () => {

  const liked = [
    {
      name: "Rabbit",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/10/new_rabbit_01-1.jpg",
    },
    {
      name: "Cactus",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/11/old_cactus_01.jpg",
    },
    {
      name: "Calico Cat",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/10/new_calicocat_01-1.jpg",
    },
    {
      name: "Rabbit",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/10/new_rabbit_01-1.jpg",
    },
    {
      name: "Cactus",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/11/old_cactus_01.jpg",
    },
    {
      name: "Calico Cat",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/10/new_calicocat_01-1.jpg",
    },
  ];
  const favorited = [
    {
      name: "Dalmatian",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/11/old_dalmatian_01.jpg",
    },
    {
      name: "Penguin",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/11/old_penguin_01.jpg",
    },
    {
      name: "Whale",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/11/old_whale_01.jpg",
    },
  ];
  const wishlisted = [
    {
      name: "Raspberry Cake",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2018/11/SA_138_01.jpg",
    },
    {
      name: "Mouse",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2025/01/Mouse.png",
    },
    {
      name: "Stuffed Robby",
      image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2020/10/stuffed_robby.png",
    },
  ];

  const getFilteredData = () => {
    switch (currentFilter) {
      case 0:
        return liked;
      case 1:
        return favorited;
      case 2:
        return wishlisted;
      default:
        return liked;
    }
  };

  const [currentFilter, setCurrentFilter] = useState(0);
  
  return(
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-center bg-contain opacity-20 bg-repeat-y" style={{ backgroundImage: `url(${background})` }}/>
      {/* Content */}
      <TopNavbar />
      <div className="overflow-hidden space-y-3 mt-24 flex flex-col mb-28">
        <VaultFilter currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
        <div className="grid grid-cols-2 gap-y-8 gap-x-2 mx-2">
          {getFilteredData().map((angel, i) => (<AngelCard angel={angel} key={i} />))}
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
}

export default VaultPage;