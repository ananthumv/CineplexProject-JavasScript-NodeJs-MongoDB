
// let seats = [false,false,false,false,false,false,false,false,false,false,]


// function render () {
 
//     const rootDiv = document.getElementById('root')
//     rootDiv.innerHTML = '';

//     for (let i = 0; i <seats.length; i++) {
    

//         const newSeat = document.createElement('div')
//         newSeat.classList.add('seat')
//         newSeat.dataset.seatNumber = i;
    
//         if (seats[i] === true) {
//             newSeat.classList.add('booked')   
//         }
//         newSeat.addEventListener('click' , (event) => {
//             bookSeat(i)
//         })
//         rootDiv.appendChild(newSeat)
//     }

//     function bookSeat (seatNumber) {
//         if (seats[seatNumber] === false) {
//             seats[seatNumber] = true
//             render ()
            
//             console.log("booked")
//         }else {
//             seats[seatNumber] = false
//             render()
//         }
//     }

    
// }

// render()

