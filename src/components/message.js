import React from "react";
import {
  useEffect,
  useState,
  useParams
} from "react";
import axios from 'axios'

const Message = (props) => {
  const id = props.match.params.id;
  const [message, setMessage] = useState();
  console.log(id)
  // console.log(id);
  const [loading, setLoading] = useState(false)

  useEffect(()  => {
    axios.get(`https://minitwitterbackend.herokuapp.com/messages/${id}`)
      .then((data) => {
        setMessage(data)
        setLoading(true)
      })

  }, []);

  // const singleMessage = text.filter((message) => message._id === id);
  // console.log(singleMessage[0]);

  console.log(message)

  // if (!message) {
  //   return <h1 > Loading... < /h1>
  // }

  return (
  <div className='mssg'>
    {loading && (
      <div className='mssg1'>
     <h3> {message.data.userId.name} wrote :</h3>
    <p>{message.data.text}</p>
    <h1> Userid: {message.data.userId._id}</h1>
    </div>
    )}
  </div>

  )
};

export default Message;