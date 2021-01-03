import { useState } from 'react';
import './Column.css';
import ItemResults from './ItemResults.js';
import { items, getLoves } from "./preferenceGetter.js";

const MAX_ITEMS_DISPLAYED = 20;

function Item(props) {
  const characterSelected = props["characterSelected"];
  const setItemSelected = props["callback"];

  const [results, setResults] = useState(items.slice(0, MAX_ITEMS_DISPLAYED));
  const [amountMissingResults, setAmountMissingResults] = useState(items.length - MAX_ITEMS_DISPLAYED);

  function entryOnClick(itemSelected) {
    // Capitalize first letter in each word so it matches search results
    let new_words = [];
    itemSelected.split(" ").forEach((word) => {
      new_words.push(word[0].toUpperCase() + word.substring(1));
    });
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
    let result = (filterExact)
      ? items.filter(item => item === search) 
      : items.filter(item => item.includes(search))
    if (result.length > MAX_ITEMS_DISPLAYED) {
      setAmountMissingResults(result.length - MAX_ITEMS_DISPLAYED);
    } else {
      setAmountMissingResults(0);
    }
    result = result.slice(0, MAX_ITEMS_DISPLAYED);
    updateResults(result);
  }

  function updateResults(resultsList) {
    setItemSelected((resultsList.length === 1) ? resultsList[0] : null);
    setResults(resultsList);
  }

  function showLoves() {
    setAmountMissingResults(0);
    const loves = getLoves(characterSelected);
    document.getElementById("itemInput").value = "";
    updateResults(loves);
  }

  return (
    <div className="Item">
        <h1>Item</h1>
        <input id="itemInput" onChange={onChange} placeholder="Amethyst"></input>
        {(characterSelected !== null && characterSelected !== undefined) ? 
          <div onClick={showLoves} className="checkLovesButton">
            Show {characterSelected[0].toUpperCase() + characterSelected.substring(1)}'s loved gifts! 🔎
          </div>
        : null}
        <ItemResults results={results} character={characterSelected} entryOnClick={entryOnClick} />
        {amountMissingResults === 0 ? null :
          <div id="ResultLimitationsMessage">Displaying {MAX_ITEMS_DISPLAYED} out of {amountMissingResults + MAX_ITEMS_DISPLAYED} results.</div>
        }
    </div>
  );
}

export default Item;
