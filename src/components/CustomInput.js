import React, { useState } from "react";
import "./CustomInput.scss";

export default ({ id, text, changeAnswer, isChecked }) => {
  let style = "";

  if (!isChecked) {
    style = "custom-input__body";
  } else {
    style = "custom-input__body checked";
  }

  return (
    <span className={style} onClick={() => changeAnswer(id)}>
      <span className='custom-input__text'>{text}</span>
    </span>
  );
};
