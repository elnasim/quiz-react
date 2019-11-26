import React, { useState } from "react";
import "./CustomInput.scss";

export default ({ text }) => {
  return (
    <label className="custom-input__label">
      <input className="custom-input__checkbox" type="checkbox" value={text} />
      <span className="custom-input__body">
        <span className="custom-input__text">{text}</span>
      </span>
    </label>
  );
};
