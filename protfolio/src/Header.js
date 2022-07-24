import { createBrowserHistory } from "history";
import React, { Component } from "react";
import { Link } from "react-router-dom";
const history = createBrowserHistory();

const Header = (children) => {
  
  var HeaderStyle = {
    display: "inline-block",
    margin: 10,
    marginBottom: 30,
  };

  var A = {
    textDecoration: "none",
  };

  //   return (
  //     <div>
  //       <h3 style={HeaderStyle}>
  //         <Link to={"/"}>Home</Link>
  //       </h3>
  //       <h3 style={HeaderStyle}>
  //         <Link to={"/jokes"}>Jokes</Link>
  //       </h3>
  //     </div>

  //   );

  return (
    <div>
      <div>
        <h3 style={HeaderStyle}>
          <a style={A} href="/">
            Homes
          </a>
        </h3>

        <h3 style={HeaderStyle}>
          <a style={A} href="/jokes">
            Jokes
          </a>
        </h3>
      </div>
      {children}
    </div>
  );
};

export default Header;
