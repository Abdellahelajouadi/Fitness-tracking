
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, ] = useState(false);
  

  
  return (
    <section className="contact">
      <form >
        <h1>CONTACTEZ-NOUS</h1>
        <div>
          <label>Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Envoyer un message
        </button>
      </form>
    </section>
  );
};

export default Contact;