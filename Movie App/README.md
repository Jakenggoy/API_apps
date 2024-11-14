# Movies App

The Movies App is a web application designed to help users discover, search, and organize movies into a watchlist. This app provides an intuitive interface for exploring movies by popularity, release date, or rating, and allows users to save their favorite movies for easy access later.

## Features

- Movie Search: Search for movies by entering a title.
- Sorting Options: Sort movies based on popularity, release date, or rating.
- Movie Details: Access detailed information for each movie, including cast members, a brief overview, runtime, and a trailer if available.
- Watchlist: Create a personalized watchlist by adding movies, which is stored in local storage.
- Responsive Design: Optimized for seamless viewing on mobile, tablet, and desktop screens.

## API

The app utilizes the Kinopoisk API to obtain movie data. Please note that there is a limit of 200 requests in total, so use the application's features efficiently.

## API Key

Make sure to replace the apiKey in scriptMovie.js with your personal API key:
```
const apiKey = "your_api_key_here";
```

## Installation

To set up the app locally, follow these steps:

1. Clone the repository:

 ```
  git clone https://github.com/yourusername/movies-app.git
  cd movies-app
 ```
   

2. Open the index.html file in your web browser to start using the app.

## Usage

- Search for Movies: Enter a movie title into the search bar (minimum 3 characters) to find results.
- View Details: Click on a movie card to display a modal with more information and a trailer if available.
- Add to Watchlist: Within the movie details modal, click "Add to Watchlist" to save a movie. The watchlist is maintained in local storage.
- Access Watchlist: Use the "Watchlist" button to view the movies you have saved.
- Sort Movies: Use the dropdown menu to organize movies by popularity, release date, or rating.

## Files

- index.html: The main HTML file that structures the app.
- styleMovie.css: Contains styling for the app’s layout and design.
- scriptMovie.js: JavaScript file that manages fetching and displaying movies, search functionality, and watchlist management.

## Acknowledgments

- API: Movie data is sourced from the Kinopoisk API.
- Icons: Icons are provided by Font Awesome.

## License

This project is licensed under the MIT License.
