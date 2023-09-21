import { Link } from "react-router-dom";;
import backIcon from "../../assets/left arrow.svg";
import logoIcon from "../../assets/proffy.svg";

export function PreviousLinks() {
  return (
    <div className="w-full flex items-center justify-between">
      <Link to="/">
        <img src={backIcon} alt="ArrowLeft" />
      </Link>
      <Link to="/">
        <img src={logoIcon} alt="Proffy" className="w-[8rem]" />
      </Link>
    </div>
  );
}
