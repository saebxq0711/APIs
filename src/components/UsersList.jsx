import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Error al cargar usuarios", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }} className="container">
      <h2>Usuarios de JSON Placeholder</h2>
      <ul className="users-list">
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
      <br />
      <Link to="/"><button>Volver</button></Link>
    </div>
  );
}

export default UsersList;
