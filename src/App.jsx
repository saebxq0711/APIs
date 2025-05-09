import { Link } from "react-router-dom";


function App() {
  return (
    <div style={{ padding: "2rem" }} className="container">
      <h1>Integración APIs</h1>
      <Link to="/StarWarsSearch">
        <button>Buscar personajes de Star Wars</button>
      </Link>
      <br /><br />
      <Link to="/UsersList">
        <button>Ver usuarios JSON Placeholder</button>
      </Link>

    </div>
  );
}

export default App;
