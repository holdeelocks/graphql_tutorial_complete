import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";
import gql from "gql-tag";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;
const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends Component {
  state = {
    login: true,
    email: "",
    password: "",
    name: ""
  };

  handleChange = ({ target: name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { login, email, password, name } = this.state;
    return (
      <div>
        <h4 className="mv3">{login ? "Login" : "Sign Up"}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              name="name"
              value={name}
              onChange={this.handleChange}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            name="email"
            type="text"
            onChange={this.handleChange}
            placeholder="Your email address"
          />
          <input
            name="password"
            value={password}
            type="password"
            onChange={this.handleChange}
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <div className="pointer mr2 button" onClick={() => this._confirm()}>
            {login ? "login" : "create account"}
          </div>
          <div className="pointer button" onClick={() => this.setState({ login: !login })}>
            {login ? "need to create an account?" : "already have an account?"}
          </div>
        </div>
      </div>
    );
  }
}

const _confirm = async () => {};

const _saveUserData = token => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export default Login;
