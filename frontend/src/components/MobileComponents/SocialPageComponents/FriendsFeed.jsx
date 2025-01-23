import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../../services/Colors";

const FriendsFeed = ({ friends }) => {

  return(
    <div className="flex flex-col overflow-y-auto mt-2">
      {friends.map((friend, i) => (
        friend.posts.map((post, i) => (
          <div className="w-full border-t-2 border-gray-100" style={{backgroundColor: colors.background}}>
            <div className="flex items-center justify-between p-2">
              <img src={friend.pfp} className="w-14 h-14 rounded-full" />
              <p className="font-bold">{friend.username}</p>
            </div>
            <img src={post.image} className="w-full h-[700px] bg-contain" />
            <div className="h-20 mx-2 flex flex-col justify-center space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faHeart} className="h-6 text-gray-300" />
                  <p>{post.likes} Likes</p>
                </div>
                <FontAwesomeIcon icon={faBookmark} className="h-6 text-gray-300" />
              </div>
              <p className="">
                <span className="font-bold"> {friend.username} </span> {post.description}
              </p>
            </div>
          </div>
        ))
      ))}
    </div>
  );

}

export default FriendsFeed;