import { useState } from 'react';
import './App.css';
import Item from './Item.js';
import Character from './Character.js';
import Key from './Key.js';
import About from './About.js';
const titleImage = require("./data/title.png");

function App() {
  const [characterSelected, setCharacterSelected] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Content">
        <Key/>
        <div className="Columns">
          <Character itemSelected={itemSelected} callback={setCharacterSelected}/>
          <Item characterSelected={characterSelected} callback={setItemSelected}/>
        </div>
        <About />
      </div>
    </div>
  );
}

export default App;
