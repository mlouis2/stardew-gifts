import { useState } from 'react';
import './Column.css';
import ItemResults from './ItemResults.js';
import { items } from "./preferenceGetter.js"

const MAX_ITEMS_DISPLAYED = 15;

function Item(props) {
  const characterSelected = props["characterSelected"];
  const setItemSelected = props["callback"];

  const [results, setResults] = useState(items.slice(0, MAX_ITEMS_DISPLAYED));

  function entryOnClick(itemSelected) {
    // Capitalize first letter in each word so it matches search results
    let new_words = []
    itemSelected.split(" ").forEach((word) => {
      new_words.push(word[0].toUpperCase() + word.substring(1));
    })
    itemSelected = new_words.join(" ");
    // Set the input box value and then update the search results
    document.getElementById("itemInput").value = itemSelected;
    updateInput(itemSelected, true);
  }

  function onChange(e) {
    updateInput(e.target.value);
  }

  // Filter exact returns only one result that is an exact string match.
  // This is used for cases where one item is a substring of another,
  // i.e. "Pumpkin" and "Pumpkin Seeds"
  function updateInput(search, filterExact=false) {
    search = search.toLowerCase();
    const result = (filterExact)
      ? items.filter(item => item === search) 
      : items.filter(item => item.includes(search)).slice(0, MAX_ITEMS_DISPLAYED);
    setItemSelected((result.length === 1) ? result[0] : null);
    setResults(result)
  }

  return (
    <div className="Item">
        <h1>Item</h1>
        <input id="itemInput" onChange={onChange} placeholder="Green Algae"></input>
        <ItemResults results={results} character={characterSelected} entryOnClick={entryOnClick} />
    </div>
  );
}

export default Item;
