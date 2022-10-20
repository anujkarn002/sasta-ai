import React from "react";
import MessageItem from "./MessageItem";
import Input from "./Input";
import Button from "./Button";

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <MessageItem
          key={index}
          message={message.message}
          isSender={message.isSender}
        />
      ))}
    </div>
  );
};

const MessageContainer = ({ messages, onSend }) => {
  const styles = {
    container: {
      height: "70vh",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      overflow: "auto",
    },
    bottomContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: 10,
      padding: "10px",
    },
  };

  const [inputMessage, setInputMessage] = React.useState("");

  const onInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const onSendClick = React.useCallback(() => {
    onSend(inputMessage);
    setInputMessage("");
  }, [inputMessage, onSend]);

  return (
    <div style={styles.container}>
      <Messages messages={messages} />
      <div style={styles.bottomContainer}>
        <Input
          name="inputMessage"
          onChange={onInputChange}
          value={inputMessage}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSendClick();
            }
          }}
        />
        <Button onClick={onSendClick}>Send</Button>
      </div>
    </div>
  );
};

export default MessageContainer;
