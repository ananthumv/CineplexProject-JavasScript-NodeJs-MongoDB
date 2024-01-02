import Controller from "./updateMovieController";

const controller = new Controller();


const params = new URLSearchParams(window.location.search)
const movieId = params.get('id')


const form = document.getElementById('movieDetails')
let title = document.getElementById('title')
let image = document.getElementById('image')
let director = document.getElementById('director')
let genre = document.getElementById('genre')
let duration = document.getElementById('duration')
let summery = document.getElementById('summery')
const button = document.getElementById('button')



    controller.loadMovieFromBackend(movieId)
    .then(data => {
         title.value = document.getElementById('title').value =  data.title
         image.value = document.getElementById('image').value =  data.image
         director.value = document.getElementById('director').value =  data.director
         genre.value = document.getElementById('genre').value =  data.genre
         duration.value = document.getElementById('duration').value =  data.duration
         summery.value = document.getElementById('summery').value =  data.summery
    })
    .catch(error => {
        console.log(error)
    }) 





form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(title.value)
        // console.log(movieId)

    controller.updateMovies(movieId, title.value, image.value, director.value, genre.value, duration.value, summery.value)
    .then( (res) =>{
        console.log(res)
    })
    .catch( (err) => {
        
        console.log(err)
        console.log("here")
    })
    form.reset()
})


