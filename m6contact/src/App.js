import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3111/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3111/createUser", {
      name,
      email,
      subject,
      message,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          email,
          subject,
          message,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <header>
        <h1>DATACOM</h1>
        <ul>
          <li>Solutions</li>
          <li>Industries</li>
          <li>Discover</li>
          <li>About us</li>
          <li>Careers</li>
        </ul>
      </header>
      <div className="form">
        <label className="label" for="name">
          Your Name
        </label>
        <input
          type="text"
          className="name"
          id="name"
          placeholder="Andy Kim"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label className="label" for="email">
          Your Email
        </label>
        <input
          type="text"
          className="email"
          id="email"
          placeholder="Andykim@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label className="label" for="subject">
          Your Subject
        </label>
        <input
          type="text"
          className="subject"
          id="subject"
          placeholder="Do you have any food?"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <br />
        <br />
        <label className="label" for="message">
          Leave a Message
        </label>
        <input
          type="text"
          className="message"
          id="message"
          placeholder="I am hungry."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={createUser}>Contact Us</button>
      </div>

      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h3>Name:{user.name}</h3>
              <h3>Email:{user.email}</h3>
              <h3>Subject:{user.subject}</h3>
              <h3>Message:{user.message}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
