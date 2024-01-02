import Controller from "./tickets-controller.js";

const controller = new Controller();

const rootDiv = document.getElementById('root')



function initTickets() {
    controller.loadTicketsFromBackend()
    .then(data => {
        render(data)
    })
    .catch(error => {
        console.log(error)
    })
}

// controller.getContacts()
//     .then(data => {
//         render(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

function render (booking) {

rootDiv.innerHTML = ''

    for(i=0; i<booking.length; i++) {

        const tickets = document.createElement('div')
        tickets.classList.add('tickets')

        const ticketsDetails = document.createElement('div')
        ticketsDetails.classList.add('ticket-details')
        tickets.append(ticketsDetails)

        const name = document.createElement('p')
        name.innerHTML = `Name : ${booking[i].name}`  //template literals
        ticketsDetails.append(name)

        const email = document.createElement('p')
        email.innerHTML = `Email id : ${booking[i].email}`
        ticketsDetails.append(email)

        const number = document.createElement('p')
        number.innerHTML = `Phone number : ${booking[i].number}`
        ticketsDetails.append(number)

        // const seatsSelected = document.createElement('p')
        // seatsSelected.innerHTML = `Selected Seats : ${booking[i].seatsSelected}`

        const seatsSelected = document.createElement('p')
        let seatsString = ''
        for(let seatCounter = 0; seatCounter<booking[i].seatsSelected.length; seatCounter++) {

            let seatString = booking[i].seatsSelected[seatCounter].rowId+booking[i].seatsSelected[seatCounter].seat
            seatsString = seatsString+ (seatCounter===0? '':', ') +seatString

        }
        seatsSelected.innerHTML = `Selected Seats : ${seatsString}`
        ticketsDetails.append(seatsSelected)

        const cancel = document.createElement('button')
        cancel.innerHTML = 'Cancel'
        cancel.id = i
        cancel.addEventListener('click', (e) => {
            console.log(cancel.id)

            booking = booking.filter ((booking ,i)=>{
                if (i !== Number(cancel.id)) {
                    return booking
                }
            })

            console.log(booking)
            render(booking)
        })
        ticketsDetails.append(cancel)

        rootDiv.append(tickets)

    }

}

initTickets();