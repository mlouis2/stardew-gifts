import './Column.css';

function ItemResults(props) {
    const results = props["results"]
    const items = []
    results.forEach(result => {
        items.push(<div key={result} className="itemEntry">{result}</div>)
    })
    return <div>{items}</div>
}

export default ItemResults;