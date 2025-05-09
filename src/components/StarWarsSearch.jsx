import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StarWarsSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [allPeople, setAllPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const res = await axios.get("https://www.swapi.tech/api/people");
        const peopleDetails = await Promise.all(
          res.data.results.map(person =>
            axios.get(person.url).then(r => r.data.result.properties)
          )
        );
        setAllPeople(peopleDetails);
      } catch (error) {
        console.error("Error fetching Star Wars characters", error);
      }
    };

    fetchPeople();
  }, []);

  useEffect(() => {
    const filtered = allPeople.filter(person =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
  }, [search, allPeople]);

  return (
    <div style={{ padding: "2rem" }} className="container">
      <h2>Buscar Personajes de Star Wars</h2>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {results.map((p, i, r) => (
          <li key={i}>
            <strong>{p.name}</strong> - Altura: {p.height}, Género: {p.gender}, <br />Color de piel: {p.skin_color}
          </li>
        ))}
      </ul>
      <br />
      <Link to="/"><button>Volver</button></Link>
    </div>
  );
}

export default StarWarsSearch;
