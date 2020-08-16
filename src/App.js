import React, { useState, useEffect } from "react";
import "./styles.css";
import Messages from "./Messages";
import db from "./firebase";
import firebase from "firebase";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    //setUsername(prompt("Enter User Name : "))
  }, []);
  //import data from firebase database
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  const handleMessages = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    //setMessages([...messages,{username:username,message:input}]);
    setInput("");
  };
  console.log(messages);
  return (
    <div className="App">
      <form action="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={!input} type="submit" onClick={handleMessages}>
          Send
        </button>
      </form>
      {messages.map((message) => (
        <Messages username={username} message={message} />
      ))}
    </div>
  );
}
