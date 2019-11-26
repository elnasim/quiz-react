import React from "react";
import "./MainPage.scss";

export default ({ startQuiz, title }) => {
  return (
    <div className='main-page page'>
      <div className='container'>
        <div className='main-page__title'>{title}</div>
        <div className='main-page__btn button' onClick={() => startQuiz()}>
          Старт
        </div>
      </div>
    </div>
  );
};
