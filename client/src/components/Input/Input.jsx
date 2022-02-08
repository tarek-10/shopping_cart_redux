import React from "react";

function Input(props) {
  return (
    <>
      <label>{props.label}</label>
      <input type={props.type} name={props.name} onChange={props.onChange} />
    </>
  );
}

export default Input;
