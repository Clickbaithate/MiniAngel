const DiaryFeed = ({entries}) => {

  return(
    <div className="flex flex-col overflow-y-scroll space-y-6">
      {
        entries.map((entry, i) => (
          <div className="bg-pink-200 w-full h-[700px] flex flex-col items-center justify-evenly border-4 border-pink-300 rounded-md">
            <img className="w-[95%] h-[80%] rounded-md mt-[-18px]" src={entry.image} />
            <p className="px-4 text-center font-polaroid text-2xl">{entry.body}</p>
          </div>
        ))
      }
    </div>
  );

}

export default DiaryFeed;