import "../Header/Header.scss";
import { MdAccessTime } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import "./Header.scss";
import Logout from '../Others/Logout/Logout';
import LogoutDropdown from '../Others/Logout/LogoutDropdown';
import { useState } from 'react';


const Header = ({handleOpenSearchBar}) => {

  const [isLogoutDropdownOpen, setLogoutDropdownOpen] = useState(false);

  const handleOpenLogoutDropdown = () => {
    setLogoutDropdownOpen(true);
  }

  const handleCloseLogoutDropdown = () => {
    setLogoutDropdownOpen(false);
  }

  return (
    <header className="searchbar-container">
      <section className="header-history header-flex-center">
        <MdAccessTime className="header-side-icons" />
      </section>

      <section className="header-search">
        <button className="header-search-btn" title="header-search-btn" onClick={handleOpenSearchBar}>
          <FiSearch className="icon" />
          <span>Search Group 3</span>
        </button>
      </section>

      <section className="header-help header-flex-center">
        <IoIosHelpCircleOutline className="header-side-icons" />
      </section>
      
      <Logout handleOpen={handleOpenLogoutDropdown}/>
        {isLogoutDropdownOpen && <LogoutDropdown handleClose={handleCloseLogoutDropdown} />}
 
    </header>
  );
};

export default Header;
