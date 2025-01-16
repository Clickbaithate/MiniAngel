const RecentlyCollected = () => {
  let angel = { 
    id: 1, 
    image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2022/07/morning-glow.png",
    name: "Rabbit",
    type: "Mini Figure (Limited)",
    series: "Kiss Kiss"
  };

  return (
    <div className="w-full h-32 items-center mx-6">
      {
        angel 
        ?
          <div className="flex items-center">
            <div className="w-32 h-32 rounded-xl overflow-hidden bg-white">
              <img
                className="w-full h-full object-cover"
                src={angel.image}
                alt="Rabbit Angel"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold">{angel.name}</p>
              <p className="italic">{angel.type}</p>
              <p className="italic">{angel.series} Series</p>
            </div>
          </div>
        :
          <div className="flex items-center">
            <div className="w-32 h-32 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://png.pngtree.com/png-clipart/20240502/original/pngtree-cute-cat-sad-cartoon-illustration-png-image_14995989.png"
                alt="Rabbit Angel"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold">No angels collected yet...</p>
            </div>
          </div>
      }
    </div>
  );
};

export default RecentlyCollected;
