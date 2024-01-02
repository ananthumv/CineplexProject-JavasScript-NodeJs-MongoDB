import Controller from './seatsController';

const controller = new Controller();


const params = new URLSearchParams(window.location.search)
const movieId = params.get('id')

function initSeats() {
    controller.loadRowsFromBackend(movieId)
        .then(data => {
            renderSeats()
            console.log(data.screen.row[1].noOfseats)
            console.log(typeof(data.screen.row[1].noOfseats))


        })
        .catch(error => {
            console.log(error)
        })
}
const rootDiv = document.getElementById("root")
function renderSeats() {
    const data = controller.getRows()
    rootDiv.innerHTML = ''
    for(let row = 0; row < data.length; row++){  
        const seats = document.createElement("div")
        seats.classList.add('seats')  
        const rowId = document.createElement("div")
        rowId.classList.add('rowId')
        rowId.innerHTML = data[row].rowId
        seats.append(rowId)
        for(let seatNo = 1; seatNo <= data[row].seats.length; seatNo++){
            const seat = document.createElement("div")
            seat.classList.add('seat')
            seat.innerHTML = seatNo
                
            if (data[row].seats[seatNo] === 'Selected') {
                seat.classList.add('selected')   
            }
            seat.addEventListener('click', (e) => {
                controller.selectSeat(row, seatNo)
                console.log(row, seatNo)
                renderSeats()
            })

            seats.append(seat)
        }
        rootDiv.append(seats)
    }
}


const button = document.getElementById('bookBtn')
button.addEventListener('click', (e) => {

    const isSeatSelectionSuccess = controller.bookSeats();

    if(isSeatSelectionSuccess){

        window.location.href ='./booking.html'

    }
    else {

        alert('no seats selected')

    }

        
    renderSeats()
})

initSeats()