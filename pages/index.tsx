import React, { useState, useEffect } from "react";
import { requestNotifications, sendNotification } from "../utils/helper";
import { Message } from "../components/message";
import firebase from "../firebase/firebase";
import "firebase/firebase-firestore";

const Home = () => {
  const [questions, updateQuestions] = useState([]);
  const [newQuestion, questionState] = useState("");
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("jsRealmChat")
      .orderBy("time", "asc")
      .onSnapshot((querySnapshot: any) => {
        const QUESTIONS = [];
        querySnapshot.forEach(doc => {
          QUESTIONS.push(doc.data());
        });
        updateQuestions(QUESTIONS);
      });
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   requestNotifications();
  // }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const lastQuestion = questions[questions.length - 1];
      const elm = document.getElementById(lastQuestion.time);
      // sendNotification(lastQuestion.question);
      elm.scrollIntoView();
    }
  }, [questions]);

  function insertNewQuestion() {
    const data = {
      question: newQuestion,
      time: Date.now().toString()
    };
    firebase
      .firestore()
      .collection("jsRealmChat")
      .add(data);
    questionState("");
  }
  return (
    <>
      <section className="wrapper">
        <section className="left-container">
          <img
            src="./images/javascript.png"
            alt="Javascript Logo"
            className="js_image"
          />
        </section>
        <section className="right-container">
          <h1 className="heading">Welcome to JSRealm</h1>
          <p className="help-text">
            Please ask your questions here, so we can immediatey share with the
            speaker
          </p>
          <section className="message-area" id="message-area">
            {questions && questions.length === 0 && (
              <p className="help-text">No questions yet !!</p>
            )}
            {questions.map((question, index) => (
              <Message
                key={`key-${index}`}
                message={question.question}
                time={question.time}
              />
            ))}
          </section>
          <div className="chat_box">
            <textarea
              value={newQuestion}
              onChange={que => questionState(que.target.value)}
              name="question"
              placeholder="Please enter your question here"
              className="chat_input"
            />
            <button onClick={insertNewQuestion} className="chat_send">
              SEND
            </button>
          </div>
        </section>
      </section>
      <style jsx>
        {`
          .heading {
            text-align: center;
            font-size: 25px;
            font-weight: bold;
          }

          .help-text {
            text-align: center;
          }

          .message-area {
            margin-top: 25px;
            padding: 10px 20px;
            overflow: scroll;
            height: 350px;
          }

          .chat_box {
            width: auto;
            background-color: #fff;
            border-radius: 6px;
            margin: 15px 25px;
            padding: 8px;
            border: 2px solid #ddd;
            display: flex;
            height: 45px;
          }

          .chat_input {
            font-size: 14px;
            line-height: 1.2;
            width: auto;
            border-radius: 6px;
            border: 0.5px solid #eee;
            resize: none;
            flex-basis: 80%;
            padding: 5px;
            outline: #fac552;
          }

          .chat_send {
            text-transform: uppercase;
            background-color: #fac552;
            border-radius: 6px;
            padding: 8px 16px;
            line-heigt: 1.2;
            margin-left: 10px;
            flex-basis: 20%;
          }

          .js_image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .wrapper {
            display: flex;
            height: 100%;
            flex-direction: row;
            flex-wrap: wrap;
          }

          .right-container {
            flex: 1;
            background-color: #fac552;
          }

          .left-container {
            display: none;
          }

          @media (min-width: 480px) {
            .left-container {
              display: block;
              flex: 1;
            }

            .message-area {
              margin-top: 25px;
              padding: 10px 20px;
              overflow: scroll;
              height: 450px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          html,
          body,
          #__next {
            height: 100%;
          }
          body {
            margin: 0px;
            padding: 0px;
            font-family: "Lato", sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default Home;
