import React from "react";
import Input from "./Input";
import { checkPropTypes } from "prop-types";
function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isRegistered === false ? (
        <Input type="password" placeholder="Conferm Password" />
      ) : null}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
