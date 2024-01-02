import Controller from './seatController';

const controller = new Controller();

function initSeats() {
    controller.loadSeatsFromBackend()
        .then(result => {
            render()
        })
        .catch(error => {
            console.log(error)
        })
}

function render () {

    const seats = controller.getSeats()

    const rootDiv = document.getElementById('root')
    rootDiv.innerHTML = ''

    for (let i = 0; i <seats.length; i++) {
    
        const newSeat = document.createElement('div')
        newSeat.classList.add('seat')
        newSeat.dataset.seatNumber = i;
    
        if (seats[i] === 'booked') {
            newSeat.classList.add('booked')   
        }

        if (seats[i] === 'selected') {
            newSeat.classList.add('selected')   
        }
        newSeat.addEventListener('click', (e) => {
            controller.selectSeat(i)
            render()
        })
        rootDiv.appendChild(newSeat)
    }

}

render()

// const button = document.getElementById('book-btn')
//     button.addEventListener('click', (e) => {

//         const isSeatSelectionSuccess = controller.bookSeats();

//         if(isSeatSelectionSuccess){

//             window.location.href ='./booking.html'

//         }
//         else {

//             alert('no seats selected')

//         }
//         render()
//     })

    initSeats()
 