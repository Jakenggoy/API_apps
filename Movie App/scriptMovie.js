const apiKey = "f4d56ed65d5258dd08156e85cb997994";
const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const movieModal = document.getElementById("movieModal");
const movieDetails = document.getElementById("movieDetails");
const closeModal = document.querySelector(".close");
const watchlistButton = document.getElementById("watchlistButton");

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

searchInput.addEventListener("input", async (event) => {
    const query = event.target.value;
    if (query.length > 2) {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
        const data = await res.json();
        displayMovies(data.results);
    }
});

async function loadMovies(sortBy = "popularity.desc") {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=${sortBy}`);
    const data = await res.json();
    displayMovies(data.results);
    searchInput.value = ""; 
}

function displayMovies(movies) {
    movieGrid.innerHTML = movies.map(movie => `
        <div class="movie-card" onclick="showMovieDetails(${movie.id})">
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
        </div>
    `).join('');
}

async function showMovieDetails(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,videos`);
    const movie = await res.json();
    
    const trailer = movie.videos.results.find(video => video.type === "Trailer" && video.site === "YouTube");
  
    movieDetails.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
        <p>Rating: ${movie.vote_average}</p>
        <p>Runtime: ${movie.runtime} mins</p>
        <p>Cast: ${movie.credits.cast.slice(0, 5).map(c => c.name).join(", ")}</p>
        <button class="button" onclick="addToWatchlist(${movie.id}, '${movie.title}')">Add to Watchlist</button>

        ${trailer ? `
            <div class="trailer">
                <h3>Trailer</h3>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/${trailer.key}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        ` : "<p>No trailer available.</p>"}
    `;
    movieModal.style.display = "block";
}

function addToWatchlist(movieId, title) {
    if (!watchlist.some(m => m.id === movieId)) {
        watchlist.push({ id: movieId, title });
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        alert(`${title} added to Watchlist`);
    }
}

closeModal.onclick = () => movieModal.style.display = "none";
window.onclick = event => {
    if (event.target === movieModal) movieModal.style.display = "none";
};

document.getElementById("sortOptions").addEventListener("change", (e) => loadMovies(e.target.value));
loadMovies();

watchlistButton.addEventListener("click", () => {
    if (watchlist.length > 0) {
        Promise.all(watchlist.map(movie => fetchMovieDetails(movie.id)))
            .then(movies => displayMovies(movies))
            .catch(error => console.error("Failed to load watchlist movies", error));
    } else {
        movieGrid.innerHTML = "<p>Your watchlist is empty.</p>";
    }
    searchInput.value = ""; 
});
  
async function fetchMovieDetails(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    return res.json();
}
function addToWatchlist(movieId, title) {
    if (!watchlist.some(m => m.id === movieId)) {
        watchlist.push({ id: movieId, title });
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        alert(`${title} added to Watchlist`);
    } else {
        alert(`${title} is already in your Watchlist`);
    }
}    