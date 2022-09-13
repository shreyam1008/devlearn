import "./Header.css";

import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo_image">
        <img src={logo} alt="logo" height="50px" />
      </div>
      <div className="site_name"> we learn </div>
      <div className="user_image">
        <img src={user} alt="users" height="50px" />
      </div>
    </header>
  );
};

export default Header;
