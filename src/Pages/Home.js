import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const contactsCollectionRef = collection(db, "contacts");

  useEffect(() => {
    const getContacts = async () => {
      const data = await getDocs(contactsCollectionRef);
      setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getContacts();
  }, [contacts]);

  const deleteContact = async (id) => {
    const userDoc = doc(db, "contacts", id);
    await deleteDoc(userDoc);
  };

  return (
    <div className="contacts">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th></th>
            <th></th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.contact}</td>
                <td>
                  <Link to={`update/${contact.id}`}>
                    <button>Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
