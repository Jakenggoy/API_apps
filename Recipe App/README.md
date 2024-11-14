# Recipe App

This Recipe App is a simple and intuitive web-based application that allows users to search for recipes by dish name. By leveraging TheMealDB API, the app displays comprehensive details including ingredients, instructions, and more.

## Features

- Search Functionality: Users can enter a dish name in the search bar to find related recipes.
- Autocomplete Suggestions: While typing in the search bar, a list of matching recipes is suggested to the user.
- Recipe Details: View detailed information about recipes, such as ingredients, origin (area), and detailed instructions.
- Toggleable Recipe Instructions: Users can toggle the visibility of full recipe instructions for convenience.

## Tech Stack

- HTML5: For structuring the web application.
- CSS3: For styling and layout design.
- JavaScript: For dynamic functionality and interaction.
- TheMealDB API: To fetch and display recipe data.

## Installation

To set up the application locally, follow these steps:

1. Clone the repository:
  ```
      git clone https://github.com/yourusername/recipe-app.git
      cd recipe-app
  ```

2. Open the application:

      open index.html
   

## Usage

- Search for Recipes: Enter a dish name in the search input field (e.g., "Pasta") and use the search button or select from dropdown suggestions.
- View Recipe Details: Explore detailed information including an image, ingredients, and preparation instructions.
- Toggle Instructions: Click "View Recipe" to see the instructions or "X" to hide them.

## Code Overview

### HTML Structure (index.html)

- Input: Field for entering the name of the recipe.
- Button: Triggers the search functionality.
- Autocomplete Suggestions: Unordered list (ul) for displaying suggestions.
- Recipe Details: A div element for showing search results and recipe specifics.

### JavaScript Functionality (scriptRecipe.js)

- Autocomplete: Provides live suggestions as the user types.
- Recipe Display: Shows recipe details, including an image, origin of the dish, ingredients, and instructions.
- Instruction Toggle: Allows users to show or hide the recipe instructions.

### Styles (styleRecipe.css)

- Defines fundamental styling for the layout, containers, buttons, and ensures the app is responsive across devices.
