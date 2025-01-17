import { colors } from "../../../services/Colors";

const AngelCard = ({angel}) => {

  return(
    <div className="h-72 flex flex-col items-center border-2 rounded-2xl bg-white" style={{borderColor: colors.secondary}}>
      <img src={angel.image} className="h-64 bg-white" />
      <p className="w-full h-full flex items-center justify-center rounded-b-xl" style={{backgroundColor: colors.secondary}}>{angel.name}</p>
    </div>
  );
  
}

export default AngelCard;