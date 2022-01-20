import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./AddEdit.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const Update = () => {
  const [state, setState] = useState(initialState);
  const contactsCollectionRef = collection(db, "contacts");

  const id = useParams();
  console.log(id);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };

  const handleUpdate = async (id) => {
    const userDoc = doc(db, "contacts", "MVCOc2kmScgWln3YmpfD");
    console.log(userDoc);
    await updateDoc(userDoc,{...state});
  };

  const { name, email, contact } = state;
  return (
    <div className="login-box">
      <h2>Update contact</h2>
      <form>
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
        <a href="#" onClick={handleUpdate}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Update
        </a>
      </form>
    </div>
  );
};

export default Update;
