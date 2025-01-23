import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Highlight = ({ highlights }) => {

  return(
    <div className="flex space-x-2 overflow-x-auto scrollbar-hide mx-4 items-center">
      <div className="relative">
        <div className="w-14 h-14 bg-cover rounded-full flex-shrink-0" style={{ backgroundImage: `url(https://i.pinimg.com/236x/68/31/12/68311248ba2f6e0ba94ff6da62eac9f6.jpg)` }}/>
        <FontAwesomeIcon icon={faAdd} className="bg-pink-400 rounded-full p-1 text-white absolute bottom-2 right-2 transform translate-x-1/2 translate-y-1/2 border-2 border-white"/>
      </div>

      {highlights.map((highlight, i) => (
        <div className="">
          <div key={i} className="w-16 h-16 bg-cover rounded-full flex-shrink-0" style={{backgroundImage: `url(${highlight.image})`}}/>
          <p className="text-center text-xs w-16 text-ellipsis overflow-x-hidden">{highlight.name}</p>
        </div>
      ))}
    </div>
  );

}

export default Highlight;