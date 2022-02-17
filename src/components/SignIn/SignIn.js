import React, { Component } from "react";

import FormInput from "../FormInputComponent/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/Firebase.utils";

import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.state({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an Account</h2>
        <span>Sign in with you Email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            typeof="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            typeof="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
