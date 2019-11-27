import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import AnswerPage from "./components/AnswerPage";
import DATA from "./data.json";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState(DATA);
  const [pageId, setPageId] = useState(0);
  const [contacts, setContacts] = useState("");
  const [showData, setShowData] = useState(false);
  const [error, setError] = useState(false);

  const questions = () => {
    const id = pageId - 1;
    if (pageId > 0 && pageId < data.questions.length + 1) {
      return (
        <AnswerPage
          dataQuestion={data.questions[id]}
          nextPage={nextPage}
          prevPage={prevPage}
          changeAnswer={changeAnswer}
          error={error}
        />
      );
    }
  };

  const startQuiz = () => {
    setPageId(pageId + 1);
  };

  const prevPage = () => {
    setPageId(pageId - 1);
  };

  const nextPage = () => {
    const items = data.questions[pageId - 1].answers.map(item => item.checked);
    const isChecked = items.indexOf(true);
    if (isChecked !== -1) {
      setPageId(pageId + 1);
      setError(false);
    } else {
      setError(true);
    }
  };

  const changeAnswer = id => {
    const changedData = JSON.parse(JSON.stringify(data));
    const item = changedData.questions.find(item => item.id === pageId);
    const answer = item.answers.find(item => item.id === id);
    answer.checked = !answer.checked;
    setData(changedData);
  };

  const sendData = (e, value) => {
    e.preventDefault();
    setContacts(value);
    setShowData(true);
  };

  return (
    <div className="app">
      {pageId === 0 && <MainPage startQuiz={startQuiz} title={data.title} />}
      {questions()}
      {pageId === data.questions.length + 1 && (
        <Form
          sendData={sendData}
          data={data}
          contacts={contacts}
          showData={showData}
        />
      )}
    </div>
  );
}

export default App;
