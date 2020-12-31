import './App.css';
import Item from './Item.js';
import Character from './Character.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stardew Valley Gift Guide</h1>
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
