import { useNavigate } from "react-router-dom";
import TopNavbar from "../components/MobileComponents/HomePageComponents/TopNavbar.jsx";
import BottomNavbar from "../components/MobileComponents/HomePageComponents/BottomNavbar.jsx";
import { colors } from "../services/Colors.jsx";
import { useState } from "react";
import background from "../assets/images/home_background.png";

const CollectionPage = () => {
  
  const angels = [
    {
      type: "Mini Figure (Regular)",
      series: [
        {
          series: "Vegetable",
          image: "https://anmeshop.com/cdn/shop/files/s-l1600-2_800x.jpg?v=1695136586", // Image for the series
          angels: [
            { name: "Carrot", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Tomato", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" }, // Replace with the real image URL for Tomato
            { name: "Onion", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" } // Replace with the real image URL for Onion
          ]
        },
        {
          series: "Fruit",
          image: "https://anmeshop.com/cdn/shop/files/ScreenShot2023-09-19at11.17.31AM_1200x1200.png?v=1695136803", // Image for the series
          angels: [
            { name: "Apple", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Banana", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Grapes", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" }
          ]
        },
        {
          series: "Animal",
          image: "https://m.media-amazon.com/images/I/61Yzgn20JxL._AC_UF894,1000_QL80_.jpg", // Image for the series
          angels: [
            { name: "Cat", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Dog", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Rabbit", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" }
          ]
        }
      ]
    },
    {
      type: "Mini Figure (Gift)",
      series: [
        {
          series: "Holiday",
          image: "https://i.ebayimg.com/images/g/ysMAAOSwvZ1kpw3b/s-l1200.jpg", // Image for the series
          angels: [
            { name: "Santa", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Snowman", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Reindeer", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" }
          ]
        },
        {
          series: "Seasonal",
          image: "https://anmeshop.com/cdn/shop/files/s-l1600_13474b83-4490-42d5-9a61-09ab88bdaa11_530x@2x.jpg?v=1696795869", // Image for the series
          angels: [
            { name: "Spring", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Summer", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Autumn", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" }
          ]
        },
        {
          series: "Celebration",
          image: "https://145913631.cdn6.editmysite.com/uploads/1/4/5/9/145913631/s549115173815839472_p1387_i10_w754.png", // Image for the series
          angels: [
            { name: "Birthday Cake", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Fireworks", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Gift Box", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" }
          ]
        }
      ]
    },
    {
      type: "Others",
      series: [
        {
          series: "Fantasy",
          image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2022/05/img_creatures_banner_sp.png", // Image for the series
          angels: [
            { name: "Unicorn", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Dragon", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Mermaid", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" }
          ]
        },
        {
          series: "Space",
          image: "https://cdnx.jumpseller.com/sonny-angel-chile/image/55142575/thumb/1500/1500?1729083776", // Image for the series
          angels: [
            { name: "Rocket", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Planet", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Astronaut", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" }
          ]
        },
        {
          series: "Mystery",
          image: "https://sounds-of-love.myshopify.com/cdn/shop/products/111_055a6409-0452-457d-84b7-fd745f09411d.png?v=1682238007", // Image for the series
          angels: [
            { name: "Detective", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Magnifying Glass", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" },
            { name: "Footprints", image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2019/10/Carrot.png" }
          ]
        }
      ]
    }
  ];

  const [currentType, setCurrentType] = useState(0);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-center bg-contain opacity-20 bg-repeat-y" style={{ backgroundImage: `url(${background})` }}/>
      {/* Content */}
      <TopNavbar />
      <div className="overflow-hidden mt-24">
        {/* Types */}
        <div className="overflow-x-scroll scrollbar-hide">
          <div className="flex space-x-2 w-max mx-6">
            {angels.map((angel, index) => (
              <div
                key={index}
                className="w-48 h-12 flex items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: currentType === index ? colors.secondary : colors.primary,
                }}
                onClick={() => setCurrentType(index)}
              >
                {angel.type}
              </div>
            ))}
          </div>
        </div>
        {/* Series */}
        <div className="grid grid-cols-2 gap-y-4 ml-6 mt-6">
          {angels[currentType].series.map((series, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between w-[180px] h-56 rounded-2xl"
              style={{
                backgroundColor: colors.primary,
              }}
            >
              <img src={series.image} alt={series.series} className="rounded-2xl" />
              <p className="mb-3 text-white font-bold">{series.series}</p>
            </div>
          ))}
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default CollectionPage;
