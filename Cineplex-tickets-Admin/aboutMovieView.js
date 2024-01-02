import Controller from "./aboutMovieController";

const controller = new Controller();

const rootDiv = document.getElementById("movieRoot")


const params = new URLSearchParams(window.location.search)
const movieId = params.get('id')



function initMovies() {
    controller.loadMovieFromBackend(movieId)
    .then(data => {
        movieRender(data)
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    }) 
}

function movieRender(data){

    rootDiv.innerHTML = ''

        
        const movieInfo = document.createElement("div")
        movieInfo.classList.add("movieInfo")

        const movieImage = document.createElement("div")
        movieImage.classList.add("movieImage")
        
        const image = document.createElement("img")
        image.src = data.image
        image.classList.add("image")
        movieImage.append(image)

        movieInfo.append(movieImage)

        const movieDetails = document.createElement("div")
        movieDetails.classList.add("movieDetails")

        const title = document.createElement("h1")
        title.innerHTML = data.title
        movieDetails.append(title)

        const genre = document.createElement("p")
        genre.innerHTML = data.genre
        movieDetails.append(genre)

        const duration = document.createElement("p")
        duration.innerHTML = data.duration
        movieDetails.append(duration)

        movieInfo.append(movieDetails)

        rootDiv.append(movieInfo)

        const aboutMovie = document.createElement("div")
        aboutMovie.classList.add("aboutMovie")

        const about = document.createElement("h4")
        about.innerHTML = "About the Movie"
        aboutMovie.append(about)

        const summery = document.createElement("p")
        summery.innerHTML = data.summery
        aboutMovie.append(summery)

        const directors = document.createElement("h4")
        directors.innerHTML = "Directors"
        aboutMovie.append(directors)

        const director = document.createElement("p")
        director.innerHTML = data.director
        aboutMovie.append(director)

        rootDiv.append(aboutMovie)
    
}

initMovies()



const screeningDiv = document.getElementById('screenRoot')

function initScreening() {
    controller.loadScreeningsFromBackend(movieId)
    .then(data => {
        console.log(data)
        screenRender(data)
    })
    .catch(error => {
        console.log(error)
    })
     
}

function screenRender (screening) {

    screeningDiv.innerHTML = ''

    for(i=0; i<screening.length; i++) {

            console.log(screening[i])

        const screenings = document.createElement('div')
        screenings.dataset.id=screening[i]._id
        screenings.classList.add('screenings')
        

        const screenNumber = document.createElement('h4')
        screenNumber.innerHTML = `Screen  ${screening[i].screen.screenNumber}`
        screenNumber.classList.add('screenNumber')
        screenings.append(screenNumber)


        const timeDiv = document.createElement('div')
        for (let j = 0; j < screening[i].time.length; j++) {
            const time = document.createElement('p')
            time.innerHTML =  screening[i].time[j]
            time.classList.add('time')
            time.addEventListener('click', (e) => {
                window.location.href ='./seat.html?id='+ screenings.dataset.id
            })
            timeDiv.append(time)    
        }
        timeDiv.classList.add('timeDiv')
        screenings.append(timeDiv)


        

        screeningDiv.append(screenings)

    }

}

initScreening()
