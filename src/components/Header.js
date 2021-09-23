import React from "react";
import PropTypes from "prop-types";

import sidebarIcon from '../assets/sidebarOpen.svg';

const Header = props => {

  const { setSidebarOpen } = props;
  const handleSidebarOpenClick = () => {
    setSidebarOpen( (prevState) => !prevState);

  };
  return (
    <header>
      <div className="sidebarIcon">
        <button onClick={handleSidebarOpenClick}>
          <img src={sidebarIcon} alt="Open Sidebar" />
        </button>
      </div>
      <div>
        <h1>Backyard Exchange</h1>
      </div>
    </header>
  );
};

Header.propTypes = {setSidebarOpen: PropTypes.func.isRequired};

export default Header;