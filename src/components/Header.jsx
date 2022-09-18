import "./Header.css";

import logo from "../assets/images/logo.png";
import userImg from "../assets/images/user.png";
import { UserContext, useUserContext } from "../context/userContext";
import { useContext } from "react";

const Header = () => {
  // const { user } = useUserContext();
  const { user, a } = useContext(UserContext);
  return (
    <header className="header">
      <div className="logo_image">
        <img src={logo} alt="logo" height="50px" />
      </div>
      <div className="site_name"> we learn </div>
      <div className="user_image">
        -{user.name}- -{user.balance}
        <img src={userImg} alt="users" height="50px" />
      </div>
    </header>
  );
};

export default Header;
