import { useState } from 'react';
import './Column.css';
import ItemResults from './ItemResults.js';

const MAX_ITEMS_DISPLAYED = 150;
const preferences_json = require('./data/preferences.json');
const items = Object.keys(preferences_json["items_to_indices"]).map(name => name.toLowerCase())

function Item() {

  const [results, setResults] = useState(items.slice(0, MAX_ITEMS_DISPLAYED));

  function onChange(e) {
    const search = e.target.value.toLowerCase();
    const result = items.filter(item => item.includes(search)).slice(0, MAX_ITEMS_DISPLAYED);
    setResults(result)
  }

  return (
    <div className="Item">
        <h1>Item</h1>
        <input onChange={onChange} placeholder="Green Algae"></input>
        <ItemResults results={results} />
    </div>
  );
}

export default Item;
