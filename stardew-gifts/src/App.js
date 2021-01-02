import { useState } from 'react';
import './App.css';
import Item from './Item.js';
import Character from './Character.js';
const titleImage = require("./data/title.png");

function App() {
  const [characterSelected, setCharacterSelected] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Content">
        <div className="Key">
          <div id="KeyPairingContainer">
            <div className="KeyPairing">
              😡<br/>Hate
            </div>
            <div className="KeyPairing">
              👎<br/>Dislike
            </div>
            <div className="KeyPairing">
              😐<br/>Neutral
            </div>
            <div className="KeyPairing">
              😄<br/>Like
            </div>
            <div className="KeyPairing">
              ❤️<br/>Love
            </div>
          </div>
        </div>
        <div className="Columns">
          <Character itemSelected={itemSelected} callback={setCharacterSelected}/>
          <Item characterSelected={characterSelected} callback={setItemSelected}/>
        </div>
      </div>
    </div>
  );
}

export default App;
