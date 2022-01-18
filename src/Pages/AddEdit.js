import React, { useState, useEffect } from "react";
import { useHistory, useParms } from "react-router-dom";
import "./AddEdit.css";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const contactsCollectionRef = collection(db, "contacts");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(contactsCollectionRef, state);
  };

  const { name, email, contact } = state;
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form >
        <div className="user-box">
          <input
            type="text"
            name="name"
            value={name}
            id="name/"
            placeholder="Your name..."
            onChange={handleInputChange}
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="email"
            value={email}
            id="email/"
            placeholder="Your email..."
            onChange={handleInputChange}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="contact"
            value={contact}
            id="contact/"
            placeholder="Your contact..."
            onChange={handleInputChange}
          />
          <label>Phone number</label>
        </div>
        <a href="#" onClick={handleSubmit}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default AddEdit;
