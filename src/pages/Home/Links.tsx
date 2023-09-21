import { Link } from 'react-router-dom';
import tvIcon from "../../assets/tv.svg";
import bookIcon from "../../assets/book.svg";

export function Links() {
  return (
    <div className="w-full lg:w-max flex gap-10 items-center justify-center">
      <Link 
        to="/study" 
        className="w-[20rem] h-[8rem] text-[1.8rem] text-white font-bold flex items-center justify-center gap-2 rounded-lg py-10 px-4 bg-primary-violet_hover transition-colors hover:bg-violet-500">
        <img src={bookIcon} alt="" />
        Estudar
      </Link>
      <Link 
        to="/give_classes" 
        className="w-[20rem] h-[8rem] text-[1.8rem] text-white font-bold flex items-center justify-center gap-2 rounded-lg py-10 px-4 bg-green-500 transition-colors hover:bg-green-600">
        <img src={tvIcon} alt="" />
        Dar aulas
      </Link>
    </div>
  )
}