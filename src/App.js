import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import MessageContainer from "./components/MessageContainer";
import React from "react";
import { handleAiDimag } from "./utils";
import DavidChants from "./components/DavidChants";

let messages = [
  {
    message: "Hi, how can I help you?",
    isSender: false,
  },
];

function App() {
  const [messageList, setMessageList] = React.useState(messages);

  const handleSend = (message) => {
    setMessageList((prev) => [
      ...prev,
      {
        message,
        isSender: true,
      },
    ]);
    setTimeout(() => {
      setMessageList((prev) => [
        ...prev,
        {
          message: handleAiDimag(message),
          isSender: false,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="App">
      <DavidChants />
      <MessageContainer messages={messageList} onSend={handleSend} />
    </div>
  );
}

export default App;
