import { useState } from 'react';
import './Column.css';
import CharacterResults from './CharacterResults.js';
import { names } from "./preferenceGetter.js";

function Character(props) {
  const itemSelected = props["itemSelected"];
  const setCharacterSelected = props["callback"];

  const [results, setResults] = useState(names);

  function entryOnClick(characterSelected) {
    characterSelected = characterSelected[0].toUpperCase() + characterSelected.substring(1);
    document.getElementById("characterInput").value = characterSelected;
    updateInput(characterSelected);
  }

  function onChange(e) {
    updateInput(e.target.value);
  }

  function updateInput(search) {
    search = search.toLowerCase();
    const result = names.filter(name => name.includes(search));
    setCharacterSelected((result.length === 1) ? result[0] : null);
    setResults(result);
  }

  return (
    <div className="Character">
        <h1>Character</h1>
        <input id="characterInput" onChange={onChange} placeholder="Abigail"></input>
        <CharacterResults results={results} item={itemSelected} entryOnClick={entryOnClick}/>
    </div>
  );
}

export default Character;
