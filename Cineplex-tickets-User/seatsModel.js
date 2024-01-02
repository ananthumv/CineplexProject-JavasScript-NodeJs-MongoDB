import axios from "axios"


class Model{
    constructor() {

        this.rows = []
        console.log(this.rows)

    }

    getRows(){
        return this.rows
    }



    async loadRowsFromBackend(id) {

        const res = await axios.get('http://localhost:9000/screening/'+id)
        const seats = res.data

        this.seat = seats.screen.row.map(row => {

            const rows = new Object();
            rows.rowId = row.rowId;
            rows.seats = [];
            for(let i=0; i<row.noOfseats; i++){

                rows.seats.push("Available")

            }

            this.rows.push(rows)

        })
        return seats  
    }

    selectSeat(row, seatNo) {

        for(let rows = 0; rows < this.rows.length; rows++){

            for(let seats = 1; seats<= this.rows[rows].seats.length; seats++){

                if (rows === row && seats===seatNo) {

                    if (this.rows[row].seats[seats] === "Available") {

                        this.rows[row].seats[seats] = 'Selected'
                        console.log(this.rows[rows].seats[seats])

                    }else if(this.rows[row].seats[seats] === 'Selected') {

                        this.rows[row].seats[seats] = 'Available'
                        console.log(this.rows[rows].seats[seats])

                    }
                }
            }
        }  

    }
    
    
    bookSeats() {
        
        let selectedSeats = []
        for(let row=0; row<this.rows.length; row++) {

            for(let seatNo=1; seatNo<=this.rows[row].seats.length; seatNo++) {

                if(this.rows[row].seats[seatNo] === 'Selected') {

                    console.log(row, seatNo)
                    const selectedSeat = {
                        rowId: this.rows[row].rowId,
                        seat: seatNo
                    }
                    selectedSeats.push(selectedSeat)

                }
            }
        }

        console.log(selectedSeats)


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
