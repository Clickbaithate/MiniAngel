import { useLocation } from "react-router-dom";
import TopNavbar from "../../components/MobileComponents/HomePageComponents/TopNavbar";

const SearchPage = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const [currentType, setCurrentType] = "Mini Figure (Regular)";
  const [currentSeries, setCurrentSeries] = "Vegetable";

  const types = [1, 2, 3, 4, 5, 6];
  const series = [1, 2, 3, 4, 5, 6];
  const angels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="relative">
      <TopNavbar query={query} />
      <div className="mt-24 relative h-[calc(100vh-112px)]">
        {/* Filters Section */}
        <div className="absolute top-0 left-0 w-full bg-white">
          <div className="flex overflow-x-auto scrollbar-hide mb-2">
            {types.map((type, i) => (
              <div key={i} className="flex-shrink-0 w-24 h-12 bg-red-500">
                f
              </div>
            ))}
          </div>
          <div className="flex overflow-x-auto scrollbar-hide mb-4">
            {series.map((serie, i) => (
              <div key={i} className="flex-shrink-0 w-24 h-12 bg-pink-500">
                f
              </div>
            ))}
          </div>
        </div>
        {/* Scrollable Angels Grid */}
        <div className="absolute top-28 left-0 w-full h-[calc(100%-96px)] overflow-y-auto scrollbar-hide">
          <div className="grid gap-4">
            {angels.map((angel, i) => (
              <div key={i} className="w-full h-96 bg-pink-500">
                f
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
