import React, { useState } from "react";
import "./Form.scss";

export default ({ sendData, data, contacts }) => {
  return (
    <div className='page'>
      <div className='container'>
        <form className='form' onSubmit={e => sendData(e)}>
          <div className='container'>
            <div className='form__title'>Отправка формы</div>
            <label className='form-label'>
              <input
                type='text'
                className='form__input'
                placeholder='Введите имя'
                value={contacts.name}
              />
            </label>
            <button className='form__btn button'>Отправить</button>
          </div>
        </form>
        <div className='send-data'>
          {data.questions.map(item => {
            return (
              <div key={item.id}>
                Ответ на вопрос "{item.question}":
                {item.answers.map(item => {
                  if (item.checked) {
                    return <span key={item.id}>{item.text}</span>;
                  }
                })}
              </div>
            );
          })}
          <div>Контакт: </div>
        </div>
      </div>
    </div>
  );
};
