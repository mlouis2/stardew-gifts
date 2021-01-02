import './Column.css';
const preferences_json = require('./data/preferences.json');
const characters_to_indices = preferences_json["characters_to_indices"];
const items_to_indices = preferences_json["items_to_indices"];
const preferences = preferences_json["preferences"]

const values_to_emoji = {
    0: "😡",
    1: "👎",
    2: "😐",
    3: "😄",
    4: "❤️"
}
values_to_emoji[-1] = "❓";

function ItemResults(props) {
    const results = props["results"]
    const character = props["character"]
    const items = []

    function getPreference(character, item) {
        const character_index = characters_to_indices[character];
        const item_index = items_to_indices[item];
        return preferences[item_index][character_index];
    }

    results.forEach(result => {
        if (character === undefined || character === null) {
            items.push(<div key={result} className="itemEntry">{result}</div>)
        } else {
            const preference = getPreference(character, result);
            items.push(
                <div key={result} className="itemEntry">
                    {result}
                    <div className="preferenceEmoji">
                        {values_to_emoji[preference]}
                    </div>
                </div>
            )
        }
    })
    return <div>{items}</div>
}

export default ItemResults;