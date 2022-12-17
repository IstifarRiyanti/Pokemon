import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import Homepage from "./page/Homepage"
import Location from "./page/Location";
import Pokemons from "./page/Pokemons";
import Login from "./page/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/location" element={<Location />} />
      <Route path="/location/:id" element={<Pokemons />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
