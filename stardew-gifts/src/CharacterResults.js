import './Column.css';
import portraits from './data/portraits/portraitLoader.js'

function CharacterResults(props) {
    const results = props["results"]
    const items = []
    results.forEach(result => {
        items.push(
            <div key={result} className="characterEntry">
                <img className="characterPortrait" src={portraits[result]}></img>
                <div className="characterName">{result}</div>
            </div>
        )
    })
    return <div className="CharacterResultsContainer">{items}</div>
}

export default CharacterResults;