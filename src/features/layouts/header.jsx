import logo from "@/assets/images/cluby.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container header">
      <img src={logo} alt="" className="logo" />
      <div className="menuList">
        <ul>
          <li>Сургалтууд</li>
          <li>Боломжууд</li>
          <li>Асуулт хариулт</li>
          <li>Холбоо барих</li>
        </ul>
      </div>
      <div className="groupBtn">
        <Link to="/payment"> Захиалах</Link>
      </div>
    </div>
  );
};
