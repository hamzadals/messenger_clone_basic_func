import React, { useEffect, useRef } from 'react'
import './Messages.css'
const Messages = ({username,message}) => {
const isUser = username ===message.username;
// console.log(username)

const messagesEndRef = useRef(null)

const scrollToBottom = () => {
  messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
}

useEffect(scrollToBottom, [Messages]);
return(
  <>
<h3 className={`messages ${isUser && 'messages_user'}`}> <span>{!isUser &&<i>{message.username} : </i>}</span> {message.message}</h3>
<div className="cf"></div>
<div className="end" ref={messagesEndRef} />
</>
  );
}
export default Messages