import pandas as pd
import json

# Read in Preferences CSV
preferences = pd.DataFrame(pd.read_csv(open('./data/preferences.csv')))

# Load in items from the first column of dataframe
items_to_indices = preferences.iloc[:, 0].to_dict()
# Flip dict so that indices are values
items_to_indices = {value.lower():key for key, value in items_to_indices.items()}

# Load in characters from the first row of dataframe
characters = list(preferences.head(1).to_dict().keys())[1:]
characters_to_indices = {}
index = 0
for character in characters:
    character = character.lower()
    characters_to_indices[character] = index
    index = index + 1

# Grab the 2D array of preferences
preferences = preferences.drop("Preferences", axis=1).values.tolist()

# Create the result dictionary that can be converted to JSON
result = {}
result["characters_to_indices"] = characters_to_indices
result["items_to_indices"] = items_to_indices
result["preferences"] = preferences

# Create and print JSON
with open('./data/preferences.json', 'w') as f:
    json.dump(result, f)