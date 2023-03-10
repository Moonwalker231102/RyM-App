import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

const onSearch = (id) => {
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "68a24ac3f484.c4d7fd8d55cdb9ba4f36"
  if (characters.find((char) => char.id === id)) { 
    alert("Character already exist");
    return;
  }
  fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
    .then((response) => response.json())
    .then(data => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert('No hay personajes con ese ID');
      }
    });
};

const onClose = (id) => { 
  setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
};

  return (
    <div className={style.App}>
      <div className={style.Nav}>
        <Nav onSearch={onSearch} />
      </div>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>

    </div>
  )
}

export default App
