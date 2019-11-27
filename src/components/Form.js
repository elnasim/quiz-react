import React, { useState } from "react";
import "./Form.scss";

export default ({ sendData, data, contacts, showData }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const sendedData = () => {
    if (showData) {
      return (
        <div className="send-data">
          {data.questions.map(item => {
            return (
              <div key={item.id}>
                Ответ на вопрос "{item.question}": &nbsp;
                {item.answers.map(item => {
                  if (item.checked) {
                    return <span key={item.id}>{item.text} </span>;
                  }
                })}
              </div>
            );
          })}
          <div>Контакт: {contacts}</div>
        </div>
      );
    }
  };

  return (
    <div className="page">
      <div className="container">
        <form className="form" onSubmit={e => sendData(e, value)}>
          <div className="container">
            <div className="form__title">Отправка формы</div>
            <label className="form-label">
              <input
                type="text"
                className="form__input"
                placeholder="Введите имя"
                onChange={handleChange}
                value={value}
              />
            </label>
            <button className="form__btn button">Отправить</button>
          </div>
        </form>
        {sendedData()}
      </div>
    </div>
  );
};
