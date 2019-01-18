import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from "../constants";

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="flex pal justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Hacker News</div>
          <Link to="/" className="mli no-underline black">
            new
          </Link>
          {authToken && (
            <div className="flex">
              <div className="mli">|</div>
              <Link to="/create" classname="mli no-underline black">
                submit
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="mli pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                this.props.history.push("/");
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login" className="mli no-underline black">
              login
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
