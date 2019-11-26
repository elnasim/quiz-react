import React from "react";
import "./AnswerPage.scss";
import CustomInput from "./CustomInput";

export default () => {
  return (
    <div className="answer-page page">
      <div className="container">
        <div className="answer-page__title">Lorem ipsum dolor sit amet.</div>
        <div className="answer-page__answers">
          <CustomInput text={"text"} />
          <CustomInput text={"text"} />
          <CustomInput text={"text"} />
        </div>
        <div className="answer-page__buttons">
          <div className="answer-page__btn button">Далее</div>
        </div>
      </div>
    </div>
  );
};
