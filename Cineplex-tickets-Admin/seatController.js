import Model from './seatModel'

class Controller {

    constructor() {

        this.model = new Model();

    }

    loadSeatsFromBackend() {
        return this.model.loadSeatsFromBackend()
    }

    getSeats() {
        return this.model.getSeats();
    }

    selectSeat(i){
        this.model.selectSeat(i)
    }

    bookSeats() {
        return this.model.bookSeats()
    }

}

export default Controller;