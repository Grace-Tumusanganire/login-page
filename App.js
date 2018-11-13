import React, { Component } from "react";
import "./App.css";
import Input from "./components/TextInput/TextInput";
import CustomButton from "./components/Buttons/CustomButton";
//import HomeView from "./components/Home/HomeView";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }
  onChangeTextInput = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  onSend = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          {/* <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>Home</li>
              <li>Contact</li>
              <li>AboutUs</li>
            </ul>
          </div> */}
        </div>
        <h1>SheCanCode</h1>
        <div className="login-form">
          <Input
            label="Email"
            type="email"
            placeholder="me@example.com"
            value={this.state.email}
            onChange={e => this.onChangeTextInput(e, "email")}
          />
          <div className="login">
            <Input
              label="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.onChangeTextInput(e, "password")}
              style
            />
          </div>

          <CustomButton title="Send" onClick={() => this.onSend()} />
        </div>
      </div>
    );
  }
}
