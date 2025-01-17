import { colors } from "../../../services/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const VaultFilter = ({currentFilter, setCurrentFilter}) => {

  return(
    <div className="flex justify-evenly mx-6 h-12 rounded-2xl p-1" style={{backgroundColor: colors.accent}}>
      <div className="w-full flex items-center justify-center rounded-2xl" style={{backgroundColor: currentFilter === 0 ? colors.white : colors.accent}} onClick={() => setCurrentFilter(0)}>
        <div className="flex items-center">
          <p className="pr-2">Likes</p>
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center rounded-2xl" style={{backgroundColor: currentFilter === 1 ? colors.white : colors.accent}} onClick={() => setCurrentFilter(1)}>
        <div className="flex items-center">
          <p className="pr-2">Favorites</p>
          <FontAwesomeIcon icon={faBookmark} className="text-yellow-400" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center rounded-2xl" style={{backgroundColor: currentFilter === 2 ? colors.white : colors.accent}} onClick={() => setCurrentFilter(2)}>
        <div className="flex items-center">
          <p className="pr-2">Wishlist</p>
          <FontAwesomeIcon icon={faCartShopping} className="text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default VaultFilter;