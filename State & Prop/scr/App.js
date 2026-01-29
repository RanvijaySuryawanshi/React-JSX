import React, { useState } from "react";

function App() {

  const messages = [
    "Hello from Parent!",
    "Welcome to React!",
    "You are learning props!",
    "React is fun!",
    "State changed!"
  ];

  const [message, setMessage] = useState(messages[0]);

  function changeMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>

      <h1>Props and State</h1>

      <button onClick={changeMessage}>
        Change Message
      </button>

      <ChildComponent text={message} />

    </div>
  );
}

export default App;

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.text}</p>
    </div>
  );
}
