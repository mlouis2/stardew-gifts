import { useEffect, useState } from 'react';
import './Column.css';
import CharacterResults from './CharacterResults.js';
const preferences_json = require('./data/preferences.json');
const names = Object.keys(preferences_json["characters_to_indices"]).map(name => name.toLowerCase())

function Character(props) {
  const setCharacterSelected = props["callback"];

  const [results, setResults] = useState(names);

  function onChange(e) {
    const search = e.target.value.toLowerCase();
    const result = names.filter(name => name.includes(search));
    if (result.length === 1) {
      setCharacterSelected(result[0])
    } else {
      setCharacterSelected(null)
    }
    setResults(result)
  }

  return (
    <div className="Character">
        <h1>Character</h1>
        <input onChange={onChange} placeholder="Penny"></input>
        <CharacterResults results={results} />
    </div>
  );
}

export default Character;
