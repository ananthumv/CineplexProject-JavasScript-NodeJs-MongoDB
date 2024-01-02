import Model from './seatsModel'

class Controller {

    constructor() {

        this.model = new Model();

    }

    getRows(){
        return this.model.getRows()
    }


    loadRowsFromBackend(movieId) {
        return this.model.loadRowsFromBackend(movieId)
    }

    selectSeat(row, seatNo){
        this.model.selectSeat(row, seatNo)
    }

    bookSeats() {
        return this.model.bookSeats()
    }


}

export default Controller;