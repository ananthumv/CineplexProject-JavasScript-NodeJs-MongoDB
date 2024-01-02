import Controller from "./addMovieController";

const controller = new Controller();

const form = document.getElementById('movieDetails')
const title = document.getElementById('title')
const image = document.getElementById('image')
const director = document.getElementById('director')
const genre = document.getElementById('genre')
const duration = document.getElementById('duration')
const summery = document.getElementById('summery')
const button = document.getElementById('button')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    controller.addMovies(title.value, image.value, director.value, genre.value, duration.value, summery.value)
    .then( (res) =>{
        console.log(res)
    })
    .catch( (err) => {
        console.log(err)
        console.log("here")
    })
    form.reset()
    render()
})

function render() {
    const movieDetails = controller.getMovieDetails()
    console.log(movieDetails)
}

