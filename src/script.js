// Використовуючи AJAX, створіть функцію, яка буде відправляти GET-запити до 
// TMDB API та отримувати інформацію про фільми.
// При кліку на кнопку на сторінці, виконайте AJAX-запит до
//  TMDB API та відобразіть результат на сторінці, наприклад, 
// список фільмів або деталі про певний фільм.

const apiKey = '71c3daa9589b3ba88d7c5d90ff9276b7'

const makeList = (array) => array.map((element) => `
        <li>
            <h2>Title: ${element.original_title}</h2>
            <p>Overview: ${element.overview}</p>
            <p>Popularity: ${element.popularity}</p>
            <p>Release date: ${element.release_date}</p>
            <p>Vote count: ${element.vote_count}</p>
            <p>Language: ${element.original_language}</p>
            <img src="${element}" alt="avatar">
        </li>`
    ).join("")
 


fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=71c3daa9589b3ba88d7c5d90ff9276b7`)
  .then((res) => {return res.json()})
  .then((data) => {document.querySelector('ul').innerHTML = makeList(data.results)})
  .catch(err => console.error(err));