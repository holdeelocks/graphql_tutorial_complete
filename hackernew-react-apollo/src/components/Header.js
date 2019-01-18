import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Header extends Component {
  render() {
    return (
      <div className="flex pal justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Hacker News</div>
          <Link to="/" className="mli no-underline black">
            new
          </Link>
          <div className="mli">|</div>
          <Link to="/create" classname="mli no-underline black">
            submit
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
