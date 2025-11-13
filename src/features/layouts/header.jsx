import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className="groupBtn">
        <Link to="/payment"> Захиалах</Link>
        <button>Kidspace</button>
      </div>
    </div>
  );
};
