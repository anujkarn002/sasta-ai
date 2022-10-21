import React from "react";
import MessageItem from "./MessageItem";
import Input from "./Input";
import Button from "./Button";

const Messages = ({ messages, onChangeLastMessage }) => {
  const messagesRef = React.useRef(null);

  React.useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  React.useEffect(() => {
    onChangeLastMessage(messages[messages.length - 1]);
  }, [messages, onChangeLastMessage]);

  return (
    <div ref={messagesRef}>
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
    messageContainer: {
      height: "70vh",
      overflowY: "scroll",
      scrollBehavior: "smooth",
      scrollbarWidth: "none"
    },
    bottomContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
  };

  const [inputMessage, setInputMessage] = React.useState("");
  const messagesRef = React.useRef(null);

  const onInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const onSendClick = React.useCallback(() => {
    onSend(inputMessage);
    setInputMessage("");
    // scroll to bottom
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight - 100;
  }, [inputMessage, onSend]);

  const onChangeLastMessage = React.useCallback(() => {
    // scroll to bottom
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messagesRef]);

  return (
    <div>
      <div style={styles.messageContainer} ref={messagesRef}>
        <Messages
          messages={messages}
          onChangeLastMessage={onChangeLastMessage}
        />
      </div>
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
