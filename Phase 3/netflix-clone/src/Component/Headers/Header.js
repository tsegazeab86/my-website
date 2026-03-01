import React from "react";
import "./header.css";
import netfliximage from "../../assets/images/Netflix.png";
// import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={netfliximage} alt="Tsegaye" width="40%" />{" "}
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>Tvshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            {/* <li><SearchIcon></SearchIcon></li>
            <li>{NotificationsIcon}</li>
            <li>{AccountBoxIcon}</li>
            <li>{ArrowDropDownIcon}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
