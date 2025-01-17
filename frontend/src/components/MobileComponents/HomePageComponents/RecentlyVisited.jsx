const RecentlyVisited = () => {
  let angel = { 
    id: 1, 
    image: "https://www.sonnyangel.com/renewal/wp-content/uploads/2023/02/sunflower_lion_blue.png",
    name: "Rabbit",
    type: "Mini Figure (Limited)",
    series: "Kiss Kiss"
  };

  return (
    <div className="w-full h-32 items-center">
      {
        angel 
        ?
        <div className="flex items-center rounded-xl mx-4 p-1" style={{backgroundColor: 'rgba(240, 233, 233, 0.2)'}}>
            <div className="w-32 h-32 flex items-center rounded-xl overflow-hidden bg-white">
              <img
                className="w-32 h-36 object-cover bg-white"
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
        <div className="flex items-center rounded-xl mx-4 p-1" style={{backgroundColor: 'rgba(240, 233, 233, 0.2)'}}>
            <div className="w-32 h-32 flex items-center rounded-xl overflow-hidden bg-white">
              <img
                className="w-32 h-36 object-contain bg-white"
                src="https://png.pngtree.com/png-clipart/20240502/original/pngtree-cute-cat-sad-cartoon-illustration-png-image_14995989.png"
                alt="Rabbit Angel"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold">No angels visited yet...</p>
            </div>
          </div>
      }
    </div>
  );
};

export default RecentlyVisited;
