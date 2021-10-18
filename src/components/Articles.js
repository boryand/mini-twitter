import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Articles() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://minitwitterbackend.herokuapp.com/messages")
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  console.log(messages);

  return (
    <div className="articleDIVparent">



      {messages &&
        messages.map((message, index) => (
          <div className="articleDIV" key={index}>
            <Link to={`/messages/${message._id}`}>
              {" "}
              <h5> Tweet </h5>{" "}
            </Link>
            {message.text}
          </div>
        ))}
    </div>
  );
}

export default Articles;
