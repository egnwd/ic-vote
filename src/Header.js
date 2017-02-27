import React from 'react';

/**
 * Header image for the website
 */
class Header extends React.Component {
  render() {
    return (
      <div>
        <img className={"header"} src={'images/header.svg'}
          alt={"Greenwood - 2017 - Webmaster"}/>
        <div className="cover"></div>
      </div>
    )
  }
}
export default Header;
