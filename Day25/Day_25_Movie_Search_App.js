const apiKey = '7e77285f737cb8b55cf309624eb0a052';
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_original_language=hi`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const moviesContainer = document.querySelector('.movies-list');
        data.results.forEach((movie) => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            const moviePoster = document.createElement('div');
            moviePoster.classList.add('poster-container');
            moviePoster.innerHTML = `<img class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">`;

            const movieTitle = document.createElement('div');
            movieTitle.classList.add('title-container');
            movieTitle.innerHTML = `<h2>${movie.title} (${new Date(movie.release_date).getFullYear()})</h2>`;

            const movieInfo = document.createElement('div');
            movieInfo.classList.add('movie-about');
            movieInfo.innerHTML = `<h2>ⓘ Info</h2>`;

            movieElement.append(moviePoster);
            movieElement.append(movieTitle);
            movieElement.append(movieInfo);

            moviesContainer.appendChild(movieElement);

            movieInfo.addEventListener('click', () => {
                showMovieInfo(movie);
                moviesContainer.style.opacity = "0.6"
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));

function showMovieInfo(movie) {
    const movieInfoContainer = document.createElement('div');
    const moviesContainer = document.querySelector('.movies-list');
    movieInfoContainer.classList.add('movie-info');

    movieInfoContainer.innerHTML = `
        <h2>Title: ${movie.title} (${new Date(movie.release_date).getFullYear()})</h2>
        <p>Overview: ${movie.overview}</p>
        <p>Release Date: ${movie.release_date}</p>
        <button class="close-btn">Close</button>
    `;
console.log(movieInfoContainer)
    document.body.appendChild(movieInfoContainer);

    const closeButton = movieInfoContainer.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
        movieInfoContainer.remove();
        moviesContainer.style.opacity = 1
    });
}
