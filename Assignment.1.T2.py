                      #-------------------- Assignment 1 --------------------------------
# Program to list all words with vowels in them


print("-- Assignment 1 --")
print("Program to list all words with vowels in them")
# Example story/text
story = "The quick brown fox jumps over the lazy dog"

# Split story into words
words = story.split()

# Vowels list
vowels = "aeiouAEIOU"

# Find words containing vowels
words_with_vowels = [word for word in words if any(v in word for v in vowels)]

# Print result
print("Words with vowels:")
print(words_with_vowels)


print("-------------------- Assignment 2 --------------------------------")
# Story

story = "Azan has a cat. The cat likes milk. Azan plays with the cat."

# Nouns in the story (manually identified)
nouns = ["Azan", "cat", "milk"]

# Store nouns in a List
noun_list = list(nouns)

# Print the List of nouns
print("List of Nouns in the Story:")
print(noun_list)

print("-- Assignment 2-b --")


# Sample Story
story = """Once upon a time, there was a king who ruled a kingdom. 
The kingdom had 2 castles and 3 beautiful gardens. 
The king had a son and a daughter. 
They lived happily with the people of the land."""

# Extracting nouns manually (for assignment purposes, not NLP-based)
nouns = ["time", "king", "kingdom", "castles", "gardens", "son", "daughter", "people", "land"]

# Extracting numbers manually from story
numbers = [2, 3]

# Making the list of nouns
noun_list = nouns.copy()

# Adding nested list of numbers as the last element
noun_list.append(numbers)

# Printing the result
print("List with nouns and nested numbers list:")
print(noun_list)


print("-- Assignment 3-a --")

# story
story = """
Azan has a shirt. he went to the park with his friend Azan. 
They saw a dog and a ball in the garden.
"""

# Predefined nouns in the story
nouns = ("Azan", "shirts", "park", "friend", "Azan", "dog", "ball", "garden")

# Print the tuple of nouns
print("Nouns in the story (Tuple):")
print(nouns)

print("-- Assignment 3-b --")


# Story 
story = "Azan has 2 shirts and 3 perfumes. He went to the party with his friend."

# Step 1: Extract nouns manually (for simplicity, assume we know nouns)
# In real use, you can apply NLP libraries like NLTK/Spacy, but here we stick to basics.
nouns = ("Azan", "shirts", "perfumes", "party", "friend")

# Step 2: Extract numbers from story
numbers = []
for word in story.split():
    if word.isdigit():
        numbers.append(int(word))

# Step 3: Create final tuple with nested tuple for numbers
final_tuple = nouns + (tuple(numbers),)

# Step 4: Print result
print("All Nouns in Story (Tuple):", final_tuple)



print("-------------------- Assignment 4 --------------------------------")

# Assignment 4
# Program to create a Set with all nouns in the story
# Last element is a nested Set with numbers from the story

story = "Azan has 2 cats and 3 dogs. he lives in a house with 1 garden."

# Predefined simple noun list for this example
nouns = {"Azan", "cats", "dogs", "house", "garden"}

# Extract numbers from story
numbers = {int(word) for word in story.split() if word.isdigit()}

# Create a set with nouns
story_set = nouns.copy()

# Add nested set (numbers)
story_set.add(frozenset(numbers))  

# Print results
print("Story Noun Set with Nested Numbers Set:")
print(story_set)


print("-- Assignment no 2 --")



# Story: "Azan has 2 cats and 1 dog. he lives in a house with his family."

# Create dictionary with nouns
nouns_dict = {
    "person": "Azan",
    "animals": ["cats", "dog"],
    "place": "house",
    "people": "family",
    "numbers": {           # Nested dictionary for numbers
        "cats": 2,
        "dog": 1
    }
}

# Print the dictionary
print("Dictionary with nouns:")
print(nouns_dict)

# Print nouns only (excluding numbers)
print("\nNouns only:")
for key, value in nouns_dict.items():
    if key != "numbers":
        print(f"{key}: {value}")

# Print nested dictionary with numbers
print("\nNumbers (nested dictionary):")
print(nouns_dict["numbers"])


print("-- Assignment 2 Using List with Nouns --")


# Assignment 2: Using List with Nouns

# Example story
story = """
Azan and azaan went to the market. 
They bought chocolate, brownie, and bananas. 
Azan also purchased 2 shirts and 1 perfume.
"""

# Nouns extracted manually from the story
nouns = [
    "Azan",
    "azaan",
    "market",
    "chocolate",
    "brownie",
    "bananas",
    "shirts",
    "perfume"
]

# Printing nouns in list
print("List of nouns in the story:")
print(nouns)
print("-------------------------------------ASSIGNMENT COMPLETE-------------------------------------")