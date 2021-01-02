import './Column.css';
import { getPreference, valuesToEmoji } from "./preferenceGetter.js";

function ItemResults(props) {
    const results = props["results"];
    const character = props["character"];
    const entryOnClick = props["entryOnClick"];
    const items = [];

    results.forEach(result => {
        items.push(
            <div key={result} className="itemEntry" onClick={() => entryOnClick(result)}>
                <div className="itemName">{result}</div>
                {(character === undefined || character === null) ? null : 
                    <div className="preferenceEmoji" title={getPreference(character, result) === -1 ? "Gifting info unknown. This could be because the item was released in a recent update, or because it is a quest item or special item." : ""}>
                        {valuesToEmoji[getPreference(character, result)]}
                    </div>
                }
            </div>
        );
    });
    return <div>{items}</div>;
}

export default ItemResults;