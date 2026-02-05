import React, { useState } from "react";

function FormPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "" || email === "") {
      setError("All fields required!");
    } else {
      setError("");
      alert("Form Submitted!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controlled Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>

        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/><br/>

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <button>Submit</button>

      </form>
    </div>
  );
}

export default FormPage;
