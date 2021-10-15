import React from "react";
import { useEffect, useState, useParams } from "react";

const Message = ({ match }) => {
  const id = match.params.id;
  const [message, setMessage] = useState();
  console.log(id);

  useEffect(() => {
    fetch("https://minitwitterbackend.herokuapp.com/messages/" + id)
      .then((response) => response.json())
      .then((data) => setMessage(data));
  }, []);

  // const singleMessage = text.filter((message) => message._id === id);
  // console.log(singleMessage[0]);

  console.log(message)

  if (!message) {
    return <h1>Loading...</h1>
  }

  return <div className='message1'>
    <div className='message2'>
  <h3>  {message.userId.name} wrote :</h3>
    
    {message.text}
    </div>
    
    </div>;
};

export default Message;

