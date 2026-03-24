import React, { useEffect, useState } from "react";
import axios from "axios";

function API() {
  const [names, setNames] = useState([]);
  const [phones, setPhones] = useState([]);

  useEffect(() => {

   
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setNames(data))
      .catch(err => console.log(err));

   
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setPhones(res.data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Names (Using Fetch)</h2>
      {names.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

      <h2>Phone Numbers (Using Axios)</h2>
      {phones.map(user => (
        <p key={user.id}>{user.phone}</p>
      ))}

    </div>
  );
}

export default API;