import Controller from "./homeController";
const controller = new Controller();


const rootDiv = document.getElementById("root")
// const  image = document.getElementById("image")
// const  title = document.getElementById("title")
// const  genre = document.getElementById("genre")
// const  duration = document.getElementById("duration")
// const  summery = document.getElementById("summery")


function initMovies() {
    controller.loadMovieFromBackend()
    .then(data => {
        render(data)
        console.log(data)
    })
    .catch(error => {
        console.log("here ....")
        console.log(error)
    }) 
}

function render(data){

    rootDiv.innerHTML = ''

    for (let i = 0; i < data.length; i++) {


        const movies = document.createElement('div')
        movies.dataset.id=data[i]._id

        const movie = document.createElement('div')
        movie.classList.add('movie')
        movies.append(movie)
        
        const image = document.createElement('img')
        image.src = data[i].image
        image.classList.add('image')
        movie.append(image)

        const title = document.createElement('p')
        title.innerHTML = data[i].title
        title.classList.add('title')
        movie.append(title)

        const genre = document.createElement('p')
        genre.innerHTML = data[i].genre
        genre.classList.add('genre')
        movie.append(genre)

        const duration = document.createElement('p')
        duration.innerHTML = data[i].duration
        duration.classList.add('duration')
        movie.append(duration)

        const summery = document.createElement('p')
        summery.innerHTML = data[i].summery
        summery.classList.add('summery')
        movie.append(summery)

        image.addEventListener('click', (e) => {

        window.location.href ='./aboutMovie.html?id='+ movies.dataset.id        
    })

        rootDiv.append(movies)
    }

}


initMovies()


