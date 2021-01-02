import './Column.css';
import portraits from './data/portraits/portraitLoader.js'
import { getPreference, valuesToEmoji } from "./preferenceGetter.js"

function CharacterResults(props) {
    const results = props["results"];
    const item = props["item"];
    const entryOnClick = props["entryOnClick"];

    const items = [];
    results.forEach(result => {
        items.push(
            <div onClick={() => entryOnClick(result)} key={result} className="characterEntry">
                <img className="characterPortrait" src={portraits[result]}></img>
                <div className="characterName">{result}</div>
                {(item === undefined || item === null ? null :
                    <div className="preferenceEmoji" title={getPreference(result, item) === -1 ? "Gifting info unknown. This could be because the item was released in a recent update, or because it is a quest item or special item." : ""}>
                        {valuesToEmoji[getPreference(result, item)]}
                    </div>
                )}
            </div>
        )
    })
    return <div className="CharacterResultsContainer">{items}</div>
}

export default CharacterResults;