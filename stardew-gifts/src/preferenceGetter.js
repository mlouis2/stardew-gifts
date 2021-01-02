const preferencesJson = require('./data/preferences.json');
const charactersToIndices = preferencesJson["characters_to_indices"];
const itemsToIndices = preferencesJson["items_to_indices"];
const preferences = preferencesJson["preferences"]

const valuesToEmoji = {
    0: "😡",
    1: "👎",
    2: "😐",
    3: "😄",
    4: "❤️"
}
valuesToEmoji[-1] = "❓";

const names = Object.keys(charactersToIndices).map(name => name.toLowerCase())
const items = Object.keys(itemsToIndices).map(name => name.toLowerCase())

function getPreference(character, item) {
    const characterIndex = charactersToIndices[character];
    const itemIndex = itemsToIndices[item];
    return preferences[itemIndex][characterIndex];
}

export { getPreference, valuesToEmoji, names, items };