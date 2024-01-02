import axios from "axios";

class Model {
    constructor() {

        this.seats = [];

    }

    async loadSeatsFromBackend() {
        const res = await axios.get('http://localhost:3000/seats')
        const seats = res.data
        this.seats = seats.map(seat => {
            if(seat === true) {
                return 'booked'
            }else{
                return 'available'
            }
        })
        return true;
    }

    getSeats () {
        return this.seats;
    }

    selectSeat(i) {

        // console.log(this.seats[i])

        if (this.seats[i] === 'available') {
            this.seats[i] = 'selected'
            console.log("selected")

        }else if(this.seats[i] === 'selected'){
            this.seats[i] = 'available'
            console.log("available")
        }
    }
    
    bookSeats() {
        

        let selectedSeats = []

        this.seats.forEach((seat, i) => {
            if (seat === 'selected') {
                
                selectedSeats.push(i)

                // console.log(selectedSeats)
                 
            }
        })

        if(selectedSeats.length === 0){
            return false
        }
        else {
            localStorage.setItem('seats', JSON.stringify(selectedSeats))
            return true
        }
    }
}

export default Model;


// npm i axios
