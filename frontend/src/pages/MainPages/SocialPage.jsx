import BottomNavbar from "../../components/MobileComponents/HomePageComponents/BottomNavbar";
import TopNavbar from "../../components/MobileComponents/HomePageComponents/TopNavbar";
import FriendsFeed from "../../components/MobileComponents/SocialPageComponents/FriendsFeed";
import Highlight from "../../components/MobileComponents/SocialPageComponents/Highlight";

const SocialPage = () => {
  
  const highlights = [
    { name: "user1", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user2", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user3", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user4", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user5", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user6", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user7", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user8", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user9", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user10", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user11", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
    { name: "user12", image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" },
  ];

  const friends = [
    {
      username: "Clickbait",
      pfp: "https://i.seadn.io/gae/jCQAQBNKmnS_AZ_2jTqBgBLIVYaRFxLX6COWo-HCHrYJ1cg04oBgDfHvOmpqsWbmUaSfBDHIdrwKtGnte3Ph_VwQPJYJ6VFtAf5B?auto=format&dpr=1&w=1000",
      posts: [
        {
          image: "https://i.pinimg.com/736x/d0/39/e8/d039e855799d375a920b9683aad875a7.jpg",
          description: "Exploring the mountains!",
          date: "2025-01-01",
          likes: 2
        },
        {
          image: "https://i.pinimg.com/736x/ba/33/29/ba33295f33b6cab1a49e6096b5d51ea1.jpg",
          description: "A beautiful sunset by the beach.",
          date: "2025-01-03",
          likes: 10
        },
        {
          image: "https://i.pinimg.com/736x/5b/52/52/5b52525aae004f898cb727a79153ef9c.jpg",
          description: "Trying out new hiking trails.",
          date: "2025-01-05",
          likes: 6
        },
        {
          image: "https://i.pinimg.com/736x/16/7c/f9/167cf967fc927aefd58448f4111ebcde.jpg",
          description: "Captured a serene lake view.",
          date: "2025-01-07",
          likes: 14
        },
      ],
    },
    {
      username: "Dr.King",
      pfp: "https://tr.rbxcdn.com/180DAY-b6ac0e95aa39d5d87719894bee90c31a/420/420/Hat/Webp/noFilter",
      posts: [
        {
          image: "https://i.redd.it/jbwketjc4mxa1.jpg",
          description: "Just finished an amazing book!",
          date: "2025-01-02",
          likes: 18
        },
        {
          image: "https://i.pinimg.com/736x/09/77/2f/09772fe7262839afbcda7318fe1c647d.jpg",
          description: "Had the best coffee in town.",
          date: "2025-01-06",
          likes: 22
        },
      ],
    },
    {
      username: "Mon3y D. Luffy",
      pfp: "https://i.pinimg.com/200x/d1/51/24/d15124fdc0e11ed7b824a62b0f876887.jpg",
      posts: [
        {
          image: "https://i.pinimg.com/736x/8f/5c/b1/8f5cb1de6984cbc7b83b6aa3c40580b4.jpg",
          description: "Loving the new art gallery downtown.",
          date: "2025-01-04",
          likes: 56
        },
        {
          image: "https://i.pinimg.com/736x/56/65/6a/56656ac91d200d97780a0e2c1715efeb.jpg",
          description: "Weekend vibes with friends at the park.",
          date: "2025-01-08",
          likes: 124
        },
        {
          image: "https://i.pinimg.com/736x/e2/c7/dc/e2c7dc4a1eda1eb9c88642ec34ee3b3e.jpg",
          description: "Homemade pasta for dinner!",
          date: "2025-01-10",
          likes: 200
        },
      ],
    },
    {
      username: "Fool",
      pfp: "https://i.pinimg.com/236x/36/d2/73/36d2734e1df4b3d338a40652281d9e66.jpg",
      posts: [
        {
          image: "https://i.pinimg.com/736x/cf/a2/04/cfa204c15422ae125ce083fb8c26b079.jpg",
          description: "The city lights never get old.",
          date: "2025-01-11",
          likes: 0
        },
      ],
    },
    {
      username: "TimTheTatMan",
      pfp: "https://i.pinimg.com/236x/3e/c9/58/3ec9585530e9a14612fb450e1b075a50.jpg",
      posts: [],
    },
  ];
  

  return(
    <div>
      <TopNavbar/>

      <div className="mt-[88px] mb-24">
        <Highlight highlights={highlights} />
        <FriendsFeed friends={friends} />
      </div>

      <BottomNavbar/>
    </div>
  );

}

export default SocialPage;