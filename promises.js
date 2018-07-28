
let buttonClick = document.getElementById('jokeButton');
let inner = document.getElementById('demo');

let chuckNorris = function fetcher() {
                fetch("http://api.icndb.com/jokes/random")
                    .then(response => response.json())
                    .then(data => {
                        inner.innerHTML = data.value.joke;
                    });
                }

buttonClick.addEventListener('click', chuckNorris);







