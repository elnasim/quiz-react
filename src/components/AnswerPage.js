import React from "react";
import "./AnswerPage.scss";
import CustomInput from "./CustomInput";

export default ({ id, dataQuestion, nextPage, prevPage, changeAnswer }) => {
  return (
    <div className='answer-page page'>
      <div className='container'>
        <div className='answer-page__title'>{dataQuestion.question}</div>
        <div className='answer-page__answers'>
          {dataQuestion.answers.map(item => {
            return (
              <CustomInput
                text={item.text}
                isChecked={item.checked}
                changeAnswer={changeAnswer}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </div>
        <div className='answer-page__buttons'>
          <div className='answer-page__btn button' onClick={() => prevPage()}>
            Назад
          </div>
          <div className='answer-page__btn button' onClick={() => nextPage()}>
            Далее
          </div>
        </div>
      </div>
    </div>
  );
};
