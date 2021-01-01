import './App.css';
import Item from './Item.js';
import Character from './Character.js';
const titleImage = require("./data/title.png");

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Content">
        <Character />
        <h1>&nbsp;+&nbsp;</h1>
        <Item />
      </div>
    </div>
  );
}

export default App;
