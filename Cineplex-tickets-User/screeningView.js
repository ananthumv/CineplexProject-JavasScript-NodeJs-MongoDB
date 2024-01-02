import Controller from "./aboutMovieController";

const controller = new Controller();

const rootDiv = document.getElementById("movieRoot")


const params = new URLSearchParams(window.location.search)
const movieId = params.get('id')


const screeningDiv = document.getElementById('screenRoot')

function initScreening() {
    controller.loadScreeningsFromBackend(movieId)
    .then(data => {
        // console.log(data)
        screenRender(data)
    })
    .catch(error => {
        console.log(error)
    })
     
}

function screenRender (screening) {

    screeningDiv.innerHTML = ''

    for(i=0; i<screening.length; i++) {

            // console.log(screening[i])

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
                window.location.href ='./seats.html?id='+ screenings.dataset.id
            })
            timeDiv.append(time)    
        }
        timeDiv.classList.add('timeDiv')
        screenings.append(timeDiv)


        

        screeningDiv.append(screenings)

    }

}

initScreening()
