import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const url = "http://localhost:4000";
  const [users, setUsers] = useState([]);
  const getAllUser = () => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }
  
  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      <h1>User</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
